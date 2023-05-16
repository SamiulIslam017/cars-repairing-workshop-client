import AboutSection from "./AboutSection/AboutSection";
import Banner from "./Banner/Banner";
import ServicesSection from "./ServicesSection/ServicesSection";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default Home;