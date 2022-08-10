export default function dateFormatter(language, date) {
  const newDate = new Date(date);

  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = newDate.toLocaleDateString(language, options);

  return formattedDate;
}
