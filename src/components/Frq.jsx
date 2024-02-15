import {useState} from 'react'
const Frq = () => {
    const quests = [
        {que:'Can I work on a project I started before the hackathon?', ans:'zlorem ipsum...', id:1},
        {que:'What happens if I need help during the hackathon?', ans:'lorem ipsum...', id:2},
        {que:"What happens if I don't have an idea for a project?", ans:'lorem ipsum...', id:3},
        {que:'Can I join a team or do I have to come with one?', ans:'lorem ipsum...', id:4},
        {que:'What happens after the hackathon ends', ans:'lorem ipsum...', id:5},
        {que:'Can I work on a project I started before the hackathon?', ans:'lorem ipsum...', id:6},
    ];
  
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (id) => {
    setActiveIndex((prevIndex) => (prevIndex === id ? null : id));
    };
   
    return ( 
        <>
            <section id="faq" className="border-b border-border bg-bg">
                <div className='colo  w-[80%] mx-auto py-10'>
                    <div>
                        <img className=" animate-caret" src="images/starpurple.png" alt="" />
                        <h4 className='title text-3xl text-center lg:text-left'>
                            Frequently Ask
                            <span>Question</span>
                        </h4>
                        <p className="text-white leading-8 max-w-md">
                            We got answers to the questions that you might
                            want to ask about getlinked Hackathon 1.0
                        </p>
                        {quests.map(({id, que, ans}) =>(
                            <div className='text-white space-y-5 mt-10 leading-8' key={id}>
                                <div className="lg:w-[80%]">
                                    <div >
                                        <button className={`accordion ${activeIndex === id? 'active' : ''}`} onClick={() => handleAccordionClick(id)}>{que}</button>
                                        <div className='panel' style={{ display: activeIndex === id ? 'block' : 'none' }}>
                                            <p>{ans}</p>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <hr className="border-[#D434FE] lg:w-[80%]"/>
                            </div>
                        )
                        )}
                        
                    </div>
                    <div className='relative'>
                        <div className="relative flex md:mt-5 mb-20 ">
                            <div className="absolute flex min-[400px]:left-10 md:left-32 gap-14 ">
                                <div className="mt-6 md:mt-10" >
                                    <img className=" w-10 md:w-full" src="images/quest-1.png" alt="" />
                                    <img className=" animate-caret flex justify-center mt-20 " src="images/sata-gra.png" alt="" />
                                </div>
                                <div class=" ">
                                    <img className=" w-10 md:w-full" src="images/quest-2.png" alt="" />
                                </div>
                                <div className="mt-6 md:mt-10" >
                                    <img className=" w-10 md:w-full" src="images/quest-1.png" alt="" />
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex justify-center'>
                            <img className=" animate-caret flex justify-center" src="images/sata-gra.png" alt="" />
                        </div>
                        <img className=" animate-caret flex justify-center absolute md:bottom-72" src="images/white-star.png" alt="" />

                        <img src="images/questioned-man.png" alt="" />

                        <div className='flex justify-end'>
                            <img className=" animate-caret " src="images/white-star.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Frq;