import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import TargetChat from './TargetChat';
import { users } from '../../utils/db';

export default function MessageModal({ idUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSelected, setIsSelected] = useState('');

  const selectChatter = users.find((user) => user.idUser === isSelected);

  const _idUser = idUser;
  const user = users.find((user) => user.idUser === _idUser);
  // const listFriends = user.friends
  // const listFriendsArray = []
  // console.log(listFriendsArray)
  // for (var friend1 in listFriends) {
  //     var id = users.find(friend => friend.idUser === listFriends[friend1])
  //     listFriendsArray.push(id)
  // }

  return (
    <>
      <Button colorScheme="messenger" onClick={onOpen}>
        Messenger
      </Button>

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
            <Grid templateColumns="repeat(2, 1fr)" gap={1}>
              <TargetChat selectChat={selectChatter} />
            </Grid>
            <Input autoFocus variant="flushed" placeholder="Search" />
          </ModalHeader>
          <ModalBody>
            <Text>Suggestions</Text>
            <Stack direction={['column']}>
              {/* {listFriendsArray.map((friend, index) => (
                                <SelectChat key={index} friend={friend} isSelected={isSelected} setIsSelected={setIsSelected} />
                            ))} */}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
