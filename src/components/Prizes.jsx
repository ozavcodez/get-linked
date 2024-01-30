const Prizes = () => {
    return ( 
        <>
            <section className="border-b border-border bg-bg bg-img" >
                <div className="colo w-[90%] mx-auto py-10">
                    <div>
                        <img src="images/gold-cup.png" alt=""/>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center">
                            <h4 className="title text-3xl ">Prizes and 
                                <span> Rewards</span>
                            </h4>
                            <p className="text-white leading-8 ">
                                Highlight of the prizes or rewards for winners 
                                <br className="hidden md:block"/>and for participants.

                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 md:mt-32 font-bold text-white leading-10 ">
                            <div className="relative lg:ml-10 mt-5 ">
                                <div className="absolute md:-top-20 ">
                                    <img src="images/silver_medal.png" alt=""/>
                                </div>
                                <div className="max-w-[180px]  mt-20 pt-20  border border-[#D434FE] rounded-lg  text-center bg-[#D434FE1F]">
                                    <h2 className=" text-xl md:text-3xl font-bold">2nd <br />Runner</h2>
                                    <h2 className=" text-xl md:text-3xl text-[#D434FE] pb-5">N300,000</h2>
                                </div>
                            </div>
                            <div className=" relative">
                                <div className=" absolute md:-top-20 w-full ">
                                    <img className=" w-full"  src="images/gold_medal.png" alt=""/>
                                </div>
                                <div class="max-w-[180px] m-auto mt-20 pt-28  border border-[#903AFF] rounded-lg  text-center  bg-[#D434FE1F]" >
                                    <h2 className=" text-xl md:text-3xl font-bold">1st <br />Runner</h2>
                                    <h2 className=" text-xl md:text-3xl text-[#903AFF] pb-5">N400,000</h2>
                                </div>
                            </div>
                            <div className="relative  lg:mr-10 mt-5">
                                <div className="absolute md:-top-20 ">
                                    <img src="images/bronze_medal.png" alt=""/>
                                </div>
                                <div className="max-w-[180px]  mt-20 pt-20  border border-[#D434FE] rounded-lg  text-center bg-[#D434FE1F]">
                                    <h2 className=" text-xl md:text-3xl font-bold">3rd <br />Runner</h2>
                                    <h2 className=" text-xl md:text-3xl text-[#D434FE] pb-5">N150,000</h2>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Prizes;