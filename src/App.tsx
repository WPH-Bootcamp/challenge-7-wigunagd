import Hero from "./components/container/HeroSection/";
import Header from "./components/container/HeaderSection";
import {Customers, Results, Process, Solutions, Industry, Portfolio, Review, FAQ, FormContact} from "./components/container/ContentSection/";
import ButtonSwitchDarklight from "./components/ui/Button/ButtonSwithDarkLight";
import Footer from "./components/container/FooterSection/"; 

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Customers />
        <Results />
        <Process />
        <Solutions />
        <Industry />
        <Portfolio />
        <Review />
        <FAQ />
        <FormContact />
        <Footer />
        <ButtonSwitchDarklight />
      </main>
    </>
  );
}

export default App;
