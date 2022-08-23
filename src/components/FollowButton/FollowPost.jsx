import React, { useState } from "react";
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
  HStack,
  Image

} from "@chakra-ui/react";

export default function FollowPost() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, getLoading] = useState(false);
  const $ = document.querySelector.bind(document);
  const handleOnClick = () => {
    const followBtn = $("#followBtn");
    const isFollow = $(".backgroundFollowBtn");

    if (loading === false) {
      getLoading(true);
      setTimeout(() => {
        getLoading(false);
      }, 500);
      followBtn.classList.add("backgroundFollowBtn");
    }
    if (isFollow == null) return;
    else {
      onOpen(true);
    }
  };

  const handleUnfollow = () => {
    const followBtn = $("#followBtn");
    onClose(true);
    followBtn.classList.remove("backgroundFollowBtn");
  };
  return (
    <>
      <HStack
        id="followBtn"
        colorScheme="#0095f6"
        isLoading={loading}
        backgroundColor="white"
        color="black"
        variant="outline"
        fontSize="sm"
        cursor="pointer"
        fontWeight="bold"
        mr="16px"
        onClick={handleOnClick}
      >
        <Text
          id="followText"
          // class="disable"
        >
          Following
        </Text>
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent display="flex" alignItems="center">
          <ModalHeader>
            <Image
              ml="1.5"
              src="https://bit.ly/dan-abramov"
              h="10em"
              alt="Dan Abramov"
              rounded="full"
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>Leaving ?</ModalBody>

          <ModalFooter display="flex" flexDirection="column" width="full">
            <Divider w="full" orientation="horizontal" />
            <Button
              w="full"
              variant="ghost"
              color="#ee5460"
              onClick={handleUnfollow}
            >
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
