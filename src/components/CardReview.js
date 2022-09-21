/* eslint-disable react/prop-types */
import React from 'react';
import PolandCard from '../graphics/cards/poland.svg';
import StarIcon from '../graphics/star.png';

export default function CardReview({
  name, address, comment, isSelect,
}) {
  return (
    <div className={`border ${isSelect ? 'border-red-500' : 'border-gray-300'} rounded-lg p-5 w-96 h-52 `}>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-5">
          <img src={PolandCard} alt="poland card" className="w-10 h10 rounded-full" />
          <div>
            <div>{name}</div>
            <div>{address}</div>
          </div>

        </div>
        <div className="flex flex-row items-center space-x-2">
          <div>4,5</div>
          <img src={StarIcon} alt="star icon" className="w-3 h-3" />
        </div>
      </div>
      <div className="mt-5">{comment}</div>
    </div>
  );
}
