import { useState } from "react";
import { Link, NavLink} from "react-router-dom";
const Navbar = () => {
    const hover = " transitions text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pinkpur via-main to-blues"
    const Hover =({isActive}) => (isActive ? 'hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pinkpur via-main to-blues' : hover)
    
    const [sideOpen, setSideOpen] = useState(false);
     
    // const openNav = () => {
    //     setSideOpen((prev != prev) )
    // }

    return ( 
        <>
            <header className="sticky w-full top-0 z-20 border-b border-border bg-bg bg-img">
                <div className="container mx-auto py-6 w-[90%]   flex lg:grid lg:grid-cols-7 justify-between items-center">
                    {/* logo */}
                    <div className="lg:col-span-3">
                        <Link to="/">
                            <h1 className=" text-4xl  text-white title">get<span class="text-[#D434FE]">linked</span></h1>
                        </Link> 
                    </div>
                    {/* menu  */}
                    <ul className="lg:col-span-3 hidden lg:flex gap-10 xl:gap-20  text-base">
                        <NavLink to="" className={Hover}>
                            <li>Timeline</li>
                        </NavLink>
                        <NavLink to="" className={Hover}>
                            <li>Overview</li>
                        </NavLink>
                        <NavLink to="" className={Hover}>
                            <li>FAQS</li>
                        </NavLink>
                        <NavLink to="/contact-us"  className={Hover}>
                            <li>Contact</li>
                        </NavLink>
                    </ul>
                    <NavLink to="/register">
                        <div className="hidden lg:flex col-span-1">
                            <button class="register text-white py-2 px-8 col-span-1 text-base " >Register</button>
                        </div>
                    </NavLink>
                    <button className="lg:hidden cursor-pointer" onClick={() => setSideOpen (prev => !prev)}>
                        <img src="images/open-nav.png" alt=""/>
                        <h2></h2>
                    </button>
                    
                </div>
            
            </header>
            <aside>
                <div className = {` fixed z-40  w-[300px] right-[-300px] h-auto bg-[#150E28] p-5 top-0 duration-700 transition-all ease-linear ${sideOpen ? 'right-[0px]' : ''}`}>
                    <div className="float-right  cursor-pointer " onClick={() => setSideOpen (prev => !prev)}>
                        <img src="images/open-nav.png" alt=""/>
                        <h2></h2>
                    </div>
                    <ul className="  clear-left ">
                        
                        <NavLink  className={Hover}>
                            <li className="pt-5">Timeline</li>
                        </NavLink>
                        <NavLink  className={Hover}>
                            <li className="pt-5">Overview</li>
                        </NavLink>
                        <NavLink className={Hover}>
                            <li className="pt-5">FAQS</li>
                        </NavLink>
                        <NavLink    className={Hover}>
                            <li className="pt-5">Contact</li>
                        </NavLink>
                    </ul>
                    <div className="pt-5">
                        <button class="register text-white py-2 px-8 col-span-1 text-base ">Register</button>
                    </div>
                </div>
            </aside>
        </>
     );
}
 
export default Navbar;