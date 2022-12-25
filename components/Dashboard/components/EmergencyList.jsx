import React from 'react'

export const EmergencyList = ({setPosition,emergencyList}) => {
    
    const protectionCivil = {
            location: {
                type:'Point',
                coordinates: [
                    6,7
                ],
            },
            address: "ain yagout", 
            email: "ks_sellami@esi.dz",
            phone: "077777777",
        }
        
    
    const dangerousStyle = {
        "low": "px-2 py-1 rounded-2xl bg-green-700 text-white",
        "medium": "px-2 py-1 rounded-2xl bg-yellow-500 text-white",
        "high": "px-2 py-1 rounded-2xl bg-red-500 text-white",
        "highfast": "px-2 py-1 rounded-2xl bg-red-700 text-white",
    }
    const calcAge = (birthdate) =>{
        var diff_ms = Date.now() - birthdate;
        var age_dt = new Date(diff_ms); 
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  return (
    <div>
        <div className='m-4'>
            <div className='mb-3 flex justify-between items-center'>
                <p className='text-xl font-bold'>Emergency List</p>
                <p className='text-lg font-semibold'>{emergencyList.length} result</p>
            </div>
            <hr />
        </div>
        <div className='overflow-x-hidden overflow-y-scroll max-h-[80vh] h-full'>
            {emergencyList.map((elem,index) => (
                
                <div key={index}>
                    <label htmlFor={`patientmodal${elem.id}`} onClick={() => {setPosition([elem.location.coordinates[0],elem.location.coordinates[1]])}}  className="py-2 px-3 hover:bg-gray-100 cursor-pointer text-black rounded-xl flex justify-around items-center m-2 bg-white">
                    <div className='text-lg font-semibold'>
                        <p>{elem.patient.firstname}</p>
                        <p>{elem.patient.lastname}</p>
                    </div>
                    <div>
                        <p className='text-lg'>{calcAge(elem.patient.birthdate)}</p>
                        <p className='text-lg font-bold'>yo</p>
                    </div>
                    <div className={elem.fast ? dangerousStyle["highfast"]:dangerousStyle[elem.Dangerous]}>
                        {elem.Dangerous}
                    </div>
                </label>
                <input type="checkbox" id={`patientmodal${elem.id}`} className="modal-toggle" />
                    <label htmlFor={`patientmodal${elem.id}`} className="modal cursor-pointer">
                    <label className="modal-box relative max-w-none w-[70%] h-[70%] " htmlFor="">
                        <div className='flex flex-col justify-between items-center h-full'>
                            <h1 className='w-full flex justify-center items-center text-5xl font-semibold'>Emergency Details</h1>
                            <div className='text-lg flex justify-between items-center m-4 w-full bg-gray-200 py-6 px-6 rounded-xl'>
                                <p>{elem.patient.firstname}</p>
                                <p>{elem.patient.lastname}</p>
                                <p>{calcAge(elem.patient.birthdate)}</p>
                                <p>{elem.patient.email}</p>
                                <p>{elem.patient.phone}</p>
                                <p className={elem.fast ? dangerousStyle["highfast"]:dangerousStyle[elem.Dangerous]}>{elem.Dangerous}</p>
                            </div>
                            <div className='text-lg bg-gray-200 py-6 px-6 rounded-xl w-full m-4'>
                                <h1 className='w-full flex justify-center items-center text-3xl mb-8 font-semibold'>Nearest Civil protection</h1>
                                <div className='flex justify-between items-center '>
                                    <p>Address</p>
                                    <p>Email</p>
                                    <p>Phone</p>
                                    <div></div>
                                </div>
                                <div className='flex justify-between items-center '>
                                    <p>{protectionCivil.address}</p>
                                    <p>{protectionCivil.email}</p>
                                    <p>{protectionCivil.phone}</p>
                                    <button className='px-4 py-2 rounded bg-[#3CB79F] text-white'>Send Message</button>
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor={`patientmodal${elem.id}`} className="w-full flex justify-center items-center text-3xl font-semibold px-12 py-4 rounded-lg bg-[#3CB79F] text-white">Check</label>
                            </div>
                        </div>
                    </label>
                    
                    </label>
                </div>
            ))}
        </div>
        
        
    </div>
  )
}
