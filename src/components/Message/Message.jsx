import { Box, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import MessageChatForm from './MessageChatForm';
import MessageUser from './MessageUser';
import style from '../../assets/css/stye.css';

export default function Message() {
  const [idUser] = useState('3');

  return (
    <Box pt="20px" pb="30px">
      <Grid id="message" templateColumns="repeat(20, 1fr)">
        {/* 7Col (1)*/}
        <MessageUser idUser={idUser} />
        {/* 13Col (1)*/}
        <MessageChatForm idUser={idUser} />
      </Grid>
    </Box>
  );
}
