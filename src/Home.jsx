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
            <Navbar/>
            <HeroSection/>
            <BigIdea/>
            <Guildlines/>
            <JudgingCriteria/>
            <Frq/>
            <Timeline/>
            <Prizes/>
            <Partners/>
            <PolicyTerms/>
            <Footer/>
        </>
     );
}
 
export default Home;