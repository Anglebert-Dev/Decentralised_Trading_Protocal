import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import SubjectLists from "./Components/SubjectLists";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactUs />
      {/* <Hero /> */}
      <About />
      <SubjectLists />
      <Footer />
    </div>
  );
}

export default App;
