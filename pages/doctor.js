import Image from 'next/image';
import React, { useState } from 'react'
import patient from '../public/patient.svg'
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function Confirm() {
    
    const doctors = [
        {
            firstname: "sellami",
            lastname: "sif eddine",
            birthdate: new Date("1995-12-17T03:24:00"),
            email: "ks_sellami@esi.dz",
            phone: "077777777",
            specialities: "General Doctor",
            confirmed : true,
        },
    ];
    const calcAge = (birthdate) =>{
        var diff_ms = Date.now() - birthdate;
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  return (
    <div className='h-[90vh] w-full'>
        <div className='flex font-semibold justify-between items-center px-4 py-2 m-4 ml-4'>
            <div>    </div>
            <div>FullName</div>
            <div>Age</div>
            <div>Contact</div>
            <div>Address</div>
            <div>Speciality</div>
        </div>
        <hr />
        <div className='overflow-x-hidden overflow-y-scroll max-h-[83vh] h-full'>
            {doctors.map((elem,index) => (
                <div key={index} className="flex justify-between items-center px-4 py-3 m-4 bg-white rounded-2xl">
                    <div className='rounded-full overflow-hidden bg-[#3CB79F] w-10 h-10'>
                        <Image src={patient} alt="patient" className='text-green-500' height="100%" layout="responsive" objectFit="contain"/>
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
                    <div className='text-lg font-semibold'>
                        <p>{elem.address}</p>
                    </div>
                    <div className='text-lg font-semibold'>
                        <p>{elem.specialities}</p>
                    </div>
                   

                </div>
            ))}
        </div>

    </div>
  )
}
