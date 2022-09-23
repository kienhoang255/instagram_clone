import React from 'react';
import styles from './SettingPost.module.scss';
import classNames from 'classnames/bind';
import { Center, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import imgNormal from '../../../assets/images/Normal.jpg';
import imgClare from '../../../assets/images/Clarendon.jpg';
import imgGing from '../../../assets/images/Gingham.jpg';
import imgMoon from '../../../assets/images/Moon.jpg';
import imgLark from '../../../assets/images/Lark.jpg';
import imgReyes from '../../../assets/images/Reyes.jpg';
import Caption from './Caption';

const cx = classNames.bind(styles);

export default function Filter({ classNames, caption }) {
  const classes = cx('filter-caption', { [classNames]: classNames });
  const filterTagItem = [
    { nameFilter: 'Original', image: imgNormal },
    { nameFilter: 'Clarendon', image: imgClare },
    { nameFilter: 'Gingham', image: imgGing },
    { nameFilter: 'Moon', image: imgMoon },
    { nameFilter: 'Lark', image: imgLark },
    { nameFilter: 'Reyes', image: imgReyes },
  ];
  const filterCustomizeTagItem = [
    { nameFilter: 'Brightness', percent: 0 },
    { nameFilter: 'Contrast', percent: 0 },
    { nameFilter: 'Saturation', percent: 0 },
    { nameFilter: 'Temperature', percent: 0 },
    { nameFilter: 'Fade', percent: 0 },
    { nameFilter: 'Vignette', percent: 0 },
  ];
  const filterTag = filterTagItem.map((items, key) => {
    return (
      <div key={key} className={cx('tag-item')}>
        <div className={cx('tag-img')} style={{ backgroundImage: `url(${items.image})` }}></div>
        <span className={cx('tag-name')}>{items.nameFilter}</span>
      </div>
    );
  });
  const filterCustomizeTag = filterCustomizeTagItem.map((items, key) => {
    return (
      <div key={key}>
        <span>{items.nameFilter}</span>
        <Center>
          <Slider aria-label="slider-ex-1" defaultValue={0} max={100} min={-100} step={1} w="90%" center="true">
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Center>
      </div>
    );
  });
  return (
    <>
      {caption ? (
        <Caption />
      ) : (
        <div className={classes}>
          <Tabs isFitted colorScheme="gray">
            <TabList>
              <Tab>Filters</Tab>
              <Tab>Adjustments</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className={cx('tag-content')}>{filterTag}</div>
              </TabPanel>
              <TabPanel>{filterCustomizeTag}</TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      )}
    </>
  );
}
