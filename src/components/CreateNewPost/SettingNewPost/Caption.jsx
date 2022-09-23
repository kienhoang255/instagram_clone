import React, { useLayoutEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Caption.module.scss';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import UserTag from '../../User/UserTag';
import { VscSmiley } from 'react-icons/vsc';
import { GiPositionMarker } from 'react-icons/gi';
import EmojiPopUp from '../../PopUp/EmojiPopUp/EmojiPopUp';
import AdvancedSetting from '../AdvancedSetting/AdvancedSetting';
import Accessibility from '../Accessibility/Accessibility';

const cx = classNames.bind(styles);

export default function Caption() {
  const [characters, setCharacters] = useState('');

  const [countCharacter, setCountCharacter] = useState('0');
  useLayoutEffect(() => {
    setCountCharacter(characters?.length);
  }, [characters]);
  return (
    <div className={cx('filter-caption')}>
      <UserTag />
      <div className={cx('caption-text')}>
        <textarea
          placeholder="Write a caption"
          className={cx('text-textarea')}
          maxLength={2200}
          value={characters}
          name="caption"
          id="caption"
          cols="30"
          rows="10"
          onChange={(e) => {
            setCharacters(e.target.value);
          }}
        ></textarea>
        <div className={cx('sub-caption')}>
          <EmojiPopUp setCharacters={setCharacters}>
            <span className={cx('emoji-icon')}>
              <VscSmiley />
            </span>
          </EmojiPopUp>
          <span className={cx('limit-characters')}>{countCharacter}/2.200</span>
        </div>
      </div>
      <InputGroup px={2} py={2}>
        <Input placeholder="Enter amount" variant="unstyled" />
        <InputRightElement children={<GiPositionMarker color="green.500" />} />
      </InputGroup>
      <div className={cx('toggle')}>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Accessibility
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={0}>
              <Accessibility />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Advanced Settings
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={0}>
              <AdvancedSetting />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
