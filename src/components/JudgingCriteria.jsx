const JudgingCriteria = () => {
    return (  
        <section className="border-b border-border bg-bg bg-img" >
            <div className="colo  w-[90%] mx-auto py-10">
                {/*  first child  */}
                <div className="">
                    <img className=" animate-caret ml-40" src="src/assets/images/gray-star.png" alt="" />
                    <div className="flex relative mt-10">
                    <img src="src/assets/images/key-attributes.png" alt=""/>
                    <img className=" absolute animate-caret top-1/2 left-2/3 -translate-x-2/3" src="src/assets/images/gray-star.png" alt="" />
                    </div>
                    
                </div>
                {/* second child */}
                <div >
                    <h4 className="title text-3xl">Judging Criteria
                        <span>Key attributes</span>
                    </h4>
                    <div className="text-white leading-8 space-y-3">
                        <p  >
                            <span className="text-[#FF26B9]">Innovation and Creativity: </span>
                            Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel 
                            way or introduces innovative features.
                        </p>
                        <p > 
                            <span className="text-[#FF26B9]">Functionality: </span>
                            Assess how well the solution works. Does it perform its 
                            intended functions effectively and without major issues? Judges would
                            consider the completeness and robustness of the solution.
                        </p>
                        <p >
                            <span className="text-[#FF26B9]">Impact and Relevance: </span>
                            Determine the potential impact of the solution 
                            in the real world. Does it address a significant problem, and is it relevant 
                            to the target audience? Judges would assess the potential social, 
                            economic, or environmental benefits.
                        </p>
                        <p >
                            <span className="text-[#FF26B9]">Technical Complexity: </span>
                            Evaluate the technical sophistication of the solution. 
                            Judges would consider the complexity of the code, the use of advanced 
                            technologies or algorithms, and the scalability of the solution.
                        </p>
                        <p >
                            <span className="text-[#FF26B9]">Adherence to Hackathon Rules: </span>
                            Judges will Ensure that the team adhered 
                            to the rules and guidelines of the hackathon, including deadlines, use of 
                            specific technologies or APIs, and any other competition-specific requirements.
                        </p>
                    </div>
                    <div className="my-5">
                        <button class="register text-white py-2 px-8 col-span-1 text-base ">Read more</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default JudgingCriteria;