import { useState, useEffect } from "react";

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
        "The analytics features are a game-changer. I can now make data-driven decisions that have significantly improved my business performance.",
    },
    {
      image: "https://i.ibb.co/4d1f3bH/Rectangle-1.png",
      name: "Charlie Green",
      designation: "Entrepreneur",
      feedback:
        "I love how customizable Konna is. It fits perfectly with my business needs and has streamlined my operations.",
    },
  ];

  const [ind, setInd] = useState(0);

  const nextTestimonial = () => {
    setInd((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setInd((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-tl   p-10 ">
      <article className="flex flex-col items-center justify-center text-center space-y-2">
        <h1 className="text-2xl font-semibold text-[#1970e8]">
          Our testimonial
        </h1>
        <h2 className="font-semibold text-2xl">Hear from our Customers</h2>
        <p className=" w-3/4 text-[#516980]">
          Here is the feedback from our clients regarding their experiences
          using Konna for their business management.
        </p>
      </article>

      <div className="flex flex-col items-center justify-center gap-4 p-5 rounded-lg  mt-10 ">
        <div className="flex flex-col items-left p-4 justify-center bg-[#1b2136]  rounded-lg hover:shadow-lg sm:w-[20rem] hover:scale-105 transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-4">
            <img
              src={testimonials[ind].image}
              alt={testimonials[ind].name}
              className="w-14 h-14 rounded-full"
            />
            <article>
              <h3 className="text-xl font-semibold ">
                {testimonials[ind].name}
              </h3>
              <p className="text-sm italic text-[#1970e8]">
                {testimonials[ind].designation}
              </p>
            </article>
          </div>
          <p className="text-base mt-2 text-[#516980]">
            {testimonials[ind].feedback}
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={prevTestimonial}
            className="btn btn-sm text-[#1970e8] border-[#1970e8] bg-transparent"
          >
            ← Prev
          </button>
          <button
            onClick={nextTestimonial}
            className="btn btn-sm text-[#1970e8] border-[#1970e8] bg-transparent"
          >
            Next →
          </button>
        </div>

        <div className="flex gap-2 mt-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === ind ? " bg-[#1970e8] " : "bg-white opacity-30"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
