const defaultValues = {
  days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", `Jum'at`, "Sabtu"],
  month: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
};

export const getDate = (dateStr = "", withDay = false) => {
  if (!dateStr) return "";
  const date = new Date(
    new Date(dateStr).getTime() - new Date(dateStr).getTimezoneOffset() * 60000
  );

  if (!withDay) {
    return ` ${date.getUTCDate()} ${
      defaultValues.month[date.getUTCMonth()]
    }  ${date.getUTCFullYear()}`;
  }

  return `${defaultValues.days[date.getUTCDay()]}, ${date.getUTCDate()} ${
    defaultValues.month[date.getUTCMonth()]
  }  ${date.getUTCFullYear()}`;
};
