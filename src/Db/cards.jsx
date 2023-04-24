import { SiVisa } from 'react-icons/si'
import { RiMastercardFill } from 'react-icons/ri'

export const cards = [
  {
    type: 'mastercard',
    number: '0000 0000 0000 1300',
    bkgnPrimary: '#516ae7',
    bkgnSecondary: '#60b2e9',
    icon: <RiMastercardFill />,
    balance: '10,370.730'
  },
  {
    type: 'visa',
    number: '0000 0000 0000 1500',
    bkgnPrimary: '#eb35eb',
    bkgnSecondary: '#ee5dee',
    icon: <SiVisa />,
    balance: '6,823.120'
  }
]
