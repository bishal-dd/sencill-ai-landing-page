import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const AUDIENCE_ID = 'e9ccfea8-841a-45b3-87b9-61be55e0cbc3'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return new Response('Missing email', { status: 400 })
    }

    // Unsubscribe user in Resend
    await resend.contacts.update({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: true,
    })

    // Success HTML page
    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Unsubscribed</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin:0; font-family:Arial; background:#fff8db; display:flex; align-items:center; justify-content:center; height:100vh;">
          <div style="background:#ffffff; padding:40px; border-radius:12px; text-align:center; max-width:400px;">
            <h1 style="color:#111827;">You have Unsubscribed</h1>
            <p style="color:#6b7280;">
              You will no longer receive emails from <strong>Sencill AI</strong>.
            </p>
          </div>
        </body>
      </html>
      `,
      { headers: { 'Content-Type': 'text/html' } },
    )
  } catch (error) {
    console.error(error)

    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <body style="font-family:Arial; text-align:center; padding:40px;">
          <h2>Something went wrong</h2>
          <p>Please try again later.</p>
        </body>
      </html>
      `,
      { headers: { 'Content-Type': 'text/html' }, status: 500 },
    )
  }
}
