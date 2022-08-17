import React, { useState } from "react";
import FollowButtonCss from "../../assets/css/Follow.css";
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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import AvatarPerson from "../PersonalPage/AvatarPerson";

export default function FollowButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, getLoading] = useState(false);

  const [isFollow, setIsFollow] = useState(false);

  const handleUnfollow = () => {};
  return (
    <>
      <Button
        id="followBtn"
        colorScheme="#0095f6"
        isLoading={loading}
        backgroundColor={isFollow ? "red" : "blue"}
        color="white"
        variant="outline"
        size="sm"
        fontWeight="bold"
        borderRadius="4px"
        borderColor="#bbbbbb"
        mr="16px"
        onClick={() => setIsFollow(!isFollow)}
      >
        {isFollow && (
          <CheckIcon
            id="followIcon"
            // class="disable"
          />
        )}
        <Text
          id="followText"
          // class="disable"
        >
          {isFollow ? "Da follow" : "Follow"}
        </Text>
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
