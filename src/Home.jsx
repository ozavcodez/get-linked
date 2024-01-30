import BigIdea from "./components/BigIdea";
import Guildlines from "./components/Guildlines";
import HeroSection from "./components/HeroSection";
import JudgingCriteria from "./components/JudgingCriteria";
import Navbar from "./components/Navbar";
import Frq from "./components/Frq";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";

const Home = () => {
    return ( 
        <>
        <div >
            <Navbar/>
        </div>
        <div>
            <HeroSection/>
        </div>
        <div>
            <BigIdea/>
        </div>
        <div>
            <Guildlines/>
        </div>
        <div>
            <JudgingCriteria/>
        </div>
        <div>
            <Frq/>
        </div>
        <div>
            <Timeline/>
        </div>
        <div>
            <Prizes/>
        </div>
        </>
     );
}
 
export default Home;