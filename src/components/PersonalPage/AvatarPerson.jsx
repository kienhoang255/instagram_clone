import { Avatar, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
// import style from '../../assets/css/stye.css';
import React, { useState } from 'react';

export default function Avatar_person() {
  const [hasStories, getHasStories] = useState(false);
  const handleClickStory = () => {
    getHasStories(true);
    setTimeout(() => {
      getHasStories(false);
    }, 2000);
  };
  return (
    <CircularProgress cursor="pointer" isIndeterminate={hasStories} value={100} size={{ base: 105, lg: 190 }} thickness="2px" color="#ff8b00">
      <CircularProgressLabel onClick={handleClickStory}>
        <Avatar
          name="Anh DaDen"
          size="lg"
          width={{ base: 20, lg: 150 }}
          height={{ base: 20, lg: 150 }}
          src={require('../../assets/images/avatar.jpg')}
        />
      </CircularProgressLabel>
    </CircularProgress>
  );
}
