import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Profile from "./Profile";
import StoryList from "../Story/StoryList";
import Post from "./Post";
import { users } from "../../utils/db";

export default function PersonPage() {
  const [idFind, getIdFind] = useState("1");
  // const itemUser = users.find((user) => user.idUser == "1");
  // console.log(itemUser);
  return (
    <Box bg="#fafafa">
      {/* {users
        .filter((user) => user.idUser == "1")
        .map((element) => {
          <Profile item={element} />;
        })} */}
      <Profile id={idFind} />;
      <StoryList id={idFind} />
      <Post id={idFind} />
    </Box>
  );
}
