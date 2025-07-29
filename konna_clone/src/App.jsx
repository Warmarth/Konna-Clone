import Accordion from "./components/Faq.jsx";
import FooterPage from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import HowItworks from "./components/HowItWorks.jsx";
import ReferFriend from "./components/ReferFriend.jsx";
import Subscription from "./components/Subscription.jsx";
import Testimonial from "./components/testimonial.jsx";

function App() {
  return (
    <>
      <Header />
      <HowItworks/>
      <Subscription />
      <Testimonial />
      <Accordion />
      <ReferFriend />
      <FooterPage />
    </>
  );
}

export default App;
