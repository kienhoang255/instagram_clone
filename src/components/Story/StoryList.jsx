import { Grid, Wrap } from "@chakra-ui/react";
import React from "react";
import StoryItem from "./StoryItem";
import { stories } from "../../utils/db";

export default function StoryList({ id }) {
  const _id = id;
  const filterId = stories.filter((story) => story.idUser == _id);
  // console.log(filterId);
  return (
    <Wrap p="2em" pl="2em" minHeight="10em">
      <Grid templateColumns="repeat(7, 1fr)" gap={7}>
        {filterId.map((element, index) => (
          <StoryItem key={index} item={element} />
        ))}

        {/* <StoryItem /> */}
      </Grid>
    </Wrap>
  );
}
