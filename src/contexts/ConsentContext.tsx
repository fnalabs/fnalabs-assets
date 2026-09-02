import { type Dispatch, type FC, type ReactNode, createContext, useReducer } from 'react'
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
  /** Child content to render in the ConsentProvider. */
  children: ReactNode,
  /** Optional initial consent state for the ConsentProvider. */
  initial?: boolean,
}
const ConsentProvider: FC<IConsentProvider> = ({ children, initial }) => {
  const [consent, dispatch] = useReducer(consentReducer, initial ?? !!Cookies.get('CookieConsent'))

  return (
    <ConsentContext value={consent}>
      <ConsentDispatchContext value={dispatch}>
        {children}
      </ConsentDispatchContext>
    </ConsentContext>
  )
}
export default ConsentProvider
