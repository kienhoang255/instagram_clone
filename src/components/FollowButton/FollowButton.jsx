import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Divider,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import AvatarPerson from '../PersonalPage/AvatarPerson';

export default function FollowButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, getLoading] = useState(false);
  const $ = document.querySelector.bind(document);
  const [isFollowed, setIsFollowed] = useState(false);
  const handleOnClick = () => {
    const followBtn = $('#followBtn');
    const isFollow = $('.backgroundFollowBtn');

    if (loading === false) {
      getLoading(true);
      setTimeout(() => {
        getLoading(false);
      }, 500);
      followBtn.classList.add('backgroundFollowBtn');
    }
    if (isFollow == null) {
      setIsFollowed(true);
    } else {
      onOpen(true);
    }
  };

  const handleUnfollow = () => {
    const followBtn = $('#followBtn');
    onClose(true);
    followBtn.classList.remove('backgroundFollowBtn');
    setIsFollowed(false);
  };
  return (
    <>
      <Button
        id="followBtn"
        colorScheme="#0095f6"
        isLoading={loading}
        backgroundColor="#0095f6"
        color="white"
        variant="outline"
        size="sm"
        fontWeight="bold"
        borderRadius="4px"
        borderColor="#bbbbbb"
        mr="16px"
        onClick={handleOnClick}
      >
        {isFollowed && <CheckIcon id="followIcon" />}
        {/* {isFollowed ?}<CheckIcon id="followIcon" /> */}
        <Text id="followText">{isFollowed ? '' : 'Follow'}</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent display="flex" alignItems="center">
          <ModalHeader>
            <AvatarPerson />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>Leaving ?</ModalBody>

          <ModalFooter display="flex" flexDirection="column" width="full">
            <Divider w="full" orientation="horizontal" />
            <Button w="full" variant="ghost" color="#ee5460" onClick={handleUnfollow}>
              Unfollow
            </Button>
            <Divider orientation="horizontal" />
            <Button w="full" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
