import { Link, NavLink} from "react-router-dom";
const Navbar = () => {
    const hover = " transitions text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pinkpur via-main to-blues"
    const Hover =({isActive}) => (isActive ? 'hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pinkpur via-main to-blues' : hover)
    return ( 
        <>
            <header className="sticky top-0 z-20 border-b border-border bg-bg bg-img">
                <div className="container mx-auto py-6 w-[90%]   flex lg:grid lg:grid-cols-7 justify-between items-center">
                    {/* logo */}
                    <div className="lg:col-span-3">
                        <Link to="/">
                            <h1 className=" text-4xl  text-white title">get<span class="text-[#D434FE]">linked</span></h1>
                        </Link> 
                    </div>
                    {/* menu  */}
                    <ul className="lg:col-span-3 hidden lg:flex gap-10 xl:gap-20  text-base">
                        <NavLink  className={Hover}>
                            <li>Timeline</li>
                        </NavLink>
                        <NavLink  className={Hover}>
                            <li>Overview</li>
                        </NavLink>
                        <NavLink className={Hover}>
                            <li>FAQS</li>
                        </NavLink>
                        <NavLink    className={Hover}>
                            <li>Contact</li>
                        </NavLink>
                    </ul>
                    <div className="hidden lg:flex col-span-1">
                        <button class="register text-white py-2 px-8 col-span-1 text-base ">Register</button>
                    </div>
                    <div className="lg:hidden cursor-pointer">
                        <img src="images/open-nav.png" alt=""/>
                        <h2></h2>
                    </div>
                </div>
            
            </header>
        </>
     );
}
 
export default Navbar;