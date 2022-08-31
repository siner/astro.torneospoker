const options = {
  month: "long",
  day: "numeric",
};

export function localeDateString(date) {
  return date.toLocaleDateString("es-ES", options);
}

export function formatDate(date) {
  let newdate = new Date(date);
  let datestring = newdate.toLocaleDateString("es-ES", options);
  let hour =
    newdate.getHours() + ":" + String(newdate.getMinutes()).padStart(2, 0);
  return { datestring, hour };
}

export function getMobileDate(date) {
  let newdate = new Date(date);
  let datestring =
    newdate.getDay() + "/" + newdate.getMonth() + "/" + newdate.getFullYear();
  return datestring;
}

export function getPagination(page, size) {
  const limit = size ? +size : 5;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;
  return { from, to };
}
