import {
  Box,
  Flex,
  Stack,
  Image,
  Text,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import ThreeDots from "./ThreeDots";

import { useDoubleTap } from "use-double-tap";

import React, { useState } from "react";

import { SunIcon } from "@chakra-ui/icons";

import { FiSend, FiBookmark, FiHeart } from "react-icons/fi";

import { RiChat3Line } from "react-icons/ri";

import { BsDot } from "react-icons/bs";

import ImageSlider from "./ImageSlider";

import DetailPost from "./DetailPost";

import Picker from "emoji-picker-react";

export default function Post() {
  //DoubleTab
  const handleClick = () => {
    console.log("handleDoubleClick");
  };

  // const Image = document.querySelector("Image");
  // const icon = document.querySelector(".icon");

  // const handleLike = (event) => {
  //   if (event.detail === 2) {
  //     icon.classList.add("Like");
  //     setTimeout(() => {
  //       icon.classList.remove("Like");
  //     }, 1200);
  //   }
  // };

  //Emoji
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const slides = [
    { url: "https://bit.ly/naruto-sage", title: "beach" },
    {
      url: "https://gamek.mediacdn.vn/133514250583805952/2020/7/6/photo-1-15940093634781712523938.png",
      title: "boat",
    },
    { url: "https://bit.ly/naruto-sage", title: "forest" },
    {
      url: "https://gamek.mediacdn.vn/133514250583805952/2020/7/6/photo-1-15940093634781712523938.png",
      title: "city",
    },
    { url: "https://bit.ly/naruto-sage", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  //Story
  const [hasStories, getHasStories] = useState(false);
  const handleClickStory = () => {
    getHasStories(true);
    setTimeout(() => {
      getHasStories(false);
    }, 2000);
  };

  return (
    <div className="post-body">
      <Stack alignItems="center" w="60em">
        <Box
          bg="white"
          borderColor="gray.200"
          borderWidth="thin"
          rounded="lg"
          mb="6"
          boxShadow="md"
        >
          <Flex
            p={2}
            alignItems="center"
            w="auto"
            justifyContent="space-between"
          >
            <Flex>
              <CircularProgress
                cursor="pointer"
                value={100}
                thickness="3px"
                color="#ff8b00"
                mr="2"
                size={{ base: 28, sm: 12 }}
                isIndeterminate={hasStories}
              >
                <CircularProgressLabel onClick={handleClickStory}>
                    <Image
                      
                      ml="1"
                      src="https://bit.ly/dan-abramov"
                      h="14em"
                      alt="Dan Abramov"
                      rounded="full"
                    />
                </CircularProgressLabel>
              </CircularProgress>
              <Flex flexDirection="column" alignItems="flex-start">
                <Text cursor="pointer" fontWeight="semibold" fontSize="sm">
                  Dan Abramov
                </Text>
                <Text fontSize="sm" opacity="0.7">
                  132 Au Co
                </Text>
              </Flex>
            </Flex>
            <ThreeDots />
          </Flex>

          <div onDoubleClick={()=>console.log("vinh")} className="post" style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
          <HStack p="3" fontSize="xl" w="full" justifyContent="space-between">
            <HStack>
              <Box as="button" rounded="md" _hover={{ color: "pink" }}>
                <FiHeart
                  cursor="pointer"
                  size="1.2em"
                  name="AtSignIcon"
                  mr={6}
                />
              </Box>
              <Box as="button" rounded="md" _hover={{ color: "pink" }}>
                <RiChat3Line
                  cursor="pointer"
                  size="1.2em"
                  name="ChatIcon"
                  mr={6}
                />
              </Box>
              <Box as="button" rounded="md" _hover={{ color: "pink" }}>
                <FiSend cursor="pointer" size="1.2em" name="AttachmentIcon" />
              </Box>
            </HStack>
            <Box as="button" rounded="md" _hover={{ color: "pink" }}>
              <FiBookmark
                cursor="pointer"
                size="1.2em"
                ml="auto"
                name="bookmark"
              />
            </Box>
          </HStack>
          <Flex
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
            width="24em"
            justifyContent="flex-start"
            mx="4"
            flexDirection="column"
          >
            <Flex>
              <Text
                justifyItems="flex-start"
                fontSize="14px"
                fontWeight="extrabold"
                mb="2"
              >
                2500 likes
              </Text>
            </Flex>
            <Flex textOverflow="ellipsis">
              <Text cursor="pointer" fontSize="14px" fontWeight="bold" mr="2">
                Dan Abramov{" "}
              </Text>
              <Text fontSize="14px" textOverflow="ellipsis">
                Muốn đi nhanh thì đi như thế nào ?
              </Text>
            </Flex>
            <Flex textOverflow="ellipsis">
              <Text
                p="5px 0px 5px 0px"
                cursor="pointer"
                fontSize="14px"
                color="RGBA(0, 0, 0, 0.48)"
                fontWeight="medium"
                mr="2"
                onClick={onOpen}
              >
                View all 10 comments{" "}
              </Text>
            </Flex>

            <Flex textOverflow="ellipsis">
              <Text cursor="pointer" fontSize="14px" fontWeig ht="bold" mr="2">
                huyen.204{" "}
              </Text>
              <Text fontSize="14px" textOverflow="ellipsis">
                Muốn đi nhanh thì đi một mình Muốn đi chậm thì vừa đi vừa chụp
                hìnn ✌🏻
              </Text>
            </Flex>
            <Flex>
              {" "}
              <Text cursor="pointer" fontSize="14px" fontWeight="bold" mr="2">
                gvinh.2802{" "}
              </Text>
              <Text fontSize="14px">
                Muốn đi nhanh thì đi một mình Muốn đi chậm thì vừa đi vừa chụp
                hìnn ✌🏻
              </Text>{" "}
            </Flex>

            <Flex>
              {" "}
              <Text cursor="pointer" fontSize="14px" fontWeight="bold" mr="2">
                haohao.1975{" "}
              </Text>
              <Text fontSize="14px" textOverflow="ellipsis">
                Muốn đi nhanh thì đi một mình Muốn đi chậm thì vừa đi vừa chụp
                hìnn ✌🏻
              </Text>
            </Flex>

            <Flex alignItems="baseline">
              {" "}
              <Text
                mt="16px"
                cursor="pointer"
                fontWeight="bold"
                color="RGBA(0, 0, 0, 0.36)"
                fontSize="10px"
                mr="4"
              >
                24 HOURS AGO
              </Text>
              <Text
                fontSize="14px"
                cursor="pointer"
                fontWeight="bold"
                textOverflow="ellipsis"
              >
                See translation
              </Text>
            </Flex>
          </Flex>
          <Flex
            p="4"
            align="center"
            border-top="1px solid"
            border-color="gray.300"
            h="16"
          >
            <HStack mt="8px" spacing={4} justify="space-between" flex={1}>
              <InputGroup alignItems="center" mr={10}>
                <Menu>
                  <MenuButton bgColor="white" variant="unstyled" as={Button}>
                    {" "}
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <SunIcon size="1.7em" mr={4} mb="14px" mt="16px" />
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Picker onEmojiClick={onEmojiClick} />
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Input
                  height="100%"
                  variant="unstyled"
                  type="tel"
                  color="rgb(142,142,142)"
                  placeholder="Add a comment..."
                  value={chosenEmoji?.emoji}
                  onChange={onEmojiClick}
                />
              </InputGroup>
              <Button
                justifyContent="flex-end"
                variant="ghost"
                font-size="sm"
                font-weight="bold"
                color="blue.400"
              >
                Post
              </Button>
            </HStack>
          </Flex>

          {/* //MODAL */}

          <Modal isOpen={isOpen} onClose={onClose} isCentered size="6xl" p="0">
            <ModalOverlay />
            <ModalCloseButton cursor="pointer" />
            <ModalContent p="0">
              <ModalBody p="0">
                <DetailPost />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Stack>
    </div>
  );
}
