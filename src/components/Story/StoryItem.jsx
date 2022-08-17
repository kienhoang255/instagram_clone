import {
  Avatar,
  CircularProgress,
  CircularProgressLabel,
  GridItem,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function StoryItem({ item, index }) {
  useEffect(() => {}, []);
  return (
    <GridItem w="100%" h="10" cursor="pointer">
      <WrapItem>
        <Stack
          direction="row"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <CircularProgress
            value={100}
            size={{ base: 75, lg: 100 }}
            thickness="1px"
            color="#dddddd"
          >
            <CircularProgressLabel>
              <Avatar
                name={item.nameStory}
                // size="xl"
                width={{ base: 55, lg: 77 }}
                height={{ base: 55, lg: 77 }}
                // src={require(item.image)}

                src={require("../../assets/images/avatar.jpg")}
              />
            </CircularProgressLabel>
          </CircularProgress>
          <Text fontWeight="bold" fontSize="13">
            {item.nameStory}
          </Text>
        </Stack>
        {/* <Text>ALo alo!</Text> */}
      </WrapItem>
    </GridItem>
  );
}
