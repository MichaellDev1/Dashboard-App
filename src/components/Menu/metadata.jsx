import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { BsCart2, BsStar, BsWallet2 } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { TbClipboardList } from 'react-icons/tb'

const listMenuLinks = [
  {
    title: 'Marketplace',
    subTitles: [{
      name: 'Dashboard',
      href: '/dashboard',
      icon: <RxDashboard />
    }, {
      name: 'Market',
      href: '/market',
      icon: <BsCart2 />
    }, {
      name: 'Favorite',
      href: '/favorite',
      icon: <BsStar />
    }]
  }, {
    title: 'Account',
    subTitles: [{
      name: 'Wallet',
      href: '/wallet',
      icon: <BsWallet2 />
    }, {
      name: 'To Do',
      href: '/todolist',
      icon: <TbClipboardList />
    }, {
      name: 'Setting',
      href: '/setting',
      icon: <AiOutlineSetting />
    }]
  }
]

export { listMenuLinks }
