/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
import React from 'react';

import IconLaslesVpn from './graphics/Logo.png';
import Illustration1 from './graphics/Illustration 1.svg';
import IconUsers from './graphics/users.svg';
import IconMaps from './graphics/maps.svg';
import IconServers from './graphics/servers.svg';
import Illustration2 from './graphics/Illustration 2.svg';
import Check from './graphics/check.svg';
import Global from './graphics/Huge Global.svg';
import Netflix from './graphics/sosmed/netflix.svg';
import Reddit from './graphics/sosmed/reddit.svg';
import Amazon from './graphics/sosmed/amazon.svg';
import Discord from './graphics/sosmed/discord.svg';
import Spotify from './graphics/sosmed/spotify.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CardPlan from './components/CardPlan';
import Review from './components/Review';
import TitleDesc from './components/TitleDesc';

function App() {
  const menus = ['About', 'Features', 'Pricing', 'Testimonials', 'Help'];
  const section3 = [
    {
      icons: IconUsers,
      label: 'Users',
      total: '90+',
    },
    {
      icons: IconMaps,
      label: 'Locations',
      total: '30+',
    },
    {
      icons: IconServers,
      label: 'Servers',
      total: '50+',
    },
  ];

  const features = [
    'Powerfull online protection.',
    'Internet without borders.',
    'Supercharged VPN',
    'No specific time limits.',
  ];

  const plans = [
    {
      title: 'Free Plan',
      features: [
         'Unlimited Bandwitch',
        'Encrypted Connection',
        'No Traffic Logs',
        'Works on All Devices',
      ],
      price: 'Free',
    },
    {
      title: 'Standard Plan',
      features: [
         'Unlimited Bandwitch',
        'Encrypted Connection',
        'Yes Traffic Logs',
        'Works on All Devices',
        'Connect Anyware',
      ],
      price: '$9 / mo',
    },
    {
      title: 'Premium Plan',
      features: [
         'Unlimited Bandwitch',
        'Encrypted Connection',
        'Yes Traffic Logs',
        'Works on All Devices',
        'Connect Anyware',
        'Get New Features',
      ],
      price: '$12 / mo',
    },
  ];

  const sosmed = [Netflix, Reddit, Amazon, Discord, Spotify];

  return (
    <div className="bg-white">
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36">
        <img alt="icon-laslesvpn" src={IconLaslesVpn} className="36" />
        <div className="flex-1">
          <ul className="flex flex-row space-x-6">
            {menus.map((val, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center">
          <button type="submit" className="font-bold">Sign In</button>
          <button type="submit" className="border border-red-500 text-red-500 rounded-full py-2 px-6">Sign  Up</button>
        </div>
      </header>

      <main>
        <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24">
          <div>
            <h1 className="font-bold text-4xl pb-5">
              Want anything to be
              <br />
              easy
              With
              {' '}
              <strong>LaslesVPN</strong>
              .
            </h1>
            <div className="font-normal text-gray-500 text-sm pb-12">
              Provide a network for all your needs with
              ease and fun using
              {' '}
              <strong>LaslesVPN</strong>
              {' '}
              discover interesting features from us.
            </div>
            <button type="submit" className="py-4 px-16 bg-red-500 rounded-md text-white drop-shadow-3xl">Get started</button>
          </div>
          <div>
            <img src={Illustration1} alt="illustration-laslesvpn" />
          </div>
        </div>
        <div className="container max-w-5xl mx-auto grid grid-cols-3 shadow-2xl rounded-md py-4">
          {section3.map((val, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`flex flex-row py-4 space-x-6 justify-center ${
            index + 1 !== section3.length && 'border-r border-gray-200'}`}
            >
              <div className="rounded-full bg-red-100 p-3">
                <img alt={val.label} src={val.icons} className="w-6 h-6" />
              </div>
              <div>
                <div>{val.total}</div>
                <div>{val.label}</div>
              </div>
            </div>
            ))}
        </div>
        <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24 items-center">
          <img src={Illustration2} alt="features-lasles-vpn" />
          <div className="px-16 space-y-4">
            <div className="font-medium text-3xl">
              We Provide Many
              {' '}
              <br />
              {' '}
              Features You Can Use
            </div>
            <div className="text-sm text-gray-500 font-normal">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </div>
            {
              features.map((val, index) => (
                <>
                  <div className="flex items-center space-x-3" key={index}>
                    <img
                      src={Check}
                      alt="features-check-laslesvpn"
                      className="w-6 h-6"
                    />
                    <div className="text-sm text-gray-400">
                      {val}
                    </div>
                  </div>
                </>
                ))
            }
          </div>
        </div>
        <div className="bg-gray-50 py-24">
          <TitleDesc
            title="Choose Your Plan"
            desc={`Let's choose the package that is best for you and explore it happily
              and cheerfully.`}
          />
          <div className="container max-w-5xl mx-auto grid grid-cols-3 space-x-6">
            {
              plans.map((val, index) => (
                <CardPlan
                  key={index}
                  {...val}
                  isSelect={index + 1 === plans.length}
                />
             ))
            }
          </div>

          <div className="container max-w-5xl mx-auto py-24">
            <TitleDesc
              title="Huge Global Network
              of Fast VPN"
              desc={` See
              LaslesVPN
              everywhere to make it easier for you when you move`}
            />

            <img src={Global} alt="Global" className="my-20" />
            <div className="flex flex-row justify-center">
              {sosmed.map((val, index) => (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img key={index} src={val} className="w-38 px-4" alt={val} />
              ))}
            </div>
          </div>

          <Review />
        </div>
      </main>
    </div>
  );
}

export default App;
