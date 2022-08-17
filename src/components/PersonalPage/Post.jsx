import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
} from "@chakra-ui/react";
import PostItem from "./PostItem";
import { posts } from "../.././utils/db";

export default function Post({ id }) {
  const _id = id;
  const filterId = posts.filter((post) => post.idUser == _id);
  // console.log(filterId);
  return (
    <Tabs pt="2em" align="center" defaultIndex={0}>
      <TabList>
        <Tab>POSTS</Tab>
        <Tab pr="3em" pl="3em">
          REELS
        </Tab>
        <Tab>TAGGED</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Grid templateColumns="repeat(3, 1fr)" gap={7}>
            {filterId.map((post, index) => (
              <PostItem item={post} key={index} />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
