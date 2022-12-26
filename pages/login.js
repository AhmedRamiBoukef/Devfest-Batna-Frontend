import Link from "next/link";
import GoogleButton from "react-google-button";

const Login = () => {
  return (
    <div className="bg-[#3CB79F] bg-opacity-30 lg:p-14 md:p-10 sm:p-6 p-4 ">
      <div className=" mb-[5%] flex justify-between bg-[#FFFF] mx-[5%] rounded-xl lg:p-5 md:p-4 sm:p-3 p-2 shadow-lg">
        <div className=" shadow-sm rounded-md grow lg:p-5 md:p-4 sm:p-3 p-2">
          <h1 className="text-left lg:text-[40px] md:text-[30px]  sm:text-[20px]  text-[10px]  mb-1 font-semibold text-green-500 ">
            Login
          </h1>
          <p className="  mb-[5%] inline lg:text-[18px] md:text-[15px] sm:text-[12px] text-[9px]  text-left opacity-50 ">
            Don t have an account yet?{" "}
          </p>
          <Link
            href="/signup"
            className="  lg:text-[18px] md:text-[15px] sm:text-[12px] text-[9px] underline text-[#293be2]"
          >
            Sign Up
          </Link>
          <br />
          <br />

          <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium ">
            {" "}
            Email <br />
            <input
              type="email"
              required
              placeholder="john.doe@company.com"
              maxLength="50"
              className="bg-gray-50  border-2 border-gray-300 max-w-sm w-[50%] text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 "
            />
          </label>
          <br />
          <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium ">
            {" "}
            Password
            {/* <Link to='/frgpass' className='  lg:text-[14px] md:text-[12px] sm:text-[9px] text-[7px] underline ml-[20%] text-[#293be2]'>Forgot Password?</Link> */}
            <br />
            <input
              type="password"
              required
              placeholder="Password"
              maxLength="50"
              minLength="6"
              className="bg-gray-50 border-2 border-gray-300 max-w-sm w-[50%] text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:p-2.5 p-1"
            />
          </label>
          <button className="border-2 bg-[#3CB79F] hover:cursor-pointer font-bold text-white lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 w-fit mt-8 px-8 py-2">
            Login
          </button>
          <hr className="mt-[8%] mb-[8%] w-[75%]" />
          <GoogleButton className="ml-[10%]" />
        </div>
        <img src="6301.jpg" alt="hospital" className="rounded-lg w-[60%]" />
      </div>
    </div>
  );
};

export default Login;
