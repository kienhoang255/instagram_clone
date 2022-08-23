import { Avatar, Box, Text } from '@chakra-ui/react'
import React from 'react'
import MessageItemSelf from './MessageItemSelf'
import MessageItemSubject from './MessageItemSubject'

export default function MessageGroup() {

    return (
        <>
            <Box >
                <MessageItemSelf />
                <MessageItemSelf />
                <MessageItemSelf />
                <MessageItemSelf />

            </Box>
            <Box className="message-group" >

                <MessageItemSubject />
                <MessageItemSubject />
                <MessageItemSubject />
                <Avatar className="avatar-subject" size="sm" />
            </Box>
            <Text className="time-mes">
                Tháng 8 22,2022 1:20 chiều
            </Text>
        </>
    )
}
