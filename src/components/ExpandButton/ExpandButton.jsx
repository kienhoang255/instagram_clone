import { HamburgerIcon } from '@chakra-ui/icons';
import { Button, Divider, IconButton, Modal, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from '@chakra-ui/react';

import React from 'react';

export default function ExpandButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        colorScheme="gray.300"
        variant="ghost"
        size="sm"
        fontWeight="bold"
        borderRadius="4px"
        mr="10px"
        onClick={onOpen}
        icon={<HamburgerIcon />}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalFooter display="flex" alignItems="center" flexDirection="column" w="full">
            <Button color="#ee5460" variant="ghost" w="full">
              Block
            </Button>
            <Divider orientation="horizontal" />
            <Button color="#ee5460" variant="ghost" w="full">
              Limit
            </Button>
            <Divider orientation="horizontal" />
            <Button color="#ee5460" variant="ghost" w="full">
              Report
            </Button>
            <Divider orientation="horizontal" />
            <Button w="full" variant="ghost" onClick={onClose}>
              Dip
            </Button>
            <Divider orientation="horizontal" />
            <Button w="full" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
