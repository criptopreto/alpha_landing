import MailerLite from "@mailerlite/mailerlite-nodejs";
import { headers } from "next/headers";

const API_KEY = process.env.MAILERLITE_API_KEY;
const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

const mailerlite = new MailerLite({
  api_key: API_KEY,
});

function getIP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

export async function POST(req) {
  const formData = await req.json();

  const ip = getIP();

  const { email } = formData;

  if (!email) {
    return Response.json({ error: "Email is required" });
  }

  const data = {
    email,
    groups: [`${GROUP_ID}`],
    ip_address: ip,
  };

  try {
    const result = await mailerlite.subscribers.createOrUpdate(data);
    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,

      error: error.message || error.toString(),
    });
  }
}
