const Footer = () => {
    return ( 
        <>
        <footer className="bg-[#140D27]">
        <div className="w-[90%] mx-auto grid md:grid-cols-3 pt-5">
            <div>
                <h4 className="text-3xl title  ">get
                    <span className="inline-block">linked</span>
                </h4>
                <p className="leading-8 text-white pt-3">
                    Getlinked Tech Hackathon is a technology innovation program 
                    established by a group of organizations with the aim of showcasing 
                    young and talented individuals in the field of technology
                </p>
                <div className=" flex pt-20 ">
                    <p className=" text-white ">Terms of Use
                        <span className="border-2 border-[#D434FE] mx-3"></span>
                    </p>
                    <p className=" text-white ">Privacy Policy</p>
                </div>
            </div>
            <div className=" flex  md:justify-center">
                <div>
                    <h4 className="text-[#D434FE]">Useful Links</h4>
                    <ul className="fot-list space-y-2 text-white pt-3">
                        <li><a href="">Overview</a></li>
                        <li><a href="">Timeline</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Register</a></li>
                    </ul>
                </div>
            </div>
            
            <div class=" flex  md:justify-center">
                <div>
                    <h4 className="text-[#D434FE] pb-3">Contact Us</h4>
                    <p className="text-white pb-3">+234 6707653444</p>
                    <p className="text-white">
                        27,Alara Street <br/>
                        Yaba 100012 <br/>
                        Lagos State
                    </p>
                </div>
            </div>

        </div>
        <p className="text-center text-white pb-10">All rights reserved. © getlinked Ltd.</p>
    </footer>
        </>
     );
}
 
export default Footer;