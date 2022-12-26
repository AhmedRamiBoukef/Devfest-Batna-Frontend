import Link from "next/link";

const Landing = () => {
    return ( 
    <div className="flex flex-col ">
        <nav className="flex justify-around items-center h-16 px-8 py-2 ">
            <h3 className="text-[22px] font-bold text-green-500">3afini</h3>
            <div className="flex justify-around">
                <Link href="#home" className="text-[20px] font-semibold hover:text-green-500 ml-5">Home</Link>
                <Link href="#about" className="text-[20px] font-semibold hover:text-green-500 ml-5">About</Link>
                <Link href="#service" className="text-[20px] font-semibold hover:text-green-500 ml-5">Service</Link>
                <Link href="#contact" className="text-[20px] font-semibold hover:text-green-500 ml-5">Contact</Link>
            </div>
            <div className="flex justify-around items-center">
                <Link href="login"className="text-[18px]   mr-2 hover:bg-[#2252e1] hover:rounded-xl hover:text-[#FFF] p-2 ml-3">Sign In </Link>
                <Link href="signup" className="text-[18px]  text-[#FFFF] rounded-xl bg-[#2252e1] p-2 hover:bg-[#081a53]">Sign Up</Link>
            </div> 
        </nav>
        {/* h-[calc(100vh - 128px)]  */}
        <div className="flex justify-around items-center h-screen ">
            <div className="w-[50%] ml-[10%]">
                <div className="flex items-center ">
                    <h3 className="text-[34px] font-bold mr-4 ">3afini</h3>
                    <img src="icon.png" alt="icon" className="w-[10%]" />
                </div>
                <p className="text-[18px] pr-5 mb-[5%]">A compassionate effort to aid people out of difficult times, we are resolutely committed to provide our users with hospitals and their services at their fingertips.</p>
                <Link href="signup" className="text-[18px]  text-[#FFFF] rounded-xl bg-[#2252e1] p-3 hover:bg-[#081a53]">Registrer</Link>
            </div>
            <div className="w-[75%] mx-[10%] ">
                <img src="hosp.webp" alt="hosp" className="w-full rounded-full  "/>
            </div>
        </div>

        <div id="about" className="h-screen">
            <div className="flex justify-center p-[70px] bg-slate-200 w-[60%] mx-auto  rounded-lg"> 
                    <img src="doct.webp" alt="doctor" className="w-[200px] "/>
                    <div className="ml-4">
                        <h3 className="text-[34px] font-bold mr-6 ">Who Are We?</h3>
                        <p className="text-[18px]">This pandemic has literally brought everyone on their knees, the despair and despondency that shrouded the country during covid gave us the motive to calibrate technology and help people out of these unprecedented times. Team Swasthify tries to provide its users with a service-based distinction of our partner hospitals from all across the country. What really keeps us going is a belief that one day we will make the notion of hospitals at your fingertips  true.</p>
                    </div>
            </div>
        </div>
           
        <div className="h-screen">
            <h3 id="service" className="text-[34px] font-bold mr-6  text-center mb-[200px]">Our Services</h3>
            <div className="flex justify-around ">
                <div className="card w-96 bg-base-100 shadow-xl self-end">
                <div className="card-body">
                <div className="flex flex-col justify-center items-center">
                        <img src="docto.jpg" alt="hosp" className="w-[25%]" /> 
                        <h2 className="card-title text-green-500 font-bold">Service2</h2>
                    </div>
                    <p className="pt-7">You can contact our best doctors and </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl self-start">
                <div className="card-body">
                    <div className="flex flex-col justify-center items-center">
                        <img src="icon.png" alt="hosp" className="w-[25%]" /> 
                        <h2 className="card-title text-green-500 font-bold">Service2</h2>
                    </div>
                    
                    <p className="pt-7">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl self-end">
                <div className="card-body">
                    <div className="flex flex-col justify-center items-center">
                        <img src="patient.png" alt="hosp" className="w-[25%]" /> 
                        <h2 className="card-title text-green-500 font-bold">Service2</h2>
                    </div>
                    <p className="pt-7">Description dfkdk kdjfkfj djfsjj  kjjj j j j j j </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                </div>



            </div>
        </div>


        <footer id="contact" className="footer p-10 bg-slate-200 text-base-content">
            <div>
                <div className="flex items-center  ">
                    <h3 className="text-[34px] font-bold mr-4 ">3afini</h3>
                    <img src="icon.png" alt="icon" className="w-[10%]" />
                </div>
                <p>3afini Company Ltd.<br/>health company since 2022</p>
            </div> 
            <div>
                <span className="footer-title">Services </span>
                <a className="link link-hover">Doctors </a>  
                <a className="link link-hover">Patients </a> 
                <a className="link link-hover">Hospitales </a> 
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">Contact</a> 
                <a className="link link-hover">Services</a> 

            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <a className="link link-hover">Terms of use</a> 
                <a className="link link-hover">Privacy policy</a> 
                <a className="link link-hover">Cookie policy</a>
            </div>
            </footer>
            
            
    </div> );
}
 
export default Landing;