import frame1 from "/frame1.svg";
import Layer_1 from "/Layer_1.svg";
import Layer_last from "/Layer_last.svg";
import Capa_1 from "/Capa_1.svg";
import her from "/her.svg";

import money from "/money.svg";
import wallet from "/wallet.svg";
import konna from "/Konna.svg";
import konna2 from "/Konna4.svg";

import google from "/google.svg";
import ios_web from "/ios-white.svg";
import mac_web from "/mac-white.svg";
import windows from "/windows.svg";
const HowItworks = () => {
  const getStartedSteps = [
    {
      image: frame1,

      title: "Create a Konna Account",
      description: "Sign up for a free account to start using Konna.",
    },
    {
      image: Layer_1,
      title: "Add your product to Inventory",
      description:
        "Add products to inventory, with product photos, prices quantities specifications, and more.",
    },
    {
      image: Capa_1,
      title: "Create your Store",
      description:
        "Setup and customize your shop with logos, and banners, then add products from inventory.",
    },
    {
      image: Layer_last,
      title: "Start Selling",
      description: "Share your store link and start selling",
    },
  ];

  const options = [
    {
      image: konna2,
      title: "Crypto Payments",
      description: "Accept payment in stablecoins via Konnadex Payment Gateway",
    },
    {
      image: konna,
      title: "Bank Transfer",
      description:
        "Receive payments directly to your wallet address, with no middlemen.",
    },
    {
      image: wallet,
      title: "Card Payments",
      description:
        "Accept Payments via the Bank's POS terminal and Gift card POS terminal.",
    },
    {
      image: money,
      title: "Cash Payments",
      description: "Accept cash payments for local transactions.",
    },
  ];

  const downlodLink = [
    {
      image: google,
      title: " get it onnGoogle Play",
    },
    {
      image: ios_web,
      title: " download on the App Store",
    },
    {
      image: mac_web,
      title: "download on the Mac App Store",
    },
    {
      image: windows,
      title: "Get it on  Windows",
    },
  ];
  return (
    <div className=" my-10">
      <section className="flex flex-col items-center justify-center text-center space-y-2 p-10 bg-gradient-to-bl from-5% to-secondary text-white mx-auto">
        <article className="normal-case mb-10">
          <h1 className="text-4xl text-primary">How It Works</h1>
          <p>How to Get started</p>
        </article>
        <div className="flex gap-5 flex-wrap transition-all duration-500 justify-center items-center flex-auto flex-shrink-0">
          {getStartedSteps.map((step, index) => (
            <article
              key={index}
              className="p-4 w-[15rem] h-[12rem] border-2 rounded-2xl border-gray-200 text-left hover:scale-110 transition-all duration-300 hover:bg-white hover:text-black shadow-lg"
            >
              <div className="flex items-center justify-between gap-3 mb-2 ">
                <img src={step.image} width={50} alt={step.title} />
                <span className="bg-primary px-3 py-1 rounded-lg">
                  step {index + 1}
                </span>
              </div>
              <h2 className="font-bold">{step.title}</h2>
              <p className="text-sm">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center lg:justify-between mx-auto lg:flex-row gap-[3rem] my-10 w-5/6">
        <div className=" flex items-center mx-auto ">
          <img src={her} alt=" her" />
        </div>
        <div className="text-left  p-4 md:3/4 ">
          <h1 className="text-2xl text-primary font-bold uppercase mb-4">
            multiple payment method
          </h1>
          <h2 className="font-bold text-xl mb-2">
            Accept Multiple Payment
            <span className=" text-emerald-600 mx-1 ">Options</span>
          </h2>
          <p className=" text-gray-300  ">
            Receive payments with various payment options convenient for your
            customer. In addition, we support all web3 payments and
            split-payment options, allowing you to share revenue with
            collaborators and partners.
          </p>
          <ul className="flex flex-row justify-start gap-4 mt-5 md:flex-row flex-wrap transition-transform duration-500">
            {options.map((option, index) => (
              <li
                className="flex items-center gap-5 text-wrap lg:flex-row md:w-[15rem]  transition-transform duration-300 hover:scale-105 "
                key={index}
              >
                <img
                  src={option.image}
                  width={50}
                  alt="money"
                  className="border rounded-full"
                />
                <div className="space-y-2 w-full">
                  <h2 className="font-semibold text-xl">{option.title}</h2>
                  <p className="text-gray-300 text-sm">{option.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className=" bg-primary w-5/6  mx-auto flex  flex-col items-center justify-center text-center space-y-5 p-10 text-white rounded-2xl">
        <article>
          <h2 className="text-2xl mb-1.5">What are You Waiting for?</h2>
          <p>Manage your business Online/Offline with/without internet</p>
        </article>
        <button className="btn btn-secondary px-7">Get Started</button>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {downlodLink.map((link, index) => (
            <div
              key={index}
              className="flex items-center gap-2  text-black px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img src={link.image} width={100} alt={link.title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItworks;
