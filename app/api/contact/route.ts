import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const name = data.name || data.n || 'not fill by user';
    const email = data.email || data.e || 'not fill by user';
    const phone = data.phone || data.p || 'not fill by user';
    const msg = data.msg || data.m || data.description || 'not fill by user';
    const service = data.service || data.s || 'not fill by user';
    const pkg = data.package || data.pa || 'not fill by user';
    const interest = data.interest || data.i || 'not fill by user';
    const ftype = data.ftype || data.Form_name || 'Form fill buy user verified';
    const ip = data.ip2loc_ip || 'not fill by user';
    const cn = data.ip2loc_country || 'not fill by user';
    const re = data.ip2loc_region || 'not fill by user';
    const ci = data.ip2loc_city || 'not fill by user';
    const url = data.pageurl || data.pageUrl || 'not fill by user';
    const Form_name = data.Form_name || data.formName || data.ftype || 'not fill by user';

    // Construct SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: 'maltaserver.stagingtestserver.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'no-reply@cobwebgames.com',
        pass: 'w&fmaUg8[uqF',
      },
    });

    // Construct HTML Email Content
    let htmlContent = '';

    // 1. Core form fields
    htmlContent += `<p><strong>Name:</strong> ${name}</p>`;
    htmlContent += `<p><strong>Email:</strong> ${email}</p>`;
    htmlContent += `<p><strong>Phone:</strong> ${phone}</p>`;
    htmlContent += `<p><strong>Message:</strong> ${msg}</p>`;
    if (service !== 'not fill by user') htmlContent += `<p><strong>Service:</strong> ${service}</p>`;
    if (pkg !== 'not fill by user') htmlContent += `<p><strong>Package:</strong> ${pkg}</p>`;
    if (interest !== 'not fill by user') htmlContent += `<p><strong>Interest:</strong> ${interest}</p>`;

    // 2. Dynamically include any other properties passed in the request body to ensure all fields are captured
    const mappedKeys = [
      'name', 'email', 'phone', 'msg', 'service', 'package', 'interest', 'ftype',
      'ip2loc_ip', 'ip2loc_country', 'ip2loc_region', 'ip2loc_city', 'pageurl', 'pageUrl', 'Form_name', 'formName',
      'n', 'e', 'p', 'm', 's', 'pa', 'i',
      'first_landing_url', 'lead_source', 'utm_source', 'utm_medium', 'utm_campaign', 'gclid', 'original_referrer', 'form_submission_url'
    ];
    for (const [key, value] of Object.entries(data)) {
      if (!mappedKeys.includes(key) && value) {
        htmlContent += `<p><strong>${key}:</strong> ${value}</p>`;
      }
    }

    // Extract Tracking Fields
    const first_landing_url = data.first_landing_url || 'not fill by user';
    const lead_source = data.lead_source || 'Organic';
    const utm_source = data.utm_source || 'not fill by user';
    const utm_medium = data.utm_medium || 'not fill by user';
    const utm_campaign = data.utm_campaign || 'not fill by user';
    const gclid = data.gclid || 'not fill by user';
    const original_referrer = data.original_referrer || 'not fill by user';
    const form_submission_url = data.form_submission_url || 'not fill by user';

    // 3. User Geolocation & Form Metadata (at the very end)
    htmlContent += `<hr />`;
    htmlContent += `<p><strong>IpAddress:</strong> ${ip}</p>`;
    htmlContent += `<p><strong>Country:</strong> ${cn}</p>`;
    htmlContent += `<p><strong>State:</strong> ${re}</p>`;
    htmlContent += `<p><strong>City:</strong> ${ci}</p>`;
    htmlContent += `<p><strong>Url:</strong> ${url}</p>`;
    htmlContent += `<p><strong>Form Name:</strong> ${Form_name}</p>`;

    // Recipients list
    const recipients = [
      'zain@iceanimations.com',
      'murtaza.khan@sybrid.com',
      'ppc@iceanimations.com',
      'abdullah.ppc@iceanimations.com',
      'hassan.ali@iceanimations.com',
      'ali.haider@canvasdigital.org'
    ];

    // Send Mail
    await transporter.sendMail({
      from: '"Cobweb Games | Website Lead" <no-reply@cobwebgames.com>',
      to: recipients.join(', '),
      subject: `New Website Lead - ${Form_name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
