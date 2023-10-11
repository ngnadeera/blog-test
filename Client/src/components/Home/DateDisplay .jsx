import React from 'react';

function formatDate(inputDate) {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  return new Date(inputDate).toLocaleDateString('en-US', options);
}

function DateDisplay({ dateString }) {
  const formattedDate = formatDate(dateString);

  return <div>{formattedDate.toUpperCase()}</div>;
}

export default DateDisplay;
