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

export async function getUserlevel(user_id) {
  let { data: userlevel } = await supabase
    .from("userlevel")
    .select("level")
    .eq("user_id", user_id)
    .limit(1)
    .single();
  return userlevel;
}

export async function isLoggedIn(req: Request) {
  return (await getUser(req)) != null;
}

export async function isAdmin(user_id) {
  let level = await getUserlevel(user_id);
  return level.level == 1;
}
