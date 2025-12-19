import Hero from "./components/container/HeroSection/";
import Header from "./components/container/HeaderSection";
import { Customers, Results, Process, Solutions, Industry, Portfolio, Review, FAQ, Contact } from "./components/container/ContentSection/";
import ButtonSwitchDarklight from "./components/ui/Button/ButtonSwithDarkLight";
import Footer from "./components/container/FooterSection/";
import Modal from "./components/container/Popup";

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
        <Contact />
        <Footer />
        <ButtonSwitchDarklight />
      </main>
      <Modal />
    </>
  );
}

export default App;
