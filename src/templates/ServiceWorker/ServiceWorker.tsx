import React, { type FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export const locationReload = () => location.reload()

export interface IServiceWorker {
  src: string
  scope: string
}
const ServiceWorker: FC<IServiceWorker> = ({ src, scope }) => {
  const [serviceWorker, setServiceWorker] = useState<ServiceWorkerRegistration | null>(null)
  const location = useLocation()

  // register the service worker once on mount
  useEffect(() => {
    (async () => {
      if ('serviceWorker' in navigator) {
        const sw = await navigator.serviceWorker.register(src, { scope })
        navigator.serviceWorker.addEventListener('controllerchange', locationReload)
        setServiceWorker(sw)
      }
    })()
  }, [])

  // check for updates on location change
  useEffect(() => {
    (async () => {
      if (serviceWorker) {
        const sw = await serviceWorker.update()
        setServiceWorker(sw)
      }
    })()
  }, [location])

  return <div>{/* TODO: insert app state messaging here */}</div>
}
export default ServiceWorker
