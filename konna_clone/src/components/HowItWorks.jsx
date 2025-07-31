import { motion } from "framer-motion";

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
    <div className=" ">
      <section className="flex flex-col items-center justify-center text-center space-y-2 p-10  text-white mx-auto">
        <article className="normal-case mb-10">
          <h1 className=" text-[#1970e8] text-xl">How It Works</h1>
          <p className="text-3xl">How to Get started</p>
        </article>
        <div className="flex gap-5 flex-wrap transition-all duration-500 justify-center items-center flex-auto flex-shrink-0">
          {getStartedSteps.map((step, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 w-[15rem] h-[12rem] bg-[#0e1329]  text-left hover:scale-110 transition-all duration-300  shadow-lg"
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center mx-auto  justify-between"
              >
                <img src={step.image} width={50} alt={step.title} />
                <span className="btn bg-[#1970e8] px-3 py-1 rounded-0 ">
                  step {index + 1}
                </span>
              </motion.div>
              <h2 className="font-bold">{step.title}</h2>
              <p className="text-sm">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center lg:justify-between mx-auto lg:flex-row gap-[3rem] my-10 w-5/6">
        <div className=" flex items-center mx-auto ">
          <img src={her} alt=" her" />
        </div>
        <div className="text-left  p-4 md:3/4 ">
          <h1 className="text-2xl text-[#1970e8] font-bold uppercase mb-4">
            multiple payment method
          </h1>
          <h2 className="font-bold text-xl mb-2">
            Accept Multiple Payment
            <span className="text-[#1970e8]  mx-1 ">Options</span>
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

      <section className="  w-5/6  mx-auto flex  flex-col items-center justify-center text-center space-y-5 p-10 bg-[#1970e8] rounded-xl">
        <article>
          <h2 className="text-2xl mb-1.5">What are You Waiting for?</h2>
          <p>Manage your business Online/Offline with/without internet</p>
        </article>
        <button
          className="btn capitalize border-transparent
          text-[#1970e8] 
                bg-white
                "
        >
          Get Started
        </button>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {downlodLink.map((link, index) => (
            <div
              key={index}
              className="flex items-center gap-2  px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={link.image}
                width={100}
                alt={link.title}
                className="rounded-4xl border-white border"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItworks;
