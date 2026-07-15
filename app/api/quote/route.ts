import { NextResponse } from "next/server";

/**
 * Quote request endpoint (brief §3/§11, Pending #1).
 * For now: validates lightly and logs to the server console.
 * Wire-up points for later (no component changes needed):
 *   - Email: Resend / SMTP (send to site.email)
 *   - WhatsApp Business API handoff
 *   - CRM / spreadsheet
 * The client also offers mailto:/WhatsApp fallbacks, so enquiries are never lost.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data || typeof data !== "object" || !data.email || !data.service) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    // eslint-disable-next-line no-console
    console.log("[Discover Mauritius] New quote request:", JSON.stringify(data, null, 2));

    // TODO: integrate mail/WhatsApp/CRM here.
    return NextResponse.json({ ok: true, message: "Received" });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
