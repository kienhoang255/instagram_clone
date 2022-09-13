import React, { forwardRef } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const ButtonArrowDown = forwardRef(({ ...props }, ref) => {
  return (
    <div ref={ref}>
      <RiArrowDownSLine />
    </div>
  );
});
export default ButtonArrowDown;
