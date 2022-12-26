import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import patient from '../public/patient.svg'
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { UserContext } from '../components/Layout';
import  Router  from 'next/router';
import axios from 'axios';

export default function Confirm() {
    const {user,setUser }= useContext(UserContext);
    const [patientList,setPatientList] = useState([]);
    const [doctorList,setDoctorList] = useState([]);
    useEffect(() => {
      if (!localStorage.getItem('hospital')) Router.push({
        pathname:"/login",

      })
        
   }, [user])
    useEffect(() => {
      
        axios.get('http://10.33.30.159:5000/users/nonConfirm')
        .then(response=>{
            setPatientList(response.data.patients);
            setDoctorList(response.data.doctors);
            console.log(response.data)
        })
        .catch(err=>console.log(err))
      
    }, [])
    
    
    
    
    const calcAge = (birthdate) =>{
        const date = new Date(birthdate);
        var diff_ms = Date.now() - date ;
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  return (
    <>
    {user && <div className='h-[90vh] w-full'>
        <div className='flex font-semibold justify-between items-center px-4 py-2 m-4'>
            <div>    </div>
            <div>Role</div>
            <div>FullName</div>
            <div>Age</div>
            <div>Contact</div>
            <div>Confirmed</div>
        </div>
        <hr />
        <div className='overflow-x-hidden overflow-y-scroll max-h-[83vh] h-full'>
            {patientList.map((elem,index) => (
                <div key={elem._id} className="flex justify-between items-center px-4 py-3 m-4 bg-white rounded-2xl">
                    <div className='rounded-full overflow-hidden bg-[#3CB79F] w-10 h-10'>
                        <Image src={patient} alt="patient" className='text-green-500' height="100%" layout="responsive" objectFit="contain"/>
                    </div>
                    <div className='text-lg font-semibold'>
                        <p>Patient</p>
                    </div>
                    <div className='text-lg font-semibold flex gap-1'>
                        <p>{elem.firstname + " "}</p>
                        <p>{elem.lastname}</p>
                    </div>
                    <div className='text-lg font-semibold'>
                        <p>{calcAge(elem.birthdate)}</p>
                    </div>
                    <div className='text-lg font-semibold'>
                        <p className='flex gap-1 items-center'><MdEmail className='text-gray-400'/>{elem.email}</p>
                        <p className='flex gap-1 items-center'><BsFillTelephoneFill className='text-gray-400'/>{elem.phone}</p>
                    </div>
                    
                    <div>
                        <BsCheckCircleFill className='w-8 h-8 cursor-pointer text-gray-300 hover:text-gray-600' 
                            onClick={()=> {
                                axios.put(`http://10.33.30.159:5000/patient/confirm/${elem._id}`)
                                .then(response=>{
                                    console.log(response.data);
                                    setPatientList(patientList.filter((e)=>elem !== e)); 
                                })
                                .catch(err=>console.log(err))
                                
                            }}
                        />
                    </div>

                </div>
            ))}
            {
                doctorList.map((elem,index)=>(
                    <div key={elem._id} className="flex justify-between items-center px-4 py-3 m-4 bg-white rounded-2xl">
                    <div className='rounded-full overflow-hidden bg-[#3CB79F] w-10 h-10'>
                        <Image src={patient} alt="patient" className='text-green-500' height="100%" layout="responsive" objectFit="contain"/>
                    </div>
                    <div className='text-lg font-semibold'>
                        <p>Doctor</p>
                    </div>
                    <div className='text-lg font-semibold flex gap-1'>
                        <p>{elem.firstname + " "}</p>
                        <p>{elem.lastname}</p>
                    </div>
                    <div className='text-lg font-semibold'>
                        <p>{calcAge(elem.birthdate)}</p>
                    </div>
                    <div className='text-lg font-semibold'>
                        <p className='flex gap-1 items-center'><MdEmail className='text-gray-400'/>{elem.email}</p>
                        <p className='flex gap-1 items-center'><BsFillTelephoneFill className='text-gray-400'/>{elem.phone}</p>
                    </div>
                    
                    <div>
                        <BsCheckCircleFill className='w-8 h-8 cursor-pointer text-gray-300 hover:text-gray-600' 
                            onClick={()=> {
                                axios.put(`http://10.33.30.159:5000/doctor/confirm/${elem._id}`)
                                .then(response=>{
                                    console.log(response.data);
                                    setDoctorList(doctorList.filter((e)=>elem !== e)); 

                                })
                                .catch(err=>console.log(err))
                            }}
                        />
                    </div>

                </div>
                ))
            }
        </div>

    </div>}
    </>

  )
}
