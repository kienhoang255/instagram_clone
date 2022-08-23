import {
  HStack,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  WrapItem,
  Box,
  Grid,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { LogoIns } from "../../logo";

import { FiHeart, FiUser,FiBookmark } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { AiOutlineCompass, AiOutlineStar, AiOutlineSetting,AiOutlineUserSwitch} from "react-icons/ai";
import { RiMessengerLine, RiUserFollowLine } from "react-icons/ri";
import { MdHomeFilled } from "react-icons/md";

function Header() {
  return (
    <div className="nav-header">
      <Stack alignItems="center">
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p="2" w="60em">
          <HStack w="320px" h="10">
            <LogoIns cursor="pointer" />
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<ChevronDownIcon cursor="pointer" />}
                variant="outline"
                border="none"
              />
              <MenuList fontSize="14px">
                <MenuItem icon={<RiUserFollowLine fontSize="14px"/>}>Following</MenuItem>
                <MenuItem icon={<AiOutlineStar fontSize="14px"/>}>Favorites</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <HStack w="340px" h="10" spacing={4}>
            <InputGroup variant="filled" w="280px" color="rgb(142,142,142)">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input type="tel" placeholder="Search" />
            </InputGroup>
          </HStack>
          <HStack w="400px" h="10" fontSize="2xl" spacing={4}>
            <MdHomeFilled cursor="pointer" />
            <RiMessengerLine cursor="pointer" />
            <CgAddR cursor="pointer" />
            <AiOutlineCompass cursor="pointer" />
            <FiHeart cursor="pointer" />

            <Menu>
              <MenuButton>
                <WrapItem>
                  <Avatar
                    cursor="pointer"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    size="sm"
                  />
                </WrapItem>
              </MenuButton>
              <MenuList mr="2px" fontSize="14px">
                <MenuItem icon={<FiUser fontSize="14px"/>}>Profile</MenuItem>
                <MenuItem icon={<FiBookmark fontSize="14px"/>}>Saved</MenuItem>
                <MenuItem icon={<AiOutlineSetting fontSize="14px"/>}>Settings</MenuItem>
                <MenuItem icon={<AiOutlineUserSwitch fontSize="14px"/>}>Switch accounts</MenuItem>
                <MenuItem>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Grid>
        <Box borderBottom="border-bottom: 1px solid #000000;"></Box>
      </Stack>
    </div>
  );
}

export default Header;
