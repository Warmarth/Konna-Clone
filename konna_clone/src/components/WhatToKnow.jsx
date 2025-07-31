import good from "/good.svg";

import monitor from "/monitor.svg";
import anaylitics from "/ANALYTICS 1.svg";
import monitor2 from "/monitor2.svg";
import online from "/online-store.svg";

const WhatToKnow = () => {
  const whatWorks = [
    {
      title: "Enjoy an Integrated POS System",
      description:
        "Elevate your business with our seamless POS system, improve your retail experience, facilitate effortless transactions and enjoy boundless possibilities.",
    },
    {
      title: "Monitor your staff's Performance",
      description:
        "Scale up your business performance by managing your staff more conveniently. Track their sales performance, resumption, and closure time.",
    },
    {
      title: "Crypto and Fiat Payment",
      description:
        "Seamlessly process both cryptocurrency and fiat payments with ease.",
    },
    {
      title: "Manage stores",
      description:
        "Manage the daily sales, inventory, staff, and payments from your superstores and shopping malls both online and offline with Konna.",
    },
    {
      title: "Create Multiple Branches",
      description:
        "Allow your customers the convenience of picking products from any branch closer to them by creating more branches on Konna. Save delivery costs and make products cheaper.",
    },
    {
      title: "Connect to Buyers and Suppliers",
      description:
        "Reach out to thousands of customers every day, and manage your suppliers in a hassle-free way. Manage customers more effectively by attending to their reviews and comments.",
    },
    {
      title: "Get a personalized website",
      description:
        "Creating a shop on Konna comes with your preferred website name that is unique to only your shop. Connect your shop's unique web address to all social media handles and sell from every channel.",
    },
    {
      title: "Analytics and Reporting",
      description:
        "Remotely track your sales, expenses, stocks, product, and staff performance at any interval with our powerful AI analytics tools.",
    },
    {
      title: "Save cost",
      description:
        "Let your customers reach your shop from anywhere, and anytime in the most convenient way.",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Enjoy prompt issue resolution from our customer support team.",
    },
  ];

  return (
    <div className="">
      <section className="w-5/6  mx-auto my-10 p-2 ">
        <h1 className="text-3xl mb-6 md:text-center lg:text-4xl transition-transform ease-in-out duration-300">
          What you can do with Konna
        </h1>
        <ul className="  w-full rounded-md  p-4 flex flex-col justify-stretch gap-6 md:flex-row flex-wrap ">
          {whatWorks.map((feature, index) => (
            <li
              key={index}
              className=" flex gap-3 items-start justify-start md:w-1/2 flex-1/3  transition-transform duration-300 p-1"
            >
              <img src={good} width={30} alt="good" />
              <div className=" space-y-2 ">
                <h2 className=" text-lg">{feature.title}</h2>
                <p className="text-sm text-[#6b7280] text-balance antialiased">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className=" mx-auto p-2 py-10 bg-[#0e1329] ">
        <article className="md:flex-row flex flex-col items-center justify-between gap-3 ">
          <div className="md:card text-primary-content  md:w-[30rem]">
            <div className="card-body space-y-3">
              <h2 className="card-title text-[#f59e17] text-2xl">
                POINT OF SALE(POS) SYSTEM
              </h2>
              <h3 className="text-xl">
                Electrify your Retail Operations <br /> with{" "}
                <span className="text-[#f59e17]">Our Modern POS Suite</span>
              </h3>
              <p>
                Optimize all your daily retail operations with our simplified
                POS system. Process sales, agregate essential sales data,
                generate sales receipts, track stocks more convientely, manage
                orders, deliver exceptional customer experience and streamline
                your future business projections
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn w-full capitalize border-[#f59e17]  text-[#f59e17] bg-transparent
                "
                >
                  get Started
                </button>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center py-7">
            <img src={monitor} width={400} height={400} alt="" />
          </div>
        </article>
      </section>
      <section className="  mx-auto  p-2 bg-[#1970e8] py-10  ">
        <article className=" md:flex-row flex flex-col items-center justify-between gap-3 ">
          <div className=" card text-primary-content sm:w-[30rem]">
            <div className="card-body space-y-3">
              <h2 className="card-title text-[#8db2e2] text-2xl">
                AI-POWERED BUSINESS ANALYTICS
              </h2>
              <h3 className="text-xl text-balance ">
                Unleash the AI advantage in business analytics by
                <br />
                Turning
                <span className="text-[#f59e17] pl-1">Data into Decision</span>
              </h3>
              <p>
                Our AI-feature will accurately identify a product from its
                image, accurately project product performance, Help business to
                anticipate market changes and advise accordingly, provides
                valuable insights based on customer's feedback, Identify
                employee productivity level and advise accordingly,can
                automatically adjust product prices based on market forces
                without incuring a loss
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn border-white w-full capitalize 
                bg-transparent"
                >
                  try now
                </button>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <img src={anaylitics} width={400} height={400} alt="analytics" />
          </div>
        </article>
      </section>
      <section className="  mx-auto  p-2 py-10">
        <article className="md:flex-row flex flex-col items-center justify-between gap-3 ">
          <div className=" card text-primary-content sm:w-[30rem]">
            <div className="card-body space-y-3">
              <h3 className="text-xl ">
                Your Own Online Store is <br /> with{" "}
                <span className="text-[#1970e8]">Just a Few Clicks Away</span>
              </h3>
              <p>
                Create a customized online store that helps you reach out to
                customers, sell without borders, accept payments in various
                forms forms, and grow your business.
              </p>
              <div className="card-actions justify-end">
                <button className="btn w-full capitalize btn-outline border-transparent text-[#1970e8] bg-[#1b2857]">
                  Create online shop
                </button>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <img src={online} width={500} height={500} alt="online" />
          </div>
        </article>
      </section>
      <section className=" mx-auto  p-2 py-10 bg-[#0e1329]">
        <article className="md:flex-row flex flex-col items-center justify-between gap-3 ">
          <div className=" card text-primary-content sm:w-[30rem]">
            <div className="card-body space-y-3">
              <h2 className="card-title text-[#f59e17] text-2xl">
                OFFLINE STORE
              </h2>
              <h3 className="text-xl text-balance">
                Do you Know you Can
                <span className="text-[#f59e17] p-1">Sell Offline?</span>
              </h3>
              <p>
                Your business can still sell even when your connection has a
                downtime, or you have no internet at all. A new offline
                interface will allow you: <br /> 1. Sell offline from all your
                stores. <br />
                2. Sync later when you find a connection.
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn w-full capitalize border-[#f59e17]  text-[#f59e17] bg-transparent
                "
                >
                  start selling offline
                </button>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <img src={monitor2} width={500} height={500} alt="monitor2" />
          </div>
        </article>
      </section>
    </div>
  );
};

export default WhatToKnow;
