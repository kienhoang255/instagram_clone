import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
// import { LogoIns } from "../../logo";
import React from 'react';

export default function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Button onClick={onOpen} variant="ghost" color="blue.400" fontSize="sm" colorScheme="white">
        Sign in to existing account
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent display="flex" justifyContent="center" alignItems="center">
          <ModalHeader display="flex" justifyContent="center" h="175px" py="3em">
            {/* <LogoIns size="50px" /> */}
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody w="300px" p="0px">
            <Text>Phone number, username or email</Text>
            <Input placeholder="Basic usage" />
            <Text>Password</Text>
            <InputGroup size="md">
              <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Checkbox defaultChecked py="1em">
              Save login
            </Checkbox>
          </ModalBody>

          <ModalFooter display="flex" flexDirection="column" pb="40px">
            <Button colorScheme="blue" mr={3} onClick={onClose} w="300px">
              Login
            </Button>
            <Button w="300px" variant="unstyle">
              Forgot Password?
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
