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
} from "@chakra-ui/react";

import {
  AttachmentIcon,
  AtSignIcon,
  ChatIcon,
  LockIcon,
  SearchIcon,
  CloseIcon,
} from "@chakra-ui/icons";

import ImageSlider from "./ImageSlider";

const Post = () => {
  const slides = [
    { url: "https://bit.ly/naruto-sage", title: "beach" },
    { url: "https://bit.ly/sasuke-sage", title: "boat" },
    { url: "https://bit.ly/naruto-sage", title: "forest" },
    { url: "https://bit.ly/sasuke-sage", title: "city" },
    { url: "https://bit.ly/naruto-sage", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="post-body">
      <Stack alignItems="center">
        <Box
          bg="white"
          borderColor="gray.300"
          borderWidth="thin"
          rounded="md"
          mb="6"
        >
          <Flex m="3">
            <Image
              src="https://bit.ly/dan-abramov"
              h="3em"
              alt="Dan Abramov"
              rounded="full"
              mr="4"
            />
            <Flex flexDirection="column" flex="1">
              <Text fontWight="bold" fontSize="sm">
                Dan Abramov
              </Text>
              <Text fontSize="sm" opacity="0.7">
                132 Au Co
              </Text>
            </Flex>
            <CloseIcon></CloseIcon>
          </Flex>
          {/* <AspectRatio style={containerStyles} ratio={1 / 1} maxW="2xl">
            <Image
              src="https://bit.ly/naruto-sage"
              alt="caption"
              objectFit="cover"
            />
            <ImageSlider alt="caption" objectFit="cover" slides={slides} />
          </AspectRatio> */}
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
          <Flex p="4" fontSize="xl">
            <Flex>
              <AtSignIcon size="6" name="AtSignIcon" mr="3" />
              <ChatIcon size="6" name="ChatIcon" mr="3" />
              <AttachmentIcon size="6" name="AttachmentIcon" />
            </Flex>
            <LockIcon size="6" ml="auto" name="bookmark" />
          </Flex>
          <Box mx="4">
            <Text fontSize="14px" fontWeight="extrabold">18 likes</Text>
            <Box mb="2">
              <Text font-size="sm">
                <Text font-weight="bold" mr="2"></Text>{" "}
              </Text>
            </Box>
            <Text
              color="gray.500"
              text-transform="uppercase"
              mb="2"
              font-size="0.7em"
            >
              28/02/2022
            </Text>
          </Box>
          <Flex
            p="4"
            align="center"
            border-top="1px solid"
            border-color="gray.300"
            h="16"
          >
            <HStack spacing={4} justify='space-between' flex={1}>
              <InputGroup w="280px" >
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon mb='14px' mr='16px' />}
                />
                <Input variant='unstyled' type="tel" color="rgb(142,142,142)" placeholder="Add a comment..." />
              </InputGroup>
              <Button
                justifyContent='flex-end'
                variant="ghost"
                font-size="sm"
                font-weight="bold"
                color="blue.400"
              >
                Post
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Stack>
      ;
    </div>
  );
};

export default Post;
