import { useState } from "react";

const Accordion = () => {
  const Faqs = [
    {
      question: "What is Konna?",
      answer:
        "Konna is a platform that allows users to create and share content easily. It provides tools for collaboration, creativity, and community engagement.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button on the homepage and fill out the registration form with your details.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, Konna has a mobile app available for both iOS and Android devices. You can download it from the respective app stores.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "If you forget your password, you can reset it by clicking on the 'Forgot Password' link on the login page and following the instructions.",
    },
    {
      question: "What should I do if I encounter a bug?",
      answer:
        "If you encounter a bug, please report it through our support page or contact our customer service team for assistance.",
    },
    {
      question: "What should I do if I encounter a bug?",
      answer:
        "If you encounter a bug, please report it through our support page or contact our customer service team for assistance.",
    },
  ];

  const [viewMore, setViewMore] = useState(false);
  const [faq, setFaq] = useState(Faqs.slice(0, 5));
  const [index, setIndex] = useState(0);

  const handleViewMore = () => {
    if (viewMore) {
      setFaq(Faqs.slice(0, 5));
    } else {
      setFaq(Faqs);
    }
    setViewMore(!viewMore);
  };

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex === index ? 0 : newIndex);
  };

  return (
    <div>
      <div className=" mx-auto py-10 px-3 lg:h-[100vh] bg-[#0e1329]">
        <h1 className=" text-3xl font-bold mb-6 ">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col items-center  p-2">
          <div className="join join-vertical   ">
            {faq.map((faq, idx) => (
              <div key={idx} className="mb-4">
                <div className="collapse collapse-plus join-item bg-[#1b2136] rounded-2xl">
                  <input
                    type="checkbox"
                    className="peer"
                    checked={index === idx}
                    onChange={() => handleIndexChange(idx)}
                  />
                  <div className="collapse-title text-xl font-medium">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="btn text-[#1970e8] border-[#1970e8] bg-transparent  "
            onClick={handleViewMore}
          >
            {viewMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
