import { useState } from "react";
import { EmergencyList } from "./components/EmergencyList";
import { PatientMap } from "./components/PatientMap";

export const Dashboard = () => {
  const emergencyList = [
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
  const [position,setPosition] = useState([6.275271,35.638021])

  return (
        <div className="grid grid-cols-4">
          <div className="col-span-3"><PatientMap emergencyList={emergencyList} position={position}/></div>
          <div className="col-span-1"><EmergencyList emergencyList={emergencyList} setPosition={setPosition}/></div>
        </div>
  )
};
