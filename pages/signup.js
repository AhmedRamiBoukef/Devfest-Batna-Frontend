import { useState, useEffect, useContext } from "react";
import Router from 'next/router'
import Link from "next/link";
import axios from 'axios'
import { UserContext } from "../components/Layout";

const SingUp = () => {
  const [avl, setAvl] = useState(false);
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const {user,setUser }= useContext(UserContext);
  useEffect(() => {
    if (user) Router.push({
      pathname:"/main",

    })

  }, [user])
  useEffect(() => {
    getLocation();
  }, []);

  //var x = document.getElementById("demo");
  const locationlat = (e) => {
    setLat(e.target.value);
  };
  const locationlog = (e) => {
    setLog(e.target.value);
  };
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setAvl(false);
    }
    function showPosition(position) {
      setLat(position.coords.latitude);
      setLog(position.coords.longitude);
    }
  }
  const handleClick = () => {
    const data={
      name:name,
      email:email,
      password:password,
      phone:phone,
      location: {
        type: 'Point',
        coordinates: [
            lat,
            log
        ]
    }
    }
    console.log(data);
    axios.post("http://10.33.30.159:5000/hospital/signup", 
        data
    )
      .then(function (response) {
        if (response.status===200){
          setUser(response.data.hospital);
          localStorage.setItem('hospital',JSON.stringify(response.data.hospital));
          localStorage.setItem('token',response.data.token);
          Router.push({
            pathname: '/main',
        })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
    {!user && <div className="flex justify-center">
      <div className="w-[8%]">
        <img
          src="doctor.webp"
          alt="doctor"
          className=" w-[100%] ml-[50%] h-[20%]   rounded-full mt-[50%]"
        />
        <img
          src="med.webp"
          alt="med"
          className="w-[100%] ml-[100%] h-[20%]  rounded-full mt-[100%]"
        />
      </div>
      <div className="w-[70%]  my-3 text-center flex flex-col justify-start  items-center ">
        <h1 className="text-center lg:text-[40px] md:text-[30px]  sm:text-[20px]  text-[10px]  mb-1 font-semibold text-green-500 ">
          Sign Up
        </h1>
        <p className="    lg:text-[18px] md:text-[15px] sm:text-[12px] text-[12px]  text-center opacity-50 block ">
          We need a few information so you can <br /> access your appointment{" "}
        </p>
        <label className="lg:text-[18px] w-72 mb-6 md:text-[15px] sm:text-[12px] text-[9px] font-medium ">
          {" "}
          Name <br />
          <input
            type="text"
            value={name}
            onChange={e=> setName(e.target.value)}
            required
            placeholder="YourName"
            className="bg-gray-50 w-full mt-2 border-2 border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1"
          />
        </label>
        <label className="lg:text-[18px] w-72 mb-6 md:text-[15px] sm:text-[12px] text-[9px] font-medium ">
          {" "}
          Phone <br />
          <input
            type="tel"
            required
            value={phone}
            onChange={e=> setPhone(e.target.value)}
            placeholder="YourPhone"
            maxLength="10"
            minLength="10"
            className="bg-gray-50 mt-2 border-2 w-full border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1"
          />
        </label>
        <label className="lg:text-[18px] w-72  mb-6 md:text-[15px] sm:text-[12px] text-[9px] font-medium ">
          {" "}
          Email <br />
          <input
            type="email"
            required
            value={email}
            onChange={e=> setEmail(e.target.value)}
            placeholder="john.doe@company.com"
            className="bg-gray-50 w-full mt-2 border-2  border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1"
          />
        </label>
        <label className="lg:text-[18px] w-72 md:text-[15px] sm:text-[12px] text-[9px] font-medium ">
          {" "}
          Password
          <br />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={e=> setPassword(e.target.value)}
            className="bg-gray-50 mt-2 border-2 w-full border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1"
          />
        </label>
        <div className="mt-3 ">
          <div className="flex justify-center ">
            <button onClick={()=>handleClick()} className="border-2 bg-[#3CB79F] hover:cursor-pointer font-bold text-white lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-fit mt-8 px-12 py-2">
              Register
            </button>
          </div>

          {avl && (
            <div className="flex justify-center ">
              <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium text-red-500	mx-auto">
                Geolocation is not supported by this browser.
              </label>
            </div>
          )}
          <div className="flex mt-5 justify-center">
            <p className="  inline lg:text-[18px] md:text-[15px] sm:text-[12px] text-[9px]  text-left opacity-50 ">
              you have an account ?{" "}
            </p>
            <Link
              href="/login"
              className="  lg:text-[18px] md:text-[15px] sm:text-[12px] text-[9px] underline text-[#293be2]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[8%]  relative">
        <img
          src="emerg.webp"
          alt="emerg"
          className="w-[100%] mr-[50%] h-[20%]   rounded-full mt-[50%] absolute right-[75%]"
        />
        <img
          src="mesures.jpg"
          alt="mes"
          className="w-[100%]  h-[20%]  rounded-full mt-[100%] absolute right-[35%] top-[35%]"
        />
      </div>
    </div>}
    </>
  );
};
// of batna univ 2  :  lat = 35.63371299863124
// log= 6.27921766167761
export default SingUp;
