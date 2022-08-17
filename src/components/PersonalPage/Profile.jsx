import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import AvatarPerson from "./AvatarPerson";
import Info from "./Info";

function Profile({ id }) {
  return (
    <Grid
      h="full"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(10, 1fr)"
      pt="30px"
    >
      <GridItem
        rowSpan={3}
        colSpan={4}
        bg="#fafafa"
        display="flex"
        justifyContent="center"
        alignItems="center"
        pt="25px"
      >
        <AvatarPerson />
      </GridItem>
      <GridItem rowSpan={3} colSpan={6} bg="#fafafa" pt="25px">
        <Info id={id} />
      </GridItem>
    </Grid>
  );
}
export default Profile;
