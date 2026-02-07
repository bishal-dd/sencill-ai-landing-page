import { useEffect, useState } from 'react'

export function useCountryCode() {
  const [countryCode, setCountryCode] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        setCountryCode(data.country_code) // e.g. "BT", "US"
      })
      .catch(() => {
        setCountryCode('BT') // fallback
      })
  }, [])

  return countryCode
}
