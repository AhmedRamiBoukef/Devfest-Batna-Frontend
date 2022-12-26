import { useContext, useEffect, useState } from "react";
import { MdNotifications } from 'react-icons/md';
import { EmergencyList } from "./components/EmergencyList";
import { PatientMap } from "./components/PatientMap";
import io from "socket.io-client";
import axios from "axios";

export const Dashboard = () => {
  const emergency = [
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
        type: 'Point',
        coordinates: [
            33.223191,
            43.679291
            ]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
    {
        Dangerous:"medium",
        recording:{
            name:"",
        },
        checked: false,
        fast:false,
        location: {
            type: 'Point',
            coordinates: [6.275271,35.638021]
        },
        patient: {
            firstname: "rami",
            lastname: "Ahmed",
            birthdate: new Date("1995-12-17T03:24:00"),
            email:"hospital@gmail.com",
            phone:"077777777",
            address:"batna",
            confirm : true,
        }
    },
];  

const [ isAlertVisible, setIsAlertVisible ] = useState(false);

const handleButtonClick = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 5000);
}
const [Notification,setNotification] = useState({
  Dangerous:"high",
  recording:{
      name:"",
  },
  checked: false,
  fast:false,
  location: {
      type: 'Point',
      coordinates: [6.275271,35.638021]
  },
  patient: {
      firstname: "rami",
      lastname: "Ahmed",
      birthdate: new Date("1995-12-17T03:24:00"),
      email:"hospital@gmail.com",
      phone:"077777777",
      address:"batna",
      confirm : true,
  }
});
const [emergencyList,setEmergency] = useState([])

useEffect(() => {
    axios.get('http://10.33.30.159:5000/emergency/getNotChecked')
    .then(response=>{
        console.log(response.data);
        setEmergency(response.data);
    })
    .catch(err=>console.log(err))

  
}, [])

const socket = io.connect("http://10.33.30.159:5000/");
  
  useEffect(() => {
    socket.on("receive_notification", (data) => {
      setEmergency([data,...emergencyList]);
      setNotification(data)
      handleButtonClick();
    });
  }, [socket]);
  const [position,setPosition] = useState([6.275271,35.638021])


  return (
        <div className="grid grid-cols-4 relative">
          <div className="col-span-3"><PatientMap emergencyList={emergencyList} position={position}/></div>
          <div className="col-span-1"><EmergencyList emergencyList={emergencyList} setPosition={setPosition}/></div>
          {isAlertVisible && <div className={`font-bold text-2xl absolute bottom-10 max-w-sm left-5 alert ${Notification.Dangerous == "low" ? "alert-success":Notification.Dangerous == "medium" ? "alert-warning": "alert-error"   } shadow-lg`}>
            <div>
              <MdNotifications className="w-8 h-8"/>
              <span>Emergency Notification</span>
            </div>
          </div>}
        </div>
  )
};
