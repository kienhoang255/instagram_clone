import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import StoryItem from './StoryItem';
import { stories } from '../../utils/db';
// import { style } from '../../assets/css/stye.css';

export default function StoryList({ id }) {
  const _id = id;
  const filterId = stories.filter((story) => story.idUser === _id);
  const $ = document.querySelector.bind(document);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState('');
  const [scrollLeft, setScrollLeft] = useState('');
  const [x, setX] = useState('');
  const [walk, setWalk] = useState('');

  // const onPointerEvent = (e) => {
  //   const slider = $('#btn-wrapper');
  //   if (e.type === 'pointerdown') {
  //     slider.classList.add('active');
  //     console.log('nam');
  //   } else {
  //     slider.classList.remove('active');
  //     console.log('tha');
  //   }
  // };

  const handleOnMouse = (event) => {
    const slider = $('#wrapper');
    if (event.type === 'mousedown') {
      setIsDown(true);
      slider.classList.add('active');
      setStartX(event.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
      // console.log(startX)
    } else if (event.type === 'mouseup') {
      setIsDown(false);
      slider.classList.remove('active');
      // console.log("tha")
    } else if (event.type === 'mouseleave') {
      setIsDown(false);
      slider.classList.remove('active');
      // console.log("leave")
    } else {
      if (!isDown) return; // dừng event
      // console.log("mouseMove")
      event.preventDefault();
      setX(event.pageX - slider.offsetLeft);
      setWalk(x - startX);
      slider.scrollLeft = scrollLeft - walk;
      // console.log({ x, startX })
      // console.log(walk)
      slider.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <Box id="btn-wrapper" /*onPointerDown={onPointerEvent}*/>
      {/* <input type="button" value="<" className="leftBtn" /> */}
      <Box
        p="2em"
        pl="2em"
        minHeight="10em"
        id="wrapper"
        onMouseDown={handleOnMouse}
        onMouseUp={handleOnMouse}
        onMouseMove={handleOnMouse}
        onMouseLeave={handleOnMouse}
      >
        {filterId.map((element, index) => (
          <StoryItem key={index} item={element} />
        ))}
      </Box>
      {/* <input type="button" value=">" className="rightBtn" /> */}
    </Box>
  );
}
