'use client'

import posthog from 'posthog-js'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: 'https://app.posthog.com',
    cross_subdomain_cookie: true,
    capture_pageview: true,
    debug: false, // 👈 temporarily enable this
  })
}

export default posthog
