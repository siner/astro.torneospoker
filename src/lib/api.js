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

export async function getAllEventos() {
  let { data: eventos } = await supabase.from("events").select("*");
  return eventos;
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

export async function getCasinoSlug(slug) {
  let { data: casino } = await supabase
    .from("casinos")
    .select("*")
    .eq("slug", slug)
    .limit(1)
    .single();
  return casino;
}

export async function getEventoSlug(slug) {
  let { data: evento } = await supabase
    .from("events")
    .select("*,casinos(*)")
    .eq("slug", slug)
    .limit(1)
    .single();
  return evento;
}

export async function getCurrentEvents() {
  let today = getTodayText();
  let { data: eventos, error } = await supabase
    .from("events")
    .select("*")
    .lte("from", today)
    .gte("to", today);

  return eventos;
}

export async function getNextEvents() {
  let today = getTodayText();
  let { data: eventos, error } = await supabase
    .from("events")
    .select("*")
    .gt("from", today);

  return eventos;
}

export async function newCasino(newcasino) {
  let { data: casino } = await supabase.from("casinos").insert(newcasino);
  return casino;
}

export async function updateCasino(id, newcasino) {
  let { data: casino } = await supabase
    .from("casinos")
    .update(newcasino)
    .eq("id", id);
  return casino;
}

export async function newTorneo(newtorneo) {
  let { data: torneo } = await supabase.from("torneos").insert(newtorneo);
  return torneo;
}
export async function deleteTorneo(torneo_id) {
  let { data: torneo } = await supabase
    .from("torneos")
    .delete()
    .match({ id: torneo_id });
  return torneo;
}

export async function updateTorneo(id, newtorneo) {
  let { data: torneo } = await supabase
    .from("torneos")
    .update(newtorneo)
    .eq("id", id);
  return torneo;
}

export async function getTorneo(id) {
  let { data: torneo } = await supabase
    .from("torneos")
    .select("*,casinos(*),events(*)")
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
    .select("*,casinos(*),events(*)")
    .eq("casino_id", id)
    .gte("date", getTodayText())
    .order("date");
  return torneos;
}

export async function getProximosTorneos() {
  let { data: torneos } = await supabase
    .from("torneos")
    .select("*,casinos(*),events(*)")
    .gte("date", getTodayText())
    .order("date");
  return torneos;
}

export async function getTorneosEvento(event_id) {
  let { data: torneos } = await supabase
    .from("torneos")
    .select("*,casinos(*),events(*)")
    .eq("event_id", event_id)
    .order("date");
  return torneos;
}

export async function getProximosTorneosId() {
  let { data: torneos } = await supabase
    .from("torneos")
    .select("*")
    .gte("date", getTodayText());
  return torneos;
}

export async function getProximosTorneosPaginated(from, to) {
  let { data: torneos } = await supabase
    .from("torneos")
    .select("*,casinos(*),events(*)")
    .gte("date", getTodayText())
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
