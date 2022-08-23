import { Box, GridItem, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsFillChatFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'

export default function Reels() {
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
        <GridItem w='100%' h='330' >
            <Box height="100%" cursor=" pointer" >
                <Image width="100%" height="100%" src={require("../../assets/images/avatar.jpg")} />
            </Box>
            {
                hover ? (
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
                ) : (
                    <Box className="hover-box" >
                        <Box className="reel-icon-bg" onMouseEnter={handleHover} >
                        </Box>
                        <Box className="reel-icons">
                            <FaPlay size="15px" />
                            <Text px="10px" fontWeight="bold" pr="20px">9</Text>
                        </Box>
                    </Box>
                )
            }

        </GridItem >
    )
}
