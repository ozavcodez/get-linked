
const HeroSection = () => {
    return ( 
        <>
        <section className="border-b border-border bg-bg bg-img" >
        <div className=" container mx-auto py-2 w-[90%]  ">
            <div className=" relative mt-5" animation="fade-up">
                
                <h1 className="relative flex flex-col justify-center md:float-right 
                    before:absolute before:inset-0 before:animate-typewriter
                  before:bg-[#150E28] text-white italic sm:text-lg lg:text-4xl font-bold md:tracking-wide">
                    Igniting a  Revolution in HR Innovation 
                    <span className="flex justify-end"> 
                        <img className="hidden lg:block" src="images/hr-curve.png" alt="" />
                        <img className="lg:hidden" src="src/assets/images/small-hr.png" alt="" />
                    </span>
                </h1>
                <div>
                    <img className="mt-10 lg:mt-0 ml-10 animate-pulse" src="src/assets/images/white-star.png" alt="" />
                </div>
            </div>
        </div>
        <div className="lg:flex justify-between text-center lg:text-left lg:w-[95%] lg:ml-auto text-white">
            <div className="lg:mt-10">
                <div className="flex justify-end">
                    <img className="ml-10 animate-caret" src="src/assets/images/gray-star.png" alt="" />
                </div>
                <div className="title text-2xl sm:text-4xl xl:text-7xl lg:mt-6 relative">
                    <div className=" ">
                        <img className="absolute right-28 sm:right-48 md:right-48 lg:right-40 w-10 h-10 lg:h-12 lg:w-12 object-contain -top-10 " src="src/assets/images/light-header.png" alt=""/>
                    </div>
                    <h2>getlinked Tech</h2>
                    <div className="flex justify-center lg:justify-start xl:gap-x-3 ">
                        <h2>Hackathon <span class="inline-flex text-[#D434FE]">1.0</span></h2>
                        <div className="w-8 h-8 lg:w-16 lg:h-16">
                            <img src="src/assets/images/chain-header.png" alt="" />
                        </div>
                        <div className="w-8 h-8 lg:w-16 lg:h-16">
                            <img src="images/head-fire.png" alt="" />
                        </div>
                    </div>
                </div>
                <p className="sm:text-xl">
                    Participate in getlinked tech Hackathon 2023 stand 
                    <br className="hidden sm:block"/>a chance to win a Big prize
                </p>
                
                <div className="my-5 md:my-10">
                    <button className="register text-white py-2 px-8 col-span-1 text-base ">Register</button>
                </div>
                <div className="flex justify-end">
                    <img className="mr-20 animate-pulse" src="images/gray-star.png" alt="" />
                </div>
                <p className="text-2xl  sm:text-4xl xl:text-7xl" id="demo"></p>
            </div>
            <div className="  relative flex overflow-hidden" >
                <div >
                    <img className="lg:h-[550px]" src="images/man-white-shirt.png" alt="" />
                </div>
                <div className="">
                    <img className="absolute left-0 animate-wiggle transition duration-300 delay-150 " src="images/bright-world.png" alt="" />
                </div>
            </div>
            
        </div>
            
        
    </section>
        </>
     );
}
 
export default HeroSection;