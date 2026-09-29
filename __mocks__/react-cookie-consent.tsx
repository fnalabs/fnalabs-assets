import CookieConsent from 'react-cookie-consent'

export default CookieConsent
export const Cookies = {
  value: '',
  get() { return this.value },
  set(value: string) { this.value = value },
}
