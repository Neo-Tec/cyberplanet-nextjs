import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';

export default function TeamSlider() {
  /** Team Member Data **/
  const teamData = [
    {
      memberImage: '/images/artaza_pic.jpg',
      memberName: 'Artaza Sameen',
      memberDesignation: 'Full-Stack Developer',
      memberSocial: {
        linkedin: 'https://www.linkedin.com/in/artaza-sameen-4b995b23a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/asim_pic.jpg',
      memberName: 'Asim Tabrez',
      memberDesignation: 'Full-Stack Developer',
      memberSocial: {
        linkedin: 'https://www.linkedin.com/in/asim-tabrez-6a0274284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '/',
        youtube: 'https://youtube.com/@asimtabrez517?si=iPFwM130Msibl1TM/',
        facebook: 'https://www.facebook.com/profile.php?id=100041546256366/',
      },
    },
    {
      memberImage: '/images/zeeshan2pic.jpg',
      memberName: 'Zeeshan Akthar',
      memberDesignation: 'Full-Stack Developer',
      memberSocial: {
        linkedin: 'https://www.linkedin.com/in/zeeshanakhtarr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
    {
      memberImage: '/images/somad_pic.jpg',
      memberName: 'Md.Somad',
      memberDesignation: 'App Developer',
      memberSocial: {
        linkedin: 'https://www.linkedin.com/in/md-somad-8827ab256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },
   /* {
      memberImage: '/images/artaza_pic.jpg',
      memberName: 'Artaza Sameen',
      memberDesignation: 'Full-Stack Developer',
      memberSocial: {
        linkedin: '/',
        twitter: '/',
        youtube: '/',
        facebook: '/',
      },
    },*/
  ];
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index}>
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
