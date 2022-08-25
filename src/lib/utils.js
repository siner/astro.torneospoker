const options = {
  month: "long",
  day: "numeric",
};

export function formatDate(date) {
  let newdate = new Date(date);
  let datestring = newdate.toLocaleDateString("es-ES", options);
  let hour =
    newdate.getHours() + ":" + String(newdate.getMinutes()).padStart(2, 0);
  return { datestring, hour };
}
