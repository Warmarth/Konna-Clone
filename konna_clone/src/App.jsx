import Accordion from "./components/Faq.jsx";
import FooterPage from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HowItworks from "./components/HowItWorks.jsx";
import ReferFriend from "./components/ReferFriend.jsx";
import Subscription from "./components/Subscription.jsx";
import Testimonial from "./components/testimonial.jsx";
import WhatToKnow from "./components/WhatToKnow.jsx";

function App() {
  return (
    <main className="bg-[#040a21]">
      <Header />
      <Hero />
      <WhatToKnow />
      <HowItworks />
      <Subscription />
      <Testimonial />
      <Accordion />
      <ReferFriend />
      <FooterPage />
    </main>
  );
}

export default App;
