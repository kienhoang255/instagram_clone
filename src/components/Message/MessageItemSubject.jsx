import { Box, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import { VscSmiley } from 'react-icons/vsc'
import { BsArrow90DegLeft } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import React, { useState } from 'react'
export default function MessageItemSubject() {
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
        <Box className="message subject" onMouseEnter={hover} onMouseLeave={hover}>
            <Text className="subject-message">12311123123</Text>
            {isHover ? (
                <Box className="mes-option-sub">
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
                    <BsArrow90DegLeft cursor="pointer" p="10px" />
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
                </Box>
            ) : ("")}
        </Box>
    )
}
