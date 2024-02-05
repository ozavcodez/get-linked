const PolicyTerms = () => {
    return ( 
        <>
        <section className="border-b border-border bg-bg bg-img">
            <div className="grid lg:grid-cols-2 gap-20 w-[90%] md:w-[80%] mx-auto py-10">
                <div>
                    <h4 className="title text-xl md:text-3xl text-center lg:text-left">Privacy Policy and 
                        <span>Terms</span>
                    </h4>
                    <p className="text-[#FFFFFFBF] text-center lg:text-left">
                        Last updated on September 12, 2023
                    </p>
                    <p className="pt-5 text-white leading-8 text-center lg:text-left">
                        Below are our privacy & policy, which outline a lot of goodies. 
                        <br className="hidden md:block "/>it’s our aim to always take of our participant
                    </p>
                    <div className="border border-[#D434FE] p-5 lg:p-20  mt-20">
                    <p className=" text-white leading-8">
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose, 
                        and safeguard your data when you participate in our tech 
                        hackathon event. By participating in our event, you consent 
                        to the practices described in this policy.
                    </p>
                    <h4 className=" text-[#D434FE] pt-5 text-lg font-bold">Licensing Policy</h4>
                    <h4 className=" text-white leading-loose font-bold">
                        Here are terms of our Standard License:
                    </h4>
                    <ul className="space-y-3 leading-8 text-white pl-5 list-image-[url(/images/checkmark.png)]" >
                        <li className="pl-2">
                            The Standard License grants you a non-exclusive right to
                            navigate and register for our event
                        </li>
                        <li className="pl-2">
                            You are licensed to use the item available at any free source
                            sites, for your project developement
                        </li>
                    </ul>
                    <div className="flex justify-center pt-10">
                        <button className="register text-white py-2 px-8 col-span-1 text-base  ">Read More</button>
                    </div>
                </div>
                </div>
                
               
                <div className=" relative flex">
                    <img className="" src="images/lock.png" alt=""/>
                    <img className="absolute bottom-0 w-[400px]"  src="images/key.png" alt=""/>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default PolicyTerms;