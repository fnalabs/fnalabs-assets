import { type Dispatch, type FC, createContext, useReducer } from 'react'
import { Cookies } from 'react-cookie-consent'

export const CONSENTED = 'CONSENTED'
export const DECLINED = 'DECLINED'

export const ConsentContext = createContext<boolean>(false)
export const ConsentDispatchContext = createContext<Dispatch<string>>(() => {})

export const consentReducer = (consent: boolean, action: string) => {
  switch (action) {
    case CONSENTED:
      return true
    case DECLINED:
      return false
    default:
      return consent
  }
}

export interface IConsentProvider {
  children: React.ReactNode
}
const ConsentProvider: FC<IConsentProvider> = ({ children }) => {
  const [consent, dispatch] = useReducer(consentReducer, !!Cookies.get('CookieConsent'))

  return (
    <ConsentContext value={consent}>
      <ConsentDispatchContext value={dispatch}>
        {children}
      </ConsentDispatchContext>
    </ConsentContext>
  )
}
export default ConsentProvider
