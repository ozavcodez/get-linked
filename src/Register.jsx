import Navbar from "./components/Navbar";

const Register = () => {
    return ( 
        <>
          <Navbar/>
          <section className="bg-bg bg-img">
            <div className="grid md:grid-cols-2 mx-auto w-[90%] py-2">
                <div className=" flex justify-center md:justify-start">
                    <img src="images/register-image.png" alt="" className=" h-[300px] md:h-[600px]"/>
                </div>
                <form action="" className="" >
                    <h4 className=" hidden md:block semi-title text-3xl">Register</h4>
                    <div className="flex items-baseline pt-3 ">
                        <div className="text-white text-xs md:text-sm ">
                            <p> Be part of this movement!</p>
                        </div>
                        <div className="flex border-b border-dashed border-[#D434FE] px-2 md:px-6">
                            <img src="images/man-walking.png" alt="" />
                            <img src="images/lady-walking.png" alt="" />
                        </div>
                    </div>
                    <p className="text-white text-xl md:text-2xl pt-5">CREATE YOUR ACCOUNT</p>
                    <div className="grid md:grid-cols-2 gap-y-5 md:gap-y-10 pt-5">
                        <div>
                            <label for="" className="pb-5">Team’s Name</label>
                            <input className="w-full" type="text" placeholder=""/>
                        </div>
                        <div>
                            <label for="" className="pb-5">Phone</label>
                            <input type="number" placeholder=""/>
                        </div>
                        <div>
                            <label for="" className="pb-5">Email</label>
                            <input type="email" placeholder=""/>
                        </div>
                        <div>
                            <label for="" className="pb-5">Project Topic</label>
                            <input type="text" placeholder=""/>
                        </div>
                        <div>
                            <label for="">Category</label>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                        <div>
                            <label for="">Group Size</label>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <p className="italic text-[#FF26B9] text-sm my-5">Please review your registration details before submitting</p>
                    <div className="check-box flex items-center">
                        <input type="checkbox"  />
                        <label id="check1" type="checkbox" name="check" value="check1" > I agreed with the event terms and conditions and privacy policy</label>
                    </div>
                    <button className="register w-full text-center py-3 mt-3"> Register Now</button>
                </form>
            </div>
          </section>
            
        </>
     );
}
 
export default Register;