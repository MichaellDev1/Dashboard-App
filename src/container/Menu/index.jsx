import { listMenuLinks } from './metadata'
import { HiOutlineLogin } from 'react-icons/hi'

export default function Menu ({ menuHidden }) {
  const url = location.pathname
  return (
    <div className={`w-64 h-full fixed left-0 rounded-xl top-0 bg-white z-10 p-10 lg:left-0 ${menuHidden ? 'left-0' : 'left-full'}`}>
      <div className='flex flex-col justify-between h-full w-full'>
        <div>
          <div className='mb-16'>
            <h2 className='text-xl text-[#1d1d1d] font-bold uppercase'>Logo</h2>
          </div>
          <ul className='flex flex-col gap-10'>

            {listMenuLinks.map(itemList => (
              <div key={itemList.title} className='flex flex-col gap-2'>
                <h3 className='uppercase mb-2 text-[#919191] font-semibold text-sm'>
                  {itemList.title}
                </h3>
                {itemList.subTitles.map(childrenTitle =>
                  (<li key={childrenTitle.name}>
                    <a className={`px-3 py-[5px] rounded-lg transition-[background-color] text-[17px] font-semibold flex items-center  gap-2 hover:text-white hover:bg-[#4360ef] ${url === childrenTitle.href ? 'bg-[#4360ef] text-[#fff]' : 'text-slate-950'}`} href={childrenTitle.href}>
                      <span>{childrenTitle.icon}</span><span>{childrenTitle.name}</span>
                    </a>
                  </li>))}
              </div>
            )
            )}
          </ul>
        </div>
        <div>
          <button className='text-[#1d1d1d] flex items-center gap-1 text-base place-content-center font-semibold'><span className='grid'><HiOutlineLogin /></span>Log out</button>
        </div>
      </div>
    </div>
  )
}
