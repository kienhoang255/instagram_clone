import { Button, GridItem } from '@chakra-ui/react'
import { FaTimes } from "react-icons/fa";
import React from 'react'

export default function TargetChat({ selectChat }) {
    const _selectChat = selectChat
    // console.log(_selectChat.nameUser)
    return (
        <GridItem rowSpan={1}>
            <Button rightIcon={<FaTimes />} colorScheme='blue' color="blue.900" variant='outline'>
                {_selectChat?.nameUser}
            </Button>
        </GridItem>
    )
}
