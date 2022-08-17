import logo from "../logo";
import {
  Button,
  ButtonGroup,
  HStack,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon, EmailIcon } from "@chakra-ui/icons";
import { LogoIns } from "../logo";


function Header() {
  return (
    <div className="nav-header">
      <Stack alignItems='center'>
        <HStack
          justifyContent="space-around"
          p="2"
          w="100%"
          maxW="calc(935px + 40px)"
        >
          <LogoIns></LogoIns>
          <Stack spacing={4}>
            <InputGroup variant="filled" w="280px" color="rgb(142,142,142)">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon  />}
              />
              <Input type="tel" placeholder="Search" />
            </InputGroup>
          </Stack>
          <HStack fontSize="2xl" spacing={4}>
            <EmailIcon></EmailIcon>
            <EmailIcon></EmailIcon>
            <EmailIcon></EmailIcon>
            <EmailIcon></EmailIcon>
            <EmailIcon></EmailIcon>
            <WrapItem>
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                size="sm"
              />
            </WrapItem>
          </HStack>
        </HStack>
      </Stack>
    </div>
  );
}

export default Header;
