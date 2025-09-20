import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fdbghpfwbbbqmschkmxe.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const LIMIT = 5, WINDOW = 60000
const requests = new Map()

export async function middleware(req) {
  const ip = req.ip || req.headers.get("x-forwarded-for")
  const now = Date.now()
  if (req.nextUrl.hostname !== "localhost") {
    const times = (requests.get(ip) || []).filter(t => now - t < WINDOW)
    if (times.length >= LIMIT) return new NextResponse("Rate limit exceeded", {status:429})
    requests.set(ip, [...times, now])
  }

  const url = req.nextUrl.clone()
  if (req.headers.get("x-forwarded-proto") !== "https" && req.nextUrl.hostname !== "localhost") {
    url.protocol = "https"; return NextResponse.redirect(url)
  }

  const auth = req.headers.get("authorization")
  if (auth?.startsWith("Basic")) {
    const [, password] = Buffer.from(auth.split(" ")[1], "base64").toString().split(":")
    const { data } = await supabase.from("passwords").select("*").eq("password", password).eq("used", false).single()
    if (data) {
      if (data.type === "otp") await supabase.from("passwords").update({ used: true }).eq("password", password)
      return NextResponse.next()
    }
  }

  return new NextResponse("Unauthorized", {status:401, headers: {"WWW-Authenticate":'Basic realm="Restricted Area"'}})
}

export const config = { matcher: ["/study/:path*"] }