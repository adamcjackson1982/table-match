export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { name, email, message } = body

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      message: 'Name, email, and message are required'
    })
  }

  const mailgunDomain = config.mailgunDomain
  const mailgunApiKey = config.mailgunApiKey

  if (!mailgunDomain || !mailgunApiKey) {
    throw createError({
      statusCode: 500,
      message: 'Mail service not configured'
    })
  }

  const formData = new FormData()
  formData.append('from', `TableMatch Contact <noreply@${mailgunDomain}>`)
  formData.append('to', 'adjackson924@protonmail.com')
  formData.append('reply-to', email)
  formData.append('subject', `TableMatch Contact: ${name}`)
  formData.append('text', `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

  try {
    const response = await fetch(`https://api.eu.mailgun.net/v3/${mailgunDomain}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString('base64')}`
      },
      body: formData
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Mailgun error:', error)
      throw createError({
        statusCode: 500,
        message: 'Failed to send message'
      })
    }

    return { success: true, message: 'Message sent successfully' }
  } catch (error) {
    console.error('Contact form error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to send message'
    })
  }
})
