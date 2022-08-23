import { Avatar, Box, Checkbox, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function SelectChat({ friend, isSelected, setIsSelected }) {
    const [onCBOClick, setOnClick] = useState(false)
    const _friend = friend
    const handleOnClick = () => {
        if (onCBOClick === false) {
            setOnClick(true)
            setIsSelected(friend.idUser)
        } else {
            setOnClick(false)
            setIsSelected("")
        }
    }
    console.log("check", _friend)


    return (

        <Box px="20px" minW='400px' py="8px" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" _hover={{ backgroundColor: "gray.100" }}
            onClick={handleOnClick}>
            <Box display="flex" flexDirection="row" >
                {_friend && <>
                    <Avatar size="md" minH="56px" minW="56px" />
                    <Box pl="1em" display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start'>
                        <Text font="19px">{_friend?.nameUser}</Text>
                        <Text font="14px" color="#8e8e8e">{_friend?.rName}</Text>
                    </Box>
                </>}
            </Box>
            <Checkbox colorScheme='blue' display="block" isChecked={onCBOClick}></Checkbox>
        </Box>

    )
}
