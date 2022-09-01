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

function getRGB(c) {
  return parseInt(c, 16) || c;
}

function getsRGB(c) {
  return getRGB(c) / 255 <= 0.03928
    ? getRGB(c) / 255 / 12.92
    : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
}

function getLuminance(hexColor) {
  return (
    0.2126 * getsRGB(hexColor.substr(1, 2)) +
    0.7152 * getsRGB(hexColor.substr(3, 2)) +
    0.0722 * getsRGB(hexColor.substr(-2))
  );
}

function getContrast(f, b) {
  const L1 = getLuminance(f);
  const L2 = getLuminance(b);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

export function getTextColor(bgColor) {
  const whiteContrast = getContrast(bgColor, "#ffffff");
  const blackContrast = getContrast(bgColor, "#000000");

  return whiteContrast > blackContrast ? "#ffffff" : "#000000";
}
