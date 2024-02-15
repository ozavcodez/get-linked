import BigIdea from "./components/BigIdea";
import Guildlines from "./components/Guildlines";
import HeroSection from "./components/HeroSection";
import JudgingCriteria from "./components/JudgingCriteria";
import Navbar from "./components/Navbar";
import Frq from "./components/Frq";
import Timeline from "./components/Timeline";
import Prizes from "./components/Prizes";
import Partners from "./components/Partners";
import PolicyTerms from "./components/PolicyTerms";
import Footer from "./components/Footer";

const Home = () => {
    return ( 
        <>
        <div className="sticky top-0 z-20">
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
        <div >
            <Frq/>
        </div>
        <div id="timeline">
            <Timeline/>
        </div>
        <div>
            <Prizes/>
        </div>
        <div>
            <Partners/>
        </div>
        <div>
            <PolicyTerms/>
        </div>
        <div>
            <Footer/>
        </div>
        </>
     );
}
 
export default Home;