module.exports = (date) => {
  const sekarang = new Date();
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
        key.length <= 3 ? key.substring(0, 3) : key
      } yang lalu`;
    }
    diffTimestamp[key] = diffTime;
    delta -= diffTimestamp[key] * timestamp[key];
  });
  if (!result) result = "sekarang";
  return result;
};
