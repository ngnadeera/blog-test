export const formatTimeAgo = (minutesAgo) => {
    if (minutesAgo < 1) {
      return "just now";
    } else if (minutesAgo < 60) {
      return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
    } else if (minutesAgo < 60 * 24) {
      const hoursAgo = Math.floor(minutesAgo / 60);
      return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
    } else if (minutesAgo < 60 * 24 * 30) {
      const daysAgo = Math.floor(minutesAgo / (60 * 24));
      return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
    } else if (minutesAgo < 60 * 24 * 30 * 12) {
      const monthsAgo = Math.floor(minutesAgo / (60 * 24 * 30));
      return `${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ago`;
    } else {
      const yearsAgo = Math.floor(minutesAgo / (60 * 24 * 30 * 12));
      return `${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`;
    }
  }