import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as ImIcons from 'react-icons/im';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
  {
    title: 'Address Matching',
    path: '/address',
    icon: <FaIcons.FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Email Matching',
    path: '/emailmatching',
    icon: <SiIcons.SiMailDotRu />,
    cName: 'nav-text'
  },
  {
    title: 'PAN Matching',
    path: '/panmatching',
    icon: <FaIcons.FaIdCard/>,
    cName: 'nav-text'
  },
  {
    title: 'Phone Matching',
    path: '/phonematching',
    icon: <ImIcons.ImPhone />,
    cName: 'nav-text'
  },
  {
    title: 'IP Matching',
    path: '/ipmatching',
    icon: <ImIcons.ImConnection />,
    cName: 'nav-text'
  },
  {
    title: 'Bureau Records',
    path: '/bureaurecords',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Cluster',
    path: '/cluster',
    icon: <HiIcons.HiUserGroup />,
    cName: 'nav-text'
  },
  
  
];