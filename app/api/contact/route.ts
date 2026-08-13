interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  msg?: string;
  formName?: string;
  pageUrl?: string;
  location?: {
    ip?: string;
    isp?: string;
    org?: string;
    country?: string;
    region?: string;
    city?: string;
  };
}

function escapeHtml(value: string | undefined) {
  return (value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request: Request) {
  const username = process.env.CONTACT_SMTP_USER;
  const password = process.env.CONTACT_SMTP_PASSWORD;

  if (!username || !password) {
    return Response.json(
      { success: false, message: 'Contact email is not configured.' },
      { status: 503 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ success: false, message: 'Invalid form data.' }, { status: 400 });
  }

  if (!payload.name?.trim() || !payload.email?.trim() || !payload.phone?.trim() || !payload.msg?.trim()) {
    return Response.json({ success: false, message: 'Please complete all required fields.' }, { status: 400 });
  }

  const location = payload.location ?? {};
  const html = `
    <h3>Contact Details</h3>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Message:</strong> ${escapeHtml(payload.msg)}</p>
    <hr />
    <h3>Meta Details</h3>
    <p><strong>Form Name:</strong> ${escapeHtml(payload.formName)}</p>
    <p><strong>Page URL:</strong> ${escapeHtml(payload.pageUrl)}</p>
    <p><strong>IP:</strong> ${escapeHtml(location.ip)}</p>
    <p><strong>ISP:</strong> ${escapeHtml(location.isp)}</p>
    <p><strong>Org:</strong> ${escapeHtml(location.org)}</p>
    <p><strong>Country:</strong> ${escapeHtml(location.country)}</p>
    <p><strong>Region:</strong> ${escapeHtml(location.region)}</p>
    <p><strong>City:</strong> ${escapeHtml(location.city)}</p>
  `;

  try {
    const response = await fetch(
      process.env.CONTACT_EMAIL_API_URL ?? 'https://for-send-email-moeed.vercel.app/api/send',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.CONTACT_SMTP_FROM ?? username,
          to: process.env.CONTACT_SMTP_TO ?? 'support@cobwebgames.com',
          subject: 'New Contact Form Submission',
          smtphost: process.env.CONTACT_SMTP_HOST ?? 'smtp.gmail.com',
          smtpport: Number(process.env.CONTACT_SMTP_PORT ?? 465),
          username,
          password,
          html,
        }),
        cache: 'no-store',
      },
    );
    const result = (await response.json()) as { success?: boolean; message?: string };
    const success = Boolean(response.ok && result.success);

    return Response.json(
      { success, message: result.message },
      { status: success ? 200 : 502 },
    );
  } catch {
    return Response.json({ success: false, message: 'Email service is unavailable.' }, { status: 502 });
  }
}
