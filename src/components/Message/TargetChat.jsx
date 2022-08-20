import { Button, GridItem } from '@chakra-ui/react'
import { FaTimes } from "react-icons/fa";
import React from 'react'

export default function TargetChat() {
    return (
        <GridItem rowSpan={1}>
            <Button rightIcon={<FaTimes />} colorScheme='blue' color="blue.900" variant='outline'>
                Call 1231123123
            </Button>
        </GridItem>
    )
}
