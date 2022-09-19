import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import React from 'react';

export default function SliderImage() {
  return (
    <Slider aria-label="slider-ex-2" colorScheme="whiteAlpha" defaultValue={0} w="132px">
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}
