const Timeline = () => {
    const timelines = [
        {title:'Hackathon Announcement', body:'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register', time:'November 18, 2023', id:1},
        {title:'Teams Registration begins', body:'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register', time:'November 18, 2023', id:2},
        {title:'Teams Registration ends', body:'Interested Participants are no longer Allowed to register', time:'November 18, 2023', id:3},
        {title:'Announcement of the accepted teams and ideas', body:'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced', time:'November 18, 2023', id:4},
        {title:'Announcement of the accepted teams and ideas', body:'Accepted teams can now proceed to build their ground breaking skill driven solutions', time:'November 18, 2023', id:5},
        {title:'Demo Day', body:'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day', time:'November 18, 2023', id:6},
    ]
    return ( 
        <section  className="bg-[#140D27] " id="timeline" >
            <div className="w-[80%] mx-auto py-10">
                <div className="pb-5">
                    <h4 className="title text-3xl text-center">Timeline</h4>
                    <p className="text-left md:text-center text-white leading-8">
                        Here is the breakdown of the time we anticipate 
                        <br className="hidden md:block"/>using for the upcoming event.
                    </p>
                </div>
                
                <ol className="relative timeline space-y-10 max-w-[1200px]" >
                    <img className=" animate-caret ml-20" src="images/starpurple.png" alt="" />

                    {timelines.map((timeline) =>(
                        
                        <li className="cont" key={timeline.id}>
                            <span className="text-center text-2xl pt-1 font-bold">{timeline.id}</span>
                            <h3 className="mb-1 text-2xl font-bold text-[#D434FE]">{timeline.title}</h3>
                            <p className="text-white leading-8">{timeline.body}</p>
                            <time className="text-2xl font-bold text-[#D434FE]">{timeline.time}</time>
                        </li>
                       
                        
                    )
                    )}
                    <img className=" animate-caret" src="images/starpurple.png" alt="" />
                    <img className=" animate-caret absolute right-40 top-1/2" src="images/white-star.png" alt="" />

                </ol>

            </div>
            
        </section>
     );
}
 
export default Timeline;