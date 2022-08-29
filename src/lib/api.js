import { supabase } from "./supabaseClient";

function getTodayText() {
  let today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
}

export async function getAllCasinos() {
  let { data: casinos } = await supabase.from("casinos").select("*");
  return casinos;
}

export async function getAllTorneos() {
  let { data: torneos } = await supabase.from("torneos").select("*");
  return torneos;
}

export async function getCasino(id) {
  let { data: casino } = await supabase
    .from("casinos")
    .select("*")
    .eq("id", id)
    .limit(1)
    .single();
  return casino;
}

export async function getTorneo(id) {
  let { data: torneo } = await supabase
    .from("torneos")
    .select("*,casinos(*)")
    .eq("id", id)
    .limit(1)
    .single();
  return torneo;
}

export async function getTorneosCasino(id) {
  let { data: torneos } = await supabase
    .from("torneos")
    .select("*")
    .eq("casino_id", id)
    .order("date", { ascending: false });
  return torneos;
}

export async function getProximosTorneosCasino(id) {
  let { data: torneos } = await supabase
    .from("torneos")
    .select("*,casinos(*)")
    .eq("casino_id", id)
    .gte("date", getTodayText())
    .order("date");
  return torneos;
}

export async function getProximosTorneos() {
  let { data: torneos } = await supabase
    .from("torneos")
    .select("*,casinos(*)")
    //.gte("date", getTodayText())
    .order("date");
  return torneos;
}

export async function getProximosTorneosId() {
  let { data: torneos } = await supabase.from("torneos").select("*");
  //.gte("date", getTodayText());
  return torneos;
}

export async function getProximosTorneosPaginated(from, to) {
  let { data: torneos } = await supabase
    .from("torneos")
    .select("*,casinos(*)")
    //.gte("date", getTodayText())
    .order("date")
    .range(from, to);
  return torneos;
}

export async function getCashgamesCasino(id) {
  let { data: cashgames } = await supabase
    .from("cashgames")
    .select("*")
    .eq("casino_id", id);
  return cashgames;
}

export async function getPreferencias(user_id) {
  let { data: preferencias } = await supabase
    .from("preferences")
    .select("casinos")
    .eq("user_id", user_id)
    .limit(1)
    .single();

  if (!preferencias) {
    let { data: newpreferencias } = await supabase
      .from("preferences")
      .insert({ user_id: user_id, casinos: [] });
    return newpreferencias;
  }

  return preferencias;
}

export async function updateMyCasinos(user_id, mycasinos) {
  let { data: preferencias, error } = await supabase
    .from("preferences")
    .update({ casinos: mycasinos })
    .eq("user_id", user_id);
  return preferencias;
}

export async function getPreferedCasinos(pref_casinos) {
  let { data: casinos } = await supabase
    .from("casinos")
    .select("*")
    .in("id", pref_casinos);
  return casinos;
}
