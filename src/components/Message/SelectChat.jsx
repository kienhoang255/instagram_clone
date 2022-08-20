import { Avatar, Box, Checkbox, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function SelectChat() {
    const [onCBOClick, setOnClick] = useState(false)
    const handleOnClick = () => {
        if (onCBOClick === false) {
            setOnClick(true)
        } else {
            setOnClick(false)
        }
    }
    return (

        <Box px="20px" minW='400px' py="8px" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" _hover={{ backgroundColor: "gray.100" }}
            onClick={handleOnClick}>
            <Box display="flex" flexDirection="row" >
                <Avatar size="md" minH="56px" minW="56px" />
                <Box pl="1em" display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start'>
                    <Text font="19px">Name</Text>
                    <Text font="14px" color="#8e8e8e">Name</Text>
                </Box>
            </Box>
            <Checkbox colorScheme='blue' display="block" isChecked={onCBOClick}></Checkbox>
        </Box>

    )
}
