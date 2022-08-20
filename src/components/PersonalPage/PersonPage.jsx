import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Profile from "./Profile";
import StoryList from "../Story/StoryList";
import Post from "./Post";

export default function PersonPage() {
  const [idFind, getIdFind] = useState("2");
  return (
    <Box bg="#fafafa">
      <Profile id={idFind} />;
      <StoryList id={idFind} />
      <Post id={idFind} />
    </Box>
  );
}
