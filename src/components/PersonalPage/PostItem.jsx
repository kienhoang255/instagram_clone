import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { TbBoxMultiple } from "react-icons/tb";
import { MdOutlineVideoLibrary } from "react-icons/md";

export default function PostItem({ item, index }) {
  const [hover, setHover] = useState(false)
  const handleHover = () => {
    if (hover === false) {
      setHover(true)
      console.log(hover)
    }
    else {
      setHover(false)
      console.log(hover)
    }
  }
  return (
    <GridItem width="100%" height={{ lg: 293 }}>
      <Box cursor="pointer" onMouseEnter={handleHover}>
        <Box px="5px" className="post-type">
          <TbBoxMultiple className="multiImg-icon" />
          <MdOutlineVideoLibrary className="video-icon" />
        </Box>
        <Image height={{ lg: 293 }} minH="263px" minW="263px" src={require("../../assets/images/avatar.jpg")} />
      </Box>
      {hover ? (
        <Box className="hover-box">
          <Box className="post-icon-bg" onMouseOut={handleHover} >
          </Box>
          <Box className="post-icons">
            <AiFillHeart size="25px" />
            <Text fontWeight="bold" pr="25px">9</Text>
            <BsFillChatFill size="20px" />
            <Text fontWeight="bold">10</Text>
          </Box>
        </Box>
      ) : ("")}
    </GridItem >
  );
}
