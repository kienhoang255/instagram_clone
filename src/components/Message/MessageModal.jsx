import { Box, Button, Divider, Grid, GridItem, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { FaTimes } from "react-icons/fa";
import React, { useState } from 'react'
import SelectChat from './SelectChat';
import TargetChat from "./TargetChat"
import { users } from '../../utils/db';

export default function MessageModal({ idUser }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isSelected, setIsSelected] = useState(false)
    const _idUser = idUser
    // const findUser = users.find(user => user.idUser === _idUser)
    // const friendList = findUser.filter((friendId) => friendId. > "0")
    const findUser = users.filter((idUser) => idUser.idUser === _idUser)
    // for (var key in findUser) {
    //     console.log(findUser[key])
    // }
    // for (var friends of findUser) {
    //     console.log(friends)
    // }
    return (
        <>

            <Button colorScheme='messenger' onClick={onOpen} >Messenger</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />


                <ModalContent>
                    <ModalHeader>
                        <Box display="flex" alignItems="center" flexDirection="row" justifyContent="space-between">
                            <FaTimes onClick={onClose} cursor="pointer" />
                            <Text>A new message</Text>
                            <Button variant="ghost">Next</Button>
                        </Box>
                        <Divider />
                        <Text>Next:</Text>
                        <Grid templateColumns='repeat(2, 1fr)' gap={1}>
                            {isSelected && (<TargetChat />)}
                        </Grid>
                        <Input autoFocus variant='flushed' placeholder='Search' />
                    </ModalHeader>
                    <ModalBody>
                        <Text>Suggestions</Text>

                        <Stack direction='col'>
                            <SelectChat />
                        </Stack>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}
