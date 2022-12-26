import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AiFillFire } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { GiConfirmed } from 'react-icons/gi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { UserContext } from "../../Layout";


export const Header = () => {
  const {accept,setAccept }= useContext(UserContext);
  const [nav,setNav] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === "/" ||  router.pathname === "/login" ||  router.pathname === "/signup") {
      setNav(false)
    } else{
      setNav(true)
    }
  }, [router.pathname])
  
  const [selected,setSelected] = useState(router.pathname === '/main' ? 0:router.pathname === '/doctor'?2:1)
  const selectedStyle = 'flex items-center gap-3 text-[#3CB79F] text-2xl';
  const unselectedStyle = 'flex items-center gap-3 text-[#bec8e1] text-2xl';
  return (
    <div className="w-full px-8 py-2 flex justify-between bg-white">
        <div className='p-2 bg-[#3CB79F] rounded-full'>
            <AiFillFire className='text-white w-8 h-8'/>
        </div>
        {nav && <nav className='flex justify-between items-center gap-8 mr-10'>
            <Link onClick={()=>setSelected(0)} href="/main" className={selected == 0 ? selectedStyle: unselectedStyle}><AiFillHome className="w-8 h-8"/>Dashboard</Link>
            <Link onClick={()=>setSelected(1)} href="/confirm" className={selected == 1 ? selectedStyle: unselectedStyle}><GiConfirmed className="w-8 h-8"/>Confirm</Link>
            <Link onClick={()=>setSelected(2)} href="/doctor" className={selected == 2 ? selectedStyle: unselectedStyle}><BsFillPersonLinesFill className="w-8 h-8"/>Doctors</Link>
            <div className='w-[2px] h-8 rounded-full bg-[#bec8e1]'></div>
            <div className="form-control w-52">
              <label className="cursor-pointer label">
                <span className="label-text">Accept Emergency</span> 
                <input onChange={()=>setAccept(!accept)}  type="checkbox" className="toggle toggle-accent" checked={accept} />
              </label>
            </div>
            <Link href="/"><BiLogOut className="text-[#bec8e1] rotate-180 w-8 h-8"/></Link>
        </nav>}
        {!nav && <nav className="flex justify-around items-center gap-8 mr-10 ">

          <div className="flex justify-around">
              <Link href="/#home" className="text-[20px] transition-all duration-300 font-semibold hover:text-green-500 ml-5">Home</Link>
              <Link href="/#about" className="text-[20px] transition-all duration-300 font-semibold hover:text-green-500 ml-5">About</Link>
              <Link href="/#service" className="text-[20px] transition-all duration-300 font-semibold hover:text-green-500 ml-5">Service</Link>
              <Link href="/#contact" className="text-[20px] transition-all duration-300 font-semibold hover:text-green-500 ml-5">Contact</Link>
          </div>
          <div className="flex justify-around items-center">
              <Link href="login"className="text-[18px] transition-all duration-300   mr-2 hover:bg-[#2252e1] hover:rounded-xl hover:text-[#FFF] p-2 ml-3">Sign In </Link>
              <Link href="signup" className="text-[18px] transition-all duration-300  text-[#FFFF] rounded-xl bg-[#2252e1] p-2 hover:bg-[#081a53]">Sign Up</Link>
          </div> 
          </nav>}
    </div>
  )
};
