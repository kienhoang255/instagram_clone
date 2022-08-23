import { BsThreeDots } from "react-icons/bs";
import {
  Button,
  Divider,
  IconButton,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";

export default function ThreeDots() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        variant="ghost"
        fontWeight="bold"
        borderRadius="4px"
        mr="10px"
        onClick={onOpen}                cursor="pointer"
        size="1.8em"
        justifyItems="flex-end"
        color="#383838"
        icon={<BsThreeDots />}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalFooter
            display="flex"
            alignItems="center"
            flexDirection="column"
            w="full"
          >
            <Button color="red" variant="ghost" w="full">
              Report
            </Button>
            <Divider orientation="horizontal" />
            <Button color="red" variant="ghost" w="full">
              Unfollow
            </Button>
            <Divider orientation="horizontal" />
            <Button variant="ghost" w="full">
              Add to favorites
            </Button>
            <Divider orientation="horizontal" />
            <Button w="full" variant="ghost" onClick={onClose}>
              Go to post
            </Button>
            <Divider orientation="horizontal" />
            <Button w="full" variant="ghost" onClick={onClose}>
              Share to...
            </Button>
            <Divider orientation="horizontal" />
            <Button w="full" variant="ghost" onClick={onClose}>
              Copy link
            </Button>
            <Divider orientation="horizontal" />
            <Button w="full" variant="ghost" onClick={onClose}>
              Embed
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
