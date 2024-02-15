const Guildlines = () => {
    return ( 
        <>
            <section id="over-view" className="border-b border-border bg-bg" >
                <div className="colo w-[80%] mx-auto ">
                    <div className=" relative text-center lg:text-left ">
                        <img className="absolute -top-20 left-32 animate-caret" src="images/gray-star.png" alt="" />

                        <h4 className="title text-3xl ">Rules and
                            <span>Guidelines</span>
                        </h4>
                        <p className="text-white leading-8">
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a 
                            design maverick, or a concept wizard, you'll have the chance to transform 
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>
                    </div>
                    <div className="flex relative " >
                        <img className="absolute bottom-32 animate-pulse" src="images/white-star.png" alt="" />
                        <img  src="images/guildlines-rules.png " alt=""/>
                    </div> 
                </div>
            </section>
        </>
     );
}
 
export default Guildlines;