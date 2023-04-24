import { listMenuLinks } from './metadata'
import { HiOutlineLogin } from 'react-icons/hi'
import imageLogo from '../../../public/logo.png'
import useMenu from '../../hooks/useMenu'
import './index.css'

export default function Menu ({ menuHidden, setMenuHidden }) {
  const { handleLogOut, url } = useMenu()
  return (
    <div>
      <div className={`w-full h-[100vh] lg:hidden block fixed top-0 left-0 ${menuHidden ? 'block' : 'hidden'} z-[1]`} onClick={() => setMenuHidden(!menuHidden)} />
      <div className={`w-64 h-full fixed left-0 rounded-xl top-0 bg-white z-20 p-10 lg:left-0 ${menuHidden ? 'left-0' : 'left-full'}`}>
        <div className='flex flex-col justify-between h-full w-full'>
          <div>
            <div className='mb-10'>
              <a href='/dashboard' className='flex items-center text-slate-950'>
                <div className='w-[55px] h-[55px] rounded-full overflow-hidden relative'>
                  <img src={imageLogo} alt='logo' className='w-full h-full object-cover' />
                </div>
                <span className='text-xl font-semibold ml-1'>Mishleds</span>
              </a>
            </div>
            <ul className='flex flex-col gap-10'>

              {listMenuLinks.map(itemList => (
                <div key={itemList.title} className='flex mb-2 flex-col'>
                  <h3 className='uppercase mb-2 text-[#919191] font-semibold text-sm'>
                    {itemList.title}
                  </h3>
                  {itemList.subTitles.map(childrenTitle =>
                    (<li key={childrenTitle.name} className='mb-2'>
                      <a className={`px-3 py-[6px] rounded-lg link-menu sm:text-[17px] text-[15px] font-semibold flex items-center hover:text-white hover:bg-[#4360ef] ${url === childrenTitle.href ? 'bg-[#4360ef] text-[#fff]' : 'text-slate-950'}`} href={childrenTitle.href}>
                        <span className='mr-3'>{childrenTitle.icon}</span><span>{childrenTitle.name}</span>
                      </a>
                    </li>))}
                </div>
              )
              )}
            </ul>
          </div>
          <div>
            <button onClick={handleLogOut} className='text-[#1d1d1d] flex items-center text-base place-content-center font-semibold'><span className='grid mr-3'><HiOutlineLogin /></span>Log out</button>
          </div>
        </div>
      </div>
    </div>
  )
}
