/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
import React from 'react';
import Slider from 'react-slick';
import TitleDesc from './TitleDesc';
import CardReview from './CardReview';

const reviews = [
  {
    name: 'Viezh Robert',
    address: 'Warsaw, Poland',
    comment: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
  },
  {
    name: 'Yessica Christy',
    address: 'Shanxi, China',
    comment: '“I like it because I like to travel far and still can connect with high speed.”.',
  },
  {
    name: 'Kim Young Jou',
    address: 'Seoul, South Korea',
    comment: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
  },
  {
    name: 'Hari Irawan',
    address: 'Jakarta, Indonesia',
    comment: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.',
  },
  {
    name: 'Rizal Syaputra',
    address: 'Jakarta, Indonesia',
    comment:
      '““I like it because I like to travel far and still can connect with high speed.”.',
  },
  {
    name: 'Rizal Syaputra',
    address: 'Jakarta, Indonesia',
    comment:
      '““I like it because I like to travel far and still can connect with high speed.”.',
  },
];

export default function Review() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div>
      <TitleDesc
        title="Trusted by Thousands of Happy Customer"
        desc="These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature."
      />
      <div>
        <Slider {...settings} arrows={false}>
          {reviews.map((val, index) => (
            <div className={index === 0 ? 'ml-28' : ''}>
              <CardReview {...val} key={index} isSelect={index === 0} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-row justify-between">
        <div>dots</div>
        <div>
          <div />
        </div>
      </div>
    </div>
  );
}
