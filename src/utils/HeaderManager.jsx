import { AiOutlineZoomIn } from 'react-icons/ai';
import { BiImages } from 'react-icons/bi';
import { MdZoomOutMap } from 'react-icons/md';
import { FiImage } from 'react-icons/fi';
import { BsSquare } from 'react-icons/bs';
import { TbRectangle, TbRectangleVertical } from 'react-icons/tb';
import SliderImage from '../components/Slider/SliderImage';
import AddMultiImage from '../components/PopUp/AddMultiImage/AddMultiImage';
export const btnManagerNewPost = [
  {
    pos: 'right',
    icon: <MdZoomOutMap />,
    btn: [
      { content: 'Original', icon: <FiImage /> },
      { content: '1:1', icon: <BsSquare /> },
      { content: '4:5', icon: <TbRectangleVertical /> },
      { content: '16:9', icon: <TbRectangle /> },
    ],
  },
  {
    pos: 'right',
    icon: <AiOutlineZoomIn />,
    component: [
      {
        content: <SliderImage />,
      },
    ],
  },
  {
    pos: 'left',
    icon: <BiImages />,
    component: [
      {
        content: <AddMultiImage />,
      },
    ],
  },
];
