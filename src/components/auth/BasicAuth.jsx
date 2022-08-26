import { Auth } from "@supabase/ui";
import { supabase } from "../../lib/supabaseClient";

export default function AuthBasic() {
  return <Auth supabaseClient={supabase} />;
}
