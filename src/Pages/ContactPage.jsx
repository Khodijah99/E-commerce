import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function ContactPage() {
  return (
    <div>
      <div className="top-nav">
        <Header />
        <Navbar />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
export default ContactPage;
