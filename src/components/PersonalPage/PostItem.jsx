import { Box, GridItem, Image } from "@chakra-ui/react";
import React from "react";

export default function PostItem({ item, index }) {
  return (
    <GridItem width="100%" height={{ lg: 293 }}>
      <Box cursor="pointer">
        <Image
          height={{ lg: 293 }}
          minH="263px"
          minW="263px"
          src={require("../../assets/images/avatar.jpg")}
          _hover={{ opacity: "0.2" }}
        />
      </Box>
    </GridItem>
  );
}
