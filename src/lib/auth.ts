import cookie from "cookie";
import { supabase } from "./supabaseClient";

export async function getUser(req: Request) {
  const c = cookie.parse(req.headers.get("cookie") ?? "");
  if (!c.sbat) {
    return null;
  }

  const resp = await supabase.auth.api.getUser(c.sbat);
  if (!resp.user || resp.user.role !== "authenticated") {
    return null;
  }
  return resp.user;
}

export async function isLoggedIn(req: Request) {
  return (await getUser(req)) != null;
}
