import React from 'react'

export const EmergencyList = ({setPosition,emergencyList}) => {
    
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
                    <div className={elem.fast ? dangerousStyle["highfast"]:elem.Dangerous}>
                        {elem.Dangerous}
                    </div>
                </label>
                <input type="checkbox" id={`patientmodal${elem.id}`} className="modal-toggle" />
                    <label htmlFor={`patientmodal${elem.id}`} className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                        <p className="py-4">You ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <label htmlFor={`patientmodal${elem.id}`} className="btn">Yay!</label>
                        </div>
                    </label>
                    
                    </label>
                </div>
            ))}
        </div>
        
        
    </div>
  )
}
