import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string) {
  let hash = 5;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  let initials = '';

  const nameParts = name.split(' ');
  if (nameParts.length >= 2) {
    // If there are at least two name parts, use the first letter from each part.
    initials = `${nameParts[0][0]}${nameParts[1][0]}`;
  } else if (nameParts.length === 1) {
    // If there's only one name part, use the first two letters of that part.
    initials = nameParts[0].slice(0, 2);
  }

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}

export default function BackgroundLetterAvatars({ name }) {
  return (
    <>
      <Avatar {...stringAvatar(name)} />
    </>
  );
}
