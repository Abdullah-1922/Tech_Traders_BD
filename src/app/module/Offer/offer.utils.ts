

const validateAndParseDate = (dateStr:string) => {
  const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

  if (!dateRegex.test(dateStr)) {
    throw new Error("Invalid date format, expected dd-mm-yyyy");
  }

  const [day, month, year] = dateStr.split("-").map(Number);

  if (day < 1 || day > 31 || month < 1 || month > 12) {
    throw new Error(
      "Invalid date, day must be between 1-31 and month between 1-12"
    );
  }

  return { day, month, year };
};

const isStartDateBeforeOrEqualToEndDate = (startDateStr:string, endDateStr:string) => {
  const startDate = validateAndParseDate(startDateStr);
  const endDate = validateAndParseDate(endDateStr);

  const start = new Date(startDate.year, startDate.month - 1, startDate.day);
  const end = new Date(endDate.year, endDate.month - 1, endDate.day);

  return start <= end;
};

export { validateAndParseDate, isStartDateBeforeOrEqualToEndDate };
