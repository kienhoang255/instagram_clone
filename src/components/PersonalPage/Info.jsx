import { Box, Button, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import React from "react";
import FollowButton from "../FollowButton/FollowButton";
import ExpandButton from "../ExpandButton/ExpandButton";
import { users } from "../../utils/db";
import { Link } from "react-router-dom";

export default function Info({ id }) {
  const _id = id;
  const itemUser = users.find((user) => user.idUser === _id);
  return (
    <React.Fragment>
      <Box pt="5px" pl="5px" display="flex" alignItems="center">
        <Text fontSize="full" as="samp" fontWeight="light:10" pr="16px">
          {itemUser.nameUser}
        </Text>
        <Link to="/message">
          <Button
            colorScheme="gray.300"
            variant="outline"
            size="sm"
            fontWeight="bold"
            borderRadius="4px"
            mr="16px"
            borderColor="#bbbbbb"
          >
            Nhắn tin
          </Button>
        </Link>
        <FollowButton />
        <Button
          colorScheme="gray.300"
          variant="outline"
          size="sm"
          fontWeight="bold"
          borderRadius="4px"
          mr="10px"
          borderColor="#bbbbbb"
        >
          <ChevronDownIcon />
        </Button>
        <ExpandButton />
      </Box>
      <Box pt="16px" display="flex" alignItems="center">
        <Text
          fontSize="full"
          as="samp"
          fontWeight="light:10"
          display="flex"
          flexDirection="row"
        >
          <Text fontWeight="bold">{itemUser.posts}&nbsp;</Text> posts
        </Text>
        <Text
          fontSize="full"
          as="samp"
          fontWeight="light:10"
          pr="3em"
          pl="3em"
          display="flex"
          flexDirection="row"
          cursor="pointer"
        >
          <Text fontWeight="bold">{itemUser.followers}&nbsp;</Text> followers
        </Text>
        <Text
          fontSize="full"
          as="samp"
          fontWeight="light:10"
          display="flex"
          flexDirection="row"
          cursor="pointer"
        >
          Following{" "}
          <Text fontWeight="bold">&nbsp;{itemUser.following}&nbsp;</Text> users
        </Text>
      </Box>
      <Box pt="16px" display="flex" alignItems="center">
        <Text fontSize="full" as="samp" fontWeight="bold" pr="16px" x>
          {itemUser.rName}
        </Text>
      </Box>
      <Box display="flex" alignItems="center">
        <Text fontSize="full" as="samp" fontWeight="light" pr="16px" x>
          MESSAGES
        </Text>
      </Box>
    </React.Fragment>
  );
}
