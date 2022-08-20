import { Avatar, Box, Button, Divider, Grid, GridItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { FaRegEdit, FaChevronDown, FaCheckCircle } from "react-icons/fa";
import React from 'react'
import MessageModal from './MessageModal';
import MessageChatter from './MessageChatter';
import LoginModal from '../Login/LoginModal';

export default function MessageUser() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onClickIcon = () => {
    }
    return (
        <>
            <GridItem colSpan={7} bg='white' border="1px" borderColor="#c1c1c1" borderRadius="4px 0 0 4px">
                {/* 13Row(2) */}
                <Grid h='full' templateRows='repeat(13, 1fr)'>
                    {/* //Name */}
                    <GridItem rowSpan={1} bg='white' display="flex" justifyContent="center" alignItems="center" borderBottom="1px" borderColor="#c1c1c1" borderRadius="3px 0 0 0">
                        {/* Button */}
                        <Grid templateColumns='repeat(3, 1fr)' w="full">
                            <GridItem colStart={2} colEnd={2}>
                                <Button variant='ghost' colorScheme='white' onClick={onOpen} >Alo
                                    <FaChevronDown size="15px" />
                                </Button>
                            </GridItem>
                            <GridItem colStart={3} colEnd={3}
                                display="flex" justifyContent="flex-end" alignItems="center" px="20px">
                                <FaRegEdit size="25px" onClick={onClickIcon} id="iconButton"></FaRegEdit>
                                <MessageModal id="click" />

                            </GridItem>
                        </Grid>
                        {/* //Button */}
                    </GridItem>
                    {/* //User */}
                    <GridItem rowSpan={12} bg='white' py="10px" borderRadius="0 0 0 3px"  ><MessageChatter /></GridItem>
                </Grid>
            </GridItem>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize="md" display="flex" justifyContent="center" p={2}>
                        Account transfer</ModalHeader>
                    <Divider />
                    <ModalCloseButton />
                    <ModalBody p={3}>
                        <Grid templateRows='repeat(3, 1fr)' templateColumns='repeat(5, 1fr)'>
                            <GridItem rowSpan={1} colSpan={4} >
                                <Box display="flex" flexDirection="row">
                                    <Box display="flex" flexDirection="row" alignItems="center">
                                        <Avatar size="lg" />
                                        <Text px="10px">Name</Text>
                                    </Box>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1} display="flex" justifyContent="center" alignItems="center" >
                                <FaCheckCircle size="25px" color='#0095f6' />
                            </GridItem>
                        </Grid>

                    </ModalBody>
                    <Divider />
                    <ModalFooter display="flex" justifyContent="center" p={2}>
                        <LoginModal onClick={onClose} />
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}
