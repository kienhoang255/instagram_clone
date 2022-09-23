import React from 'react';
import Profile from './Profile';
import StoryList from '../Story/StoryList';
import Post from './Post';
// import style from '../../assets/css/stye.css';

export default function PersonPage() {
  const idFind = '1';
  return (
    <React.Fragment>
      <Profile id={idFind} />
      <StoryList id={idFind} />
      <Post id={idFind} />
    </React.Fragment>
  );
}
