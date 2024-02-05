const Partners = () => {
    return ( 
        <>
        <section className="border-b border-border bg-bg bg-img">
            <div className="w-[80%] mx-auto py-10">
                <div className="pb-5">
                    <h4 className="title text-3xl text-center">Partners and Sponsors</h4>
                    <p className="text-left md:text-center text-white leading-8">  Getlinked Hackathon 1.0 is honored to have the following major 
                        <br className="hidden md:block"/>companies as its partners and sponsors
                    </p>
                </div>
                <div className="border border-[#D434FE] rounded-md my-10">
                    <div className="grid grid-cols-3  gap-10 w-[70%] mx-auto my-10 items-center">
                        <div>
                            <img src="images/Liberty-companylogo.png" alt="" className="object-contain pb-3 flex justify-center" />
                        </div>
                        <div>
                            <img src="images/Liberty-logo.png" alt="" className="object-contain pb-3 flex justify-center" />
                        </div>
                        <div>
                            <img src="images/Winwise-logo.png" alt="" className="object-contain pb-3 flex justify-center" />
                        </div>
                        <div>
                            <img src="images/wisper-logo.png" alt="" className="object-contain pb-3 flex justify-center" />
                        </div>
                        <div>
                            <img src="images/Paybox.png" alt="" className="object-contain pb-3 flex justify-center" />
                        </div>
                        <div>
                            <img src="images/Vizual-Plus.png" alt="" className="object-contain pb-3 flex justify-center" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Partners;