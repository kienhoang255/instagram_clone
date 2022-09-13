import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FaRegEdit, FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import React from 'react';
import MessageModal from './MessageModal';
import MessageChatter from './MessageChatter';
import LoginModal from '../Login/LoginModal';
import { users } from '../../utils/db';

export default function MessageUser({ idUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const _idUser = idUser;
  const user = users.find((user) => user.idUser === _idUser);
  const listFriends = user.friends;

  const a = listFriends.map((e) => users.find((friend) => friend.idUser === e));

  return (
    <>
      <GridItem colSpan={7} bg="white" border="1px" borderColor="#c1c1c1" borderRadius="4px 0 0 4px">
        <Grid h="full" templateRows="repeat(13, 1fr)">
          <GridItem className="center" rowSpan={1} bg="white" borderBottom="1px" borderColor="#c1c1c1" borderRadius="3px 0 0 0">
            <Grid templateColumns="repeat(3, 1fr)" w="full">
              <GridItem colStart={2} colEnd={2}>
                <Button variant="ghost" colorScheme="white" onClick={onOpen}>
                  <Text>{user.nameUser}</Text>
                  <FaChevronDown size="15px" />
                </Button>
              </GridItem>
              <GridItem className="center-ali" colStart={3} colEnd={3} justifyContent="flex-end" px="20px">
                <FaRegEdit size="25px" id="iconButton"></FaRegEdit>
                {/* Modal */}
                <MessageModal />
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem rowSpan={12} bg="white" py="10px" borderRadius="0 0 0 3px">
            {/* Chatter */}
            {a.map((friend, index) => (
              <MessageChatter key={index} friend={friend} />
            ))}
          </GridItem>
        </Grid>
      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent className="center">
          <ModalHeader className="center-jus" fontSize="md" p={2}>
            Account transfer
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody className="center-row-ali" w="full" justifyContent="space-between" p={3}>
            <Box className="center-row">
              <Box className="center-row-ali">
                <Avatar size="lg" />
                <Text px="10px">Name</Text>
              </Box>
            </Box>
            <FaCheckCircle size="25px" color="#0095f6" />
          </ModalBody>
          <Divider />
          <ModalFooter p={2}>
            <LoginModal onClick={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
