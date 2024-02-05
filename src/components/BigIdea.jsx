
const BigIdea = () => {
    
    return (  
        <>
        <section className="border-b border-border bg-bg">
        <div className="colo w-[80%] mx-auto py-10">
            {/* <left child  */}
            
            <div className="relative" >
                <img className="absolute left-0 animate-pulse" src="images/starpurple.png" alt="" />
                <div className="w-full flex items-baseline">
                    <img src="images/the_big_idea.png" alt=""/>
                    <img src="images/arrow.png" alt=""/>
                </div>
            </div>
            
            {/* <!-- right child --> */}
            <div className="relative text-center lg:text-left">
            <img className="absolute right-0 animate-caret" src="images/purplestar.png" alt="" />

                <h4 className="title text-3xl"> Introduction to getlinked
                    <span>tech Hackathon 1.0</span>
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
        </div>
        
    </section>
        </>
    );
}
 
export default BigIdea;