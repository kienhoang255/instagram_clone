import { Avatar, AvatarBadge, Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function MessageChatter({ friend }) {
    const [isActive] = useState(true)
    const [lastMessage, setMessage] = useState(true)
    const _friend = friend
    // console.log(_friend.nameUser)
    return (
        <Box px="20px" py="8px" display="flex" flexDirection="row" _hover={{ backgroundColor: 'gray.100' }}>
            <Avatar size="md" minH="56px" minW="56px">
                {isActive ? (<AvatarBadge boxSize='1.25em' bg='green.500' />) : (<AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />)}
            </Avatar>
            <Box pl="1em" display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start'>
                <Text font="19px">{_friend.nameUser}</Text>
                {lastMessage ? (<Text color="#8e8e8e" fontWeight={10}>You have sent a message</Text>) : <Text color="#8e8e8e">Ok</Text>}
            </Box>
        </Box>
    )
}
