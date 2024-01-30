import {useState} from 'react'
const Frq = () => {
    const quests = [
        {que:'Can I work on a project I started before the hackathon?', ans:'lorem ipsum...', id:1},
        {que:'What happens if I need help during the hackathon?', ans:'lorem ipsum...', id:2},
        {que:"What happens if I don't have an idea for a project?", ans:'lorem ipsum...', id:3},
        {que:'Can I join a team or do I have to come with one?', ans:'lorem ipsum...', id:4},
        {que:'What happens after the hackathon ends', ans:'lorem ipsum...', id:5},
        {que:'Can I work on a project I started before the hackathon?', ans:'lorem ipsum...', id:6},
    ];
    // const Accordion = () => {
            const [activeIndex, setActiveIndex] = useState(null);
        
            const handleAccordionClick = (id) => {
            setActiveIndex((prevIndex) => (prevIndex === id ? null : id));
        };
    // }
    // const acc = document.getElementsByClassName("accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    // acc[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.display === "block") {
    //     panel.style.display = "none";
    //     } else {
    //     panel.style.display = "block";
    //     }
    // });
    // }
    return ( 
        <>
            <section className="border-b border-border bg-bg">
                <div className='colo  w-[80%] mx-auto py-10'>
                    <div>
                        <img className=" animate-caret" src="src/assets/images/starpurple.png" alt="" />
                        <h4 className='title text-3xl'>
                            Frequently Ask
                            <span>Question</span>
                        </h4>
                        <p className="text-white leading-8 max-w-md">
                            We got answers to the questions that you might
                            want to ask about getlinked Hackathon 1.0
                        </p>
                        {quests.map((quest) =>(
                            <div className='text-white space-y-5 mt-10 leading-8' key={quest.id}>
                                <div className="lg:w-[80%]">
                                    <div >
                                        <button className={`accordion ${activeIndex === quest.id? 'active' : ''}`} onClick={() => handleAccordionClick(quest.id)}>{quest.que}</button>
                                        <div className='panel' style={{ display: activeIndex === quest.id ? 'block' : 'none' }}>
                                            <p>{quest.ans}</p>
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
                                    <img className=" w-10 md:w-full" src="src/assets/images/quest-1.png" alt="" />
                                    <img className=" animate-caret flex justify-center mt-20 " src="src/assets/images/sata-gra.png" alt="" />
                                </div>
                                <div class=" ">
                                    <img className=" w-10 md:w-full" src="src/assets/images/quest-2.png" alt="" />
                                </div>
                                <div className="mt-6 md:mt-10" >
                                    <img className=" w-10 md:w-full" src="src/assets/images/quest-1.png" alt="" />
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex justify-center'>
                            <img className=" animate-caret flex justify-center" src="src/assets/images/sata-gra.png" alt="" />
                        </div>
                        <img className=" animate-caret flex justify-center absolute md:bottom-72" src="src/assets/images/white-star.png" alt="" />

                        <img src="src/assets/images/questioned-man.png" alt="" />

                        <div className='flex justify-end'>
                            <img className=" animate-caret " src="src/assets/images/white-star.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Frq;