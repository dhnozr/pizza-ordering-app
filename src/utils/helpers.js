// Function to format a number as currency
export function formatCurrency(value) {
  // Use Intl.NumberFormat to format the value as USD currency
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

// Function to format a date string
export function formatDate(dateStr) {
  // Use Intl.DateTimeFormat to format the date string according to Turkish locale
  // Format includes day, abbreviated month, and time in 2-digit hour and minute format
  return new Intl.DateTimeFormat('tr', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr));
}

// Function to calculate the minutes left from the current time to a given date string
export function calcMinutesLeft(dateStr) {
  // Get the current time in milliseconds
  const d1 = new Date().getTime();
  // Get the time of the given date string in milliseconds
  const d2 = new Date(dateStr).getTime();
  // Calculate the difference in minutes between the current time and the given date
  return Math.round((d2 - d1) / 60000);
}
