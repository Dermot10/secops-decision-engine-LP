import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid") {
      const email = session.customer_details?.email;

      if (!email) {
        console.error("No email in session:", session.id);
        return NextResponse.json({ error: "No email" }, { status: 400 });
      }

      const { error } = await supabaseAdmin
        .from("users")
        .upsert(
          { email: email.toLowerCase(), paid: true, paid_at: new Date().toISOString() },
          { onConflict: "email" }
        );

      if (error) {
        console.error("Supabase update failed:", error);
        return NextResponse.json({ error: "DB update failed" }, { status: 500 });
      }

      console.log("Paid confirmed for:", email);
    }
  }

  return NextResponse.json({ received: true });
}