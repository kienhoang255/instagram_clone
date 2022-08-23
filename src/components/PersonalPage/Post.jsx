import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Box,
} from "@chakra-ui/react";
import PostItem from "./PostItem";
import { posts } from "../.././utils/db";
import { MdVideoLibrary } from "react-icons/md";
import { AiOutlineAppstore, AiFillTag } from "react-icons/ai";
import Reels from "./Reels";

export default function Post({ id }) {
  const _id = id;
  const filterId = posts.filter((post) => post.idUser === _id);
  return (
    <Tabs pt="2em" align="center" defaultIndex={0}>
      <TabList display="flex" alignItems="center" justifyContent="center">
        <Box display="flex" alignItems="center" justifyContent="center">
          <AiOutlineAppstore />
          <Tab p="0">POSTS</Tab>
        </Box >
        <Box display="flex" alignItems="center" justifyContent="center" pl="3em" pr="3em">
          <MdVideoLibrary />
          <Tab p="0">REELS</Tab>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <AiFillTag />
          <Tab p="0">TAGGED</Tab>
        </Box>
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

          <Grid templateColumns='repeat(4, 1fr)' gap={7}>
            <Reels />
            <Reels />
            <Reels />
            <Reels />
            <Reels />
          </Grid>

        </TabPanel>
        <TabPanel>

          <Grid templateColumns="repeat(3, 1fr)" gap={7}>
            {filterId.map((post, index) => (
              <PostItem item={post} key={index} />
            ))}
          </Grid>

        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
