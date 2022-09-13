import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineInfoCircle, AiOutlinePicture, AiOutlineHeart } from 'react-icons/ai';
import { style } from '../../assets/css/stye.css';
import React, { useState } from 'react';
import MessageModal from './MessageModal';
import { VscSmiley } from 'react-icons/vsc';
import MessageGroup from './MessageGroup';

export default function MessageChatForm({ idUser }) {
  const [isChat, setIsChat] = useState(false); //true/false Để tắt mở form chat
  const [onInput, setOnInput] = useState(true);
  const handleInput = (e) => {
    console.log(e.target.value);
    if (e.target.value === '') {
      setOnInput(true);
    } else {
      setOnInput(false);
    }
  };

  return (
    <>
      <GridItem colSpan={13} bg="white" border="1px" borderLeft="0px" borderColor="#c1c1c1" borderRadius="0 4px 4px 0">
        {isChat ? (
          <Box id="selectChat">
            <div className="circle">
              <FaTelegramPlane size="40px" />
            </div>
            <Text py="20px">Your message</Text>
            <Text pb="35px">Send photos and private messages to friends or groups.</Text>
            <MessageModal idUser={idUser} />
          </Box>
        ) : (
          <Grid id="chat-form" templateRows="repeat(13, 1fr)" templateColumns="repeat(1, 1fr)">
            <GridItem
              rowSpan={1}
              bg="white"
              borderBottom="1px"
              borderColor="#c1c1c1"
              borderRadius="0 3px 0 0"
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              px="2em"
            >
              <Box className="center-row pointer">
                <Avatar size="sm" />
                <Text fontWeight="bold" pl="10px">
                  Name
                </Text>
              </Box>
              <div className="center-row pointer">
                <AiOutlineInfoCircle size="25px" />
              </div>
            </GridItem>
            <GridItem rowSpan={12} bg="white" borderRadius="0 0 3px 0">
              <Box display="flex" flexDirection="column" justifyContent="flex-end" h="full">
                <Box
                  id="wrap-message"
                  onClick={(e) => {
                    console.log(e);
                  }}
                >
                  <MessageGroup />
                  <MessageGroup />
                  <MessageGroup />
                  <MessageGroup />
                </Box>
                <Box className="center-row" borderColor="gray.100" p="4px" m="20px" border="1px" borderRadius="40px">
                  <Box px="10px" cursor="pointer">
                    <Popover>
                      <PopoverTrigger p="0px">
                        <IconButton variant="unstyle" bg="white" icon={<VscSmiley size="24px" />} />
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Icon</PopoverHeader>
                        <PopoverBody>123123123123</PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Box>
                  <Input pl="0px" autoFocus variant="unstyle" placeholder="Messages..." size="sm" onChange={handleInput} />
                  {onInput ? (
                    <Box display="flex" flexDirection="row">
                      <AiOutlinePicture size="30px" cursor="pointer" />
                      <Box px="10px">
                        <AiOutlineHeart size="30px" cursor="pointer" />
                      </Box>
                    </Box>
                  ) : (
                    <Box px="10px">
                      <Button color="blue.400" colorScheme="blue" variant="unstyled" bgColor="white" size="md">
                        Send
                      </Button>
                    </Box>
                  )}
                </Box>
              </Box>
            </GridItem>
          </Grid>
        )}
      </GridItem>
    </>
  );
}
