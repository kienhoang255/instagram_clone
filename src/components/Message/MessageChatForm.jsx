import { Avatar, Box, Button, Grid, GridItem, IconButton, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInfoCircle, AiOutlinePicture, AiOutlineHeart } from "react-icons/ai";
import { style } from "../../assets/css/stye.css"
import React, { useState } from 'react'
import MessageModal from './MessageModal';
import { VscSmiley } from "react-icons/vsc";

export default function MessageChatForm({ idUser }) {
    const [isChat, setIsChat] = useState(false)
    const [onInput, setOnInput] = useState(true)
    const handleInput = (e) => {
        console.log(e.target.value)
        if (e.target.value === "") {
            setOnInput(true)
        } else {
            setOnInput(false)
        }
    }
    const time = "8/18/2022 1:55:00 PM"
    const time2 = "8/18/2022 8:52:00 PM"
    if (time > time2) {
        console.log("time")
    } else (
        console.log("time2")
    )

    return (
        <>
            <GridItem colSpan={13} bg='white' border="1px" borderLeft="0px" borderColor="#c1c1c1" borderRadius="0 4px 4px 0">

                {isChat ?
                    (<Grid h='full' templateRows='repeat(1, 1fr)' templateColumns='repeat(1, 1fr)' >
                        <GridItem rowSpan={1} colSpan={1} bg='white' borderRadius="0 3px 3px 0" display="flex" justifyContent="center"
                            alignItems="center" flexDirection="column">
                            <div class="circle">
                                <FaTelegramPlane size="40px" />
                            </div>
                            <Text py='20px'>Your message</Text>
                            <Text pb='35px'>Send photos and private messages to friends or groups.</Text>
                            <MessageModal idUser={idUser} />
                        </GridItem>
                    </Grid>)
                    :
                    (<Grid h='full' templateRows='repeat(1, 1fr)' templateColumns='repeat(1, 1fr)'
                        gap={1}>
                        <GridItem rowSpan={1} colSpan={1} >
                            <Grid h='full' templateRows='repeat(13, 1fr)'>
                                <GridItem rowSpan={1} bg='white' borderBottom='1px' borderColor="#c1c1c1" borderRadius="0 3px 0 0" display="flex" flexDirection="row"
                                    alignItems="center" justifyContent="space-between" px="2em">

                                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" cursor="pointer">
                                        <Avatar size="sm" /><Text fontWeight="bold" pl="10px">Name</Text>
                                    </Box>
                                    <Box cursor="pointer">
                                        <AiOutlineInfoCircle size="25px" />
                                    </Box>
                                </GridItem>
                                <GridItem rowSpan={12} bg='white' borderRadius="0 0 3px 0" >
                                    <Box display="flex" flexDirection="column" justifyContent="flex-end" h="full" >
                                        <Box w="583px" bg="red" display="flex" alignSelf="flex-start" flexDirection="column" mx="20px">
                                            <Box display="flex" flexDirection="row" alignItems="center">
                                                <Box px="10px"><Avatar size="xs" /></Box>
                                                <Box border="1px" borderRadius="50px">
                                                    <Text p="10px">12311133333</Text>
                                                </Box>
                                                <Box>Icon</Box>
                                            </Box>
                                            <Box display="flex" flexDirection="row" alignItems="center" alignSelf="flex-end">
                                                <Box>Icon</Box>
                                                <Box border="1px" borderRadius="50px">12311231123123</Box>
                                            </Box>
                                            <Grid
                                                h='200px'
                                                templateRows='repeat(10, 1fr)'
                                                templateColumns='repeat(4, 1fr)'
                                                gap={4}
                                            >
                                                <GridItem rowStart={1} colSpan={2} bg='papayawhip' >12311oagn trung kien oagn trung kien hoang trung kien hoang oagn trung kien hoang trung kien hoang oagn trung kien hoang trung kien hoang oagn trung kien hoang trung kien hoang oagn trung kien hoang trung kien hoang hoang trung kien hoang 11231123123</GridItem>
                                                <GridItem rowStart={2} rowEnd={2} colStart={3} colSpan={2} bg='papayawhip' >Hoagn trung koagn trung kien hoang trung kien hoang oagn trung kien hoang trung kien hoang oagn trung kien hoang trung kien hoang ien hoang trung kien hoang trung kien hoang trung ken</GridItem>
                                            </Grid>
                                        </Box>
                                        <Box display="flex" flexDirection="row" alignItems="center" borderColor='gray.100' justifyContent="center"
                                            p="4px" m="20px" border="1px" borderRadius="40px">

                                            <Box px="10px" cursor="pointer">
                                                <Popover>
                                                    <PopoverTrigger p="0px">
                                                        <IconButton variant="unstyle" bg="white" icon={<VscSmiley size="24px" />} />
                                                    </PopoverTrigger>
                                                    <PopoverContent>
                                                        <PopoverArrow />
                                                        <PopoverCloseButton />
                                                        <PopoverHeader>Confirmation!</PopoverHeader>
                                                        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                                                    </PopoverContent>
                                                </Popover></Box>
                                            <Input pl="0px" autoFocus variant='unstyle' placeholder='Messages...' size="sm" onChange={handleInput} />
                                            {onInput ?
                                                (<Box display="flex" flexDirection="row" >
                                                    <AiOutlinePicture size="30px" cursor="pointer" />
                                                    <Box px="10px"><AiOutlineHeart size="30px" cursor="pointer" /></Box>
                                                </Box>) :
                                                (<Box px="10px"><Button color="blue.400" colorScheme='blue' variant='unstyled' bgColor="white" size="md">
                                                    Send
                                                </Button></Box>)}

                                        </Box>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </GridItem>
                    </Grid>)}

            </GridItem >
        </>
    )
}
