import { useState } from "react";

function Testimonial() {
  const testimonials = [
    {
      image: "https://i.ibb.co/4d1f3bH/Rectangle-1.png",
      name: "John Doe",
      designation: "CEO, Tech Solutions",
      feedback:
        "Konna has transformed the way I manage my business. The interface is user-friendly and the features are incredibly helpful.",
    },
    {
      image: "https://i.ibb.co/4d1f3bH/Rectangle-1.png",
      name: "Jane Smith",
      designation: "Founder, Creative Agency",
      feedback:
        "The customer support is outstanding! They helped me set up everything quickly and efficiently. Highly recommend Konna!",
    },
    {
      image: "https://i.ibb.co/4d1f3bH/Rectangle-1.png",
      name: "Alice Johnson",
      designation: "Manager, Retail Store",
      feedback:
        "Konna has made it so easy to track my sales and inventory. I can’t imagine running my business without it now.",
    },
    {
      image: "https://i.ibb.co/4d1f3bH/Rectangle-1.png",
      name: "Bob Brown",
      designation: "CTO, Startup Inc.",
      feedback:
        "The analytics features are a game-changer. I can now make data-driven decisions tat have significantly improved my business performance.",
    },
    {
      image: "https://i.ibb.co/4d1f3bH/Rectangle-1.png",
      name: "Charlie Green",
      designation: "Entrepreneur",
      feedback:
        "I love how customizable Konna is. It fits perfectly with my business needs and has streamlined my operations.",
    },
  ];

  const [viewMore, setViewMore] = useState(testimonials);
  const [ind, setInd] = useState(0);

  const movingCard = () => {
    setInd((prev) => (prev + 1) % testimonials.length);
  };


  return (
    <div className=" bg-gradient-to-bl from-5% to-secondary text-white p-10 h-[100vh] overflow-hidden">
      <article
        className="
        flex flex-col items-center justify-center text-center space-y-2 "
      >
        <h1 className="text-2xl b">Testimonial</h1>
        <h2 className="semi-bold text-4xl">Hear from our Customers</h2>
        <p className="text-lg w-3/4">
          Here is the feedback from our clients regarding their experiences
          using Konna for their business management.
        </p>
      </article>
      <div className="flex flex-col items-center justify-center gap-3 overflow-hidden base-100 p-5 rounded-lg shadow-lg mt-10">
        <div className="flex flex-col items-left p-4 justify-center bg-white text-black  rounded-lg shadow-lg w-[20rem] hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-4 ">
            <img
              src={testimonials[ind].image}
              alt={testimonials[ind].name}
              className="w-14 h-14 rounded-full "
            />
            <article>
              <h3 className="text-xl font-semibold">
                {testimonials[ind].name}
              </h3>
              <p className="text-sm italic">{testimonials[ind].designation}</p>
            </article>
          </div>
          <p className="text-base mt-2">{testimonials[ind].feedback}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
