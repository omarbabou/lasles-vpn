/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
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
import IconFree from './graphics/Free.svg';
import CheckSuccess from './graphics/Vector (4).svg';
import Global from './graphics/Huge Global.svg';

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
          <button type="submit" className="border border-red-500 rounded-full py-2 px-6">Sign  Up</button>
        </div>
      </header>

      <main>
        <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24">
          <div>
            <h1 className="font-bold text-4xl pb-5">
              Want anything to be easy
              <br />
              With LaslesVPN.
            </h1>
            <div className="font-normal text-xs pb-12">
              Provide a network for all your needs with
              ease and fun using LaslesVPN discover interesting features from us.
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
              We Provide Many Features You Can Use
            </div>
            <div className="text-sm font-normal">
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
                    <div className="text-xs">
                      {val}
                    </div>
                  </div>
                </>
                ))
            }
          </div>
        </div>
        <div className="bg-gray-50 py-24">
          <div className="container max-w-5xl mx-auto mb-10">
            <div className="text-center text-3xl font-medium mb-5">
              Choose Your Plan
            </div>
            <div className="text-center font-normal text-sm text-gray-600">
              Let's choose the package that is best for you and explore it happily
              and
              <br />
              cheerfully.
            </div>
          </div>
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
            <div className="container max-w-5xl mx-auto mb-10">
              <div className="text-center text-3xl font-medium mb-5">
                Huge Global Network
                <br />
                of Fast VPN
              </div>
              <div className="text-center font-normal text-sm text-gray-600">
                See
                {' '}
                <strong>LaslesVPN</strong>
                {' '}
                everywhere to make it easier for you when you move
                <br />
                locations.
              </div>
            </div>
            <img src={Global} alt="Global" className="my-20" />
          </div>
        </div>
      </main>
    </div>
  );
}

function CardPlan({
 title, price, features, isSelect,
}) {
  return (
    <div className={`bg-white rounded-md flex flex-col justify-between items-center pt-16 pb-8 border ${
      isSelect ? 'border-red-500' : 'border-gray-300'}`}
    >
      <div className="space-y-5 flex flex-col justify-center items-center">
        <img src={IconFree} alt="" className="w-24" />
        <h3>{title}</h3>
        <div className="space-y-2">
          {
        features.map((val, index) => (
          <div key={index} className="flex flex-row mr-2 items-center space-x-2">
            <img
              src={CheckSuccess}
              alt="check-sucess"
              className="w-3 h-10"
            />
            <div>
              {val}
            </div>
          </div>
        ))
      }
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-3">{price}</div>
        <button
          className={`border rounded-full py-1 px-10 border-red-500 ${
          isSelect ? 'bg-red-500 text-white' : 'bg-white text-red-500'}`}
          type="submit"
        >
          Select

        </button>
      </div>
    </div>
  );
}

export default App;
