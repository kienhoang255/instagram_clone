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
  const $ = document.querySelector.bind(document);
  const handleOnClick = () => {
    const followBtn = $("#followBtn");
    const isFollow = $(".backgroundFollowBtn");
    const isText1 = document.getElementById("followText");

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

    // if (isFollow == null) {
    //   isText.classList.add("disable");
    //   isIcon.classList.remove("disable");
    //   console.log("Da xoa text");
    //   console.log(isIcon);
    //   console.log(isText);
    // } else {
    //   isText.classList.remove("disable");
    // isIcon.classList.add("disable");
    //   console.log("Da xoa icon");
    //   console.log(isIcon);
    //   console.log(isText);
    // }

    // console.log(followBtn);
    // console.log(isFollow);
    // console.log(isIcon);
    // console.log(isText);
  };

  const handleUnfollow = () => {
    const followBtn = $("#followBtn");
    onClose(true);
    followBtn.classList.remove("backgroundFollowBtn");
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
        <CheckIcon
          id="followIcon"
          // class="disable"
        />
        <Text
          id="followText"
          // class="disable"
        >
          Follow
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
