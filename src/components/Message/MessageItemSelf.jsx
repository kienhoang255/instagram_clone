import { Box, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { VscSmiley } from 'react-icons/vsc'
import { BsArrow90DegLeft } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function MessageItemSelf() {
    const [isHover, setIsHover] = useState(false)
    const hover = (e) => {
        if (e.type === "mouseenter") {
            setIsHover(true)
        } else {
            setTimeout(() => {
                setIsHover(false)
            }, 500)
        }
    }
    return (
        <Box className="message self" onMouseEnter={hover} onMouseLeave={hover}>
            {isHover ? (<Box className="mes-option">
                <Popover>
                    <PopoverTrigger p="0px">
                        <IconButton variant="unstyle" bg="white" icon={<BiDotsHorizontalRounded size="24px" />} />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Icon</PopoverHeader>
                        <PopoverBody>123123123123</PopoverBody>
                    </PopoverContent>
                </Popover>
                <BsArrow90DegLeft cursor="pointer" p="10px" />
                <Popover>
                    <PopoverTrigger p="0px">
                        <IconButton variant="unstyle" bg="white" icon={<VscSmiley size="24px" />} />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Icon</PopoverHeader>
                        <PopoverBody>123123123123</PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>) : ("")}
            <Text className="self-message">123112313213123123123</Text>
        </Box>
    )
}
