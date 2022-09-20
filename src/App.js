/* eslint-disable indent */
import React from 'react';
import IconLaslesVpn from './graphics/Logo.png';
import Illustration1 from './graphics/Illustration 1.svg';
import IconUsers from './graphics/users.svg';
import IconMaps from './graphics/maps.svg';
import IconServers from './graphics/servers.svg';

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
          <button type="submit" className="border border-red-300 rounded-full py-2 px-6">Sign  Up</button>
        </div>
      </header>

      <main className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-2 py-24">
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
        <div className="grid grid-cols-3 shadow-2xl rounded-md py-4">
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
      </main>
    </div>
  );
}

export default App;
