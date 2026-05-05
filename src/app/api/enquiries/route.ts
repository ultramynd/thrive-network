import { NextResponse } from "next/server";

type EnquiryBody = {
  type?: string;
  payload?: Record<string, unknown>;
};

const allowedTypes = new Set([
  "contact",
  "consultation",
  "safeguarding-booking",
  "assessment-request",
  "newsletter",
]);

export async function POST(request: Request) {
  let body: EnquiryBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.type || !allowedTypes.has(body.type) || !body.payload) {
    return NextResponse.json({ error: "Invalid enquiry" }, { status: 400 });
  }

  const payload = sanitisePayload(body.type, body.payload);
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL ?? "website@thrive-network.org";

  if (resendKey && to) {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `Thrive Network enquiry: ${body.type}`,
        text: Object.entries(payload)
          .map(([key, value]) => `${key}: ${String(value)}`)
          .join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      return NextResponse.json(
        { error: "Email delivery failed" },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({
    ok: true,
    delivered: Boolean(resendKey && to),
  });
}

function sanitisePayload(type: string, payload: Record<string, unknown>) {
  const allowedKeys =
    type === "assessment-request"
      ? [
          "name",
          "email",
          "phone",
          "contactMethod",
          "supportType",
          "sensitiveConsent",
        ]
      : [
          "name",
          "email",
          "phone",
          "organisation",
          "topic",
          "message",
          "package",
          "delivery",
          "privacyConsent",
        ];

  return Object.fromEntries(
    allowedKeys
      .filter((key) => payload[key] !== undefined)
      .map((key) => [key, String(payload[key]).slice(0, 2000)]),
  );
}
