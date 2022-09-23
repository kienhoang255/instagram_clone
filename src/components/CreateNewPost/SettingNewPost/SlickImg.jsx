import React, { useContext } from 'react';
import Slider from 'react-slick';
import styles from './SettingPost.module.scss';
import classNames from 'classnames/bind';
import { ImgPreview } from './NewPost';
const cx = classNames.bind(styles);

export default function SlickImg() {
  const imgPreview = useContext(ImgPreview);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  function NextArrow(props) {
    const { className, style, onClick } = props;
    const nextArrowClass = cx('next-arrow', { [className]: className });
    return <div style={{ ...style, display: 'block', background: 'rgba(0, 0, 0, 1)' }} className={nextArrowClass} onClick={onClick} />;
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    const prevArrowClass = cx('prev-arrow', { [className]: className });
    return <div style={{ ...style, display: 'block', background: 'rgba(0, 0, 0, 1)' }} className={prevArrowClass} onClick={onClick} />;
  }
  return (
    <div className={cx('slick')}>
      <Slider {...settings}>
        <div className={cx('slick-items')}>
          <div className={cx('settingPost-preview-img')}>
            <img src={`${imgPreview}`} alt="" />
          </div>
        </div>
        <div className={cx('slick-items')}>
          <div className={cx('settingPost-preview-img')}>
            <img src={`${imgPreview}`} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}
