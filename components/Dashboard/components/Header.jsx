import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillFire } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { GiConfirmed } from 'react-icons/gi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


export const Header = () => {
  const router = useRouter()
  const [selected,setSelected] = useState(router.pathname === '/' ? 0:1)
  const selectedStyle = 'flex items-center gap-3 text-[#3CB79F] text-2xl';
  const unselectedStyle = 'flex items-center gap-3 text-[#bec8e1] text-2xl';
  return (
    <div className="w-full px-8 py-2 flex justify-between bg-white">
        <div className='p-2 bg-[#3CB79F] rounded-full'>
            <AiFillFire className='text-white w-8 h-8'/>
        </div>
        <div className='flex justify-between items-center gap-8 mr-10'>
            <Link onClick={()=>setSelected(0)} href="/" className={selected == 0 ? selectedStyle: unselectedStyle}><AiFillHome className="w-8 h-8"/>Dashboard</Link>
            <Link onClick={()=>setSelected(1)} href="/confirm" className={selected == 1 ? selectedStyle: unselectedStyle}><GiConfirmed className="w-8 h-8"/>Confirm</Link>
            <Link onClick={()=>setSelected(2)} href="/doctor" className={selected == 2 ? selectedStyle: unselectedStyle}><BsFillPersonLinesFill className="w-8 h-8"/>Doctors</Link>
            <div className='w-[2px] h-8 rounded-full bg-[#bec8e1]'></div>
            <Link href="/"><AiFillSetting className="text-[#bec8e1] w-8 h-8"/></Link>
            <Link href="/"><BiLogOut className="text-[#bec8e1] rotate-180 w-8 h-8"/></Link>
        </div>
    </div>
  )
};
