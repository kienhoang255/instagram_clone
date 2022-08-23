import React, { useState } from "react";

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
  GridItem,
  Grid,
  VStack,
} from "@chakra-ui/react";

import ThreeDots from "./ThreeDots";

import { SunIcon } from "@chakra-ui/icons";

import { FiSend, FiBookmark, FiHeart } from "react-icons/fi";

import { RiChat3Line } from "react-icons/ri";

import { BsDot } from "react-icons/bs";

import ImageSlider from "./ImageSlider";

import FollowPost from "../FollowButton/FollowPost";


export default function DetailPost() {
  //Story
  const [hasStories, getHasStories] = useState(false);
  const handleClickStory = () => {
    getHasStories(true);
    setTimeout(() => {
      getHasStories(false);
    }, 2000);
  };
  return (
    <Grid h="full" templateColumns="repeat(5, 1fr)" p="0">
      <GridItem colSpan={3} h="full" area={"img-post"}>
        <Grid w="full" className="img-post">
          <Image
            objectFit="fit"
            src="https://bit.ly/naruto-sage"
            w="auto"
            h="700px"
            fallbackSrc="https://bit.ly/naruto-sage"
          />
        </Grid>
      </GridItem>
      <GridItem
        colSpan={2}
        h="full"
        templateRows="repeat(10, 1fr)"
        area={"content-post"}
      >
        {/* Header */}
        <Flex
          p={2}
          alignItems="center"
          w="auto"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderColor="gray.100"
        >
          <Flex>
            <CircularProgress
              cursor="pointer"
              value={100}
              thickness="3px"
              color="#ff8b00"
              mr="2"
              size={{ base: 20, sm: 12 }}
              isIndeterminate={hasStories}
            >
              <CircularProgressLabel onClick={handleClickStory}>
                <Image
                  ml="1.5"
                  src="https://bit.ly/dan-abramov"
                  h="13em"
                  alt="Dan Abramov"
                  rounded="full"
                />
              </CircularProgressLabel>
            </CircularProgress>
            <Flex flexDirection="column">
              {" "}
              <Flex flexDirection="row" alignItems="center">
                <Text cursor="pointer" fontWeight="bold" fontSize="sm">
                  Dan Abramov
                </Text>
                <BsDot size="20px" />
                <FollowPost />
              </Flex>
              <Text cursor="pointer" fontSize="13px" fontWeight="noraml" mr="2">
                Ho Chi Minh City, Vietnam{" "}
              </Text>
            </Flex>
          </Flex>
          <ThreeDots />
        </Flex>
        <Flex mt={2} textOverflow="ellipsis" ml="2">
          <Flex flexDirection="column">
            {" "}
            <CircularProgress
              cursor="pointer"
              value={100}
              thickness="3px"
              color="#ff8b00"
              mr="2"
              size={{ base: 20, sm: 12 }}
              isIndeterminate={hasStories}
              justifyContent="flex-start"
            >
              <CircularProgressLabel onClick={handleClickStory}>
                <Image
                  ml="1.5"
                  src="https://bit.ly/dan-abramov"
                  h="13em"
                  alt="Dan Abramov"
                  rounded="full"
                />
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>
          <Flex flexDirection="column">
            {" "}
            <Text cursor="pointer" fontSize="14px" fontWeight="bold" mr="2">
              Dan Abramov{" "}
            </Text>{" "}
            <Flex textOverflow="ellipsis">
              <Text
                p="5px 0px 5px 0px"
                fontSize="14px"
                fontWeight="normal"
                mr="2"
              >
                Cuộc sống là một hành trình, và cuộc đời của chúng ta là một con
                đường với vô vàn những ngã rẽ. Trên con đường ấy, với đam mê, sở
                thích, tài năng, tình yêu hay định hướng, chúng ta có những
                quyết định và lựa chọn cho riêng mình. Nhưng tất nhiên, những
                lựa chọn của chúng ta không hẳn lúc nào cũng đúng. Có bao giờ
                bạn thấy hối hận về những lựa chọn của mình chăng?{" "}
              </Text>
            </Flex>
            <Flex alignItems="baseline">
              {" "}
              <Text
                mt={1}
                cursor="pointer"
                fontWeight="normal"
                fontSize="14px"
                mr="8"
                color="purple"
              >
                #Lifestyke #OnlyinLife #EndofSeason #quotesoftheday
                #quotesinspiration #quotesinspo #quotes
              </Text>
            </Flex>
            <Flex alignItems="baseline">
              {" "}
              <Text
                mt={1}
                mb={6}
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
        </Flex>

        {/* Body */}
        <Box
          textAlign="justify"
          width="24em"
          justifyContent="flex-start"
          mx="2"
          flexDirection="column"
        >
          <Flex flexDirection="row">
            <Flex flexDirection="column">
              <CircularProgress
                cursor="pointer"
                value={100}
                thickness="3px"
                color="#ff8b00"
                mr="2"
                size={{ base: 20, sm: 12 }}
                isIndeterminate={hasStories}
                justifyContent="flex-start"
              >
                <CircularProgressLabel onClick={handleClickStory}>
                  <Image
                    ml="1.5"
                    src="https://bit.ly/dan-abramov"
                    h="13em"
                    alt="Dan Abramov"
                    rounded="full"
                  />
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
            <Flex flexDirection="column">
              <Flex>
                <Text
                  cursor="pointer"
                  fontSize="14px"
                  fontWeight="bold"
                  ht="bold"
                  mr="2"
                >
                  huyen.204{" "}
                </Text>
                <Text fontSize="14px" textOverflow="ellipsis">
                  Muốn đi nhanh thì đi một mình Muốn đi chậm thì vừa đi vừa chụp
                  hìnn ✌🏻
                </Text>
              </Flex>
              <HStack >
                <Text fontSize="12px" textOverflow="ellipsis">
                  12h
                </Text>
                <Text fontSize="13px" textOverflow="ellipsis" color="gray" fontWeight="bold">
                  88 likes
                </Text>
                <Text cursor="pointer" fontSize="13px" textOverflow="ellipsis" color="gray" fontWeight="bold">
                  Reply
                </Text>
              </HStack>
            </Flex>
          </Flex>
          <Flex flexDirection="row">
            <Flex flexDirection="column">
              <CircularProgress
                cursor="pointer"
                value={100}
                thickness="3px"
                color="#ff8b00"
                mr="2"
                size={{ base: 20, sm: 12 }}
                isIndeterminate={hasStories}
                justifyContent="flex-start"
              >
                <CircularProgressLabel onClick={handleClickStory}>
                  <Image
                    ml="1.5"
                    src="https://bit.ly/dan-abramov"
                    h="13em"
                    alt="Dan Abramov"
                    rounded="full"
                  />
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
            <Flex flexDirection="column">
              <Flex>
                <Text
                  cursor="pointer"
                  fontSize="14px"
                  fontWeight="bold"
                  ht="bold"
                  mr="2"
                >
                  gvinh2802{" "}
                </Text>
                <Text fontSize="14px" textOverflow="ellipsis">
                  Muốn đi nhanh thì đi một mình Muốn đi chậm thì vừa đi vừa chụp
                  hìnn ✌🏻
                </Text>
              </Flex>
              <HStack >
                <Text fontSize="12px" textOverflow="ellipsis">
                  12h
                </Text>
                <Text fontSize="13px" textOverflow="ellipsis" color="gray" fontWeight="bold">
                  1000 likes
                </Text>
                <Text cursor="pointer" fontSize="13px" textOverflow="ellipsis" color="gray" fontWeight="bold">
                  Reply
                </Text>
              </HStack>
            </Flex>
          </Flex>

          <Flex flexDirection="row">
            <Flex flexDirection="column">
              <CircularProgress
                cursor="pointer"
                value={100}
                thickness="3px"
                color="#ff8b00"
                mr="2"
                size={{ base: 20, sm: 12 }}
                isIndeterminate={hasStories}
                justifyContent="flex-start"
              >
                <CircularProgressLabel onClick={handleClickStory}>
                  <Image
                    ml="1.5"
                    src="https://bit.ly/dan-abramov"
                    h="13em"
                    alt="Dan Abramov"
                    rounded="full"
                  />
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
            <Flex flexDirection="column">
              <Flex>
                <Text
                  cursor="pointer"
                  fontSize="14px"
                  fontWeight="bold"
                  ht="bold"
                  mr="2"
                >
                  haohao.196{" "}
                </Text>
                <Text fontSize="14px" textOverflow="ellipsis">
                  Muốn đi nhanh thì đi một mình Muốn đi chậm thì vừa đi vừa chụp
                  hìnn ✌🏻
                </Text>
              </Flex>
              <HStack >
                <Text fontSize="12px" textOverflow="ellipsis">
                  12h
                </Text>
                <Text fontSize="13px" textOverflow="ellipsis" color="gray" fontWeight="bold">
                  88 likes
                </Text>
                <Text cursor="pointer" fontSize="13px" textOverflow="ellipsis" color="gray" fontWeight="bold">
                  Reply
                </Text>
              </HStack>
            </Flex>
          </Flex>
        </Box>
        {/* Footer */}
        <HStack p="4" fontSize="xl" w="full" justifyContent="space-between">
          <HStack>
            <Box as="button" rounded="md" _hover={{ color: "pink" }}>
              <FiHeart cursor="pointer" size="1.2em" name="AtSignIcon" mr={6} />
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
          <Box pl={3} as="button" rounded="md" _hover={{ color: "pink" }}>
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
          width="24em"
          overflow="hidden"
          justifyContent="flex-start"
          mx="4"
          flexDirection="column"
        >
          <Flex>
            <Text justifyItems="flex-start" fontSize="14px" fontWeight="bold">
              2500 likes
            </Text>
          </Flex>

          <Flex alignItems="baseline">
            {" "}
            <Text
              mt="8px"
              cursor="pointer"
              fontWeight="bold"
              color="RGBA(0, 0, 0, 0.36)"
              fontSize="10px"
              mr="4"
            >
              24 HOURS AGO
            </Text>
          </Flex>
        </Flex>
        <Flex p="4" align="center" h="16">
          <HStack
            borderTop="1px solid"
            borderColor="gray.100"
            mt="8px"
            spacing={4}
            alignItems="center"
            justify="space-between"
            flex={1}
          >
            <InputGroup w="360px" alignContent="center">
              <InputLeftElement
                pointerEvents="none"
                children={<SunIcon size="1.7em" mb="20px" mr="16px" />}
              />
              <Input
                height="100%"
                variant="unstyled"
                type="tel"
                color="rgb(142,142,142)"
                placeholder="Add a comment..."
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
      </GridItem>
    </Grid>
  );
}
