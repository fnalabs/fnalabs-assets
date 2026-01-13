import React, { type FC, use, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga4'
import { ConsentDispatchContext } from '../../contexts/ConsentContext'

export interface IAnalyticsToast {
  gaId: string
}
const AnalyticsToast: FC<IAnalyticsToast> = ({ gaId }) => {
  // TODO: confirm rules/laws around consent and how long we should store it
  const [isConsented, setIsConsented] = useState<boolean>(!!Cookies.get('CookieConsent'))
  const dispatch = useContext(ConsentDispatchContext)

  const handleAccept = () => {
    setIsConsented(true)
    dispatch('CONSENTED')
    // TODO: Add page view call here
  }

  const handleDecline = () => {
    if (Cookies.get('CookieConsent') === 'true') Cookies.set('CookieConsent', 'false')
    setIsConsented(false)
    dispatch('DECLINED')
  }

  useEffect(() => {
    ReactGA.initialize(gaId)
  }, [])

  return !isConsented && (
    <CookieConsent
      disableStyles
      enableDeclineButton
      buttonText='Accept'
      declineButtonText='Decline'
      buttonClasses='button is-small is-pulled-right is-dark'
      declineButtonClasses='button is-small is-pulled-right is-light'
      buttonWrapperClasses='buttons is-justify-content-end'
      containerClasses='notification is-primary is-radiusless'
      style={{ position: 'fixed', width: '100%' }}
      onAccept={handleAccept}
      onDecline={handleDecline}
      debug
    >
      FnA Labs uses cookies to enhance your experience. By clicking <strong>Accept</strong>, you are agreeing to our <Link to='/cookie'>Cookie</Link> and <Link to="/privacy">Privacy</Link> policies.
    </CookieConsent>
  )
}
export default AnalyticsToast
