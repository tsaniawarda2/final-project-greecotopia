module.exports = (date) => {
  const sekarang = new Date();
  // const passDate = new Date(
  //   new Date(date).getTime() - new Date(date).getTimezoneOffset() * 60000
  // );
  const passDate = new Date(date);
  let delta = Math.abs(sekarang - passDate) / 1000;
  let timestamp = {
    tahun: 31536000,
    bulan: 2592000,
    minggu: 604800,
    hari: 86400,
    jam: 3600,
    menit: 60,
    detik: 1,
  };
  let diffTimestamp = {};
  let result = "";
  Object.keys(timestamp).forEach((key) => {
    const diffTime = Math.floor(delta / timestamp[key]);
    if (!result && diffTime) {
      result = `${diffTime} ${
        key !== "bulan" && key !== "menit"
          ? key.substring(0, 5)
          : key.substring(0, 3)
      } yang lalu`;
    }
    diffTimestamp[key] = diffTime;
    delta -= diffTimestamp[key] * timestamp[key];
  });
  if (!result) result = "sekarang";
  return result;
};
