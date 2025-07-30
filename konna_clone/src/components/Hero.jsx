import google from "/google.svg";
import ios_web from "/ios-white.svg";
import mac_web from "/mac-white.svg";
import windows from "/windows.svg";
import Heros from "/Heros.svg";
import { motion } from "framer-motion";
function Hero() {
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
    <div className="">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-5/6 mx-auto text-center space-y-5 my-10 bg-gradient-to-tl to-secondary  rounded-xl p-6"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl transition-transform duration-300 ">
          Unlocking Business Growth
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-400 capitalize">
          Your all-in-one-solution
        </h2>

        <p className=" mx-auto md:w-md lg:w-2xl">
          the most reliable to manage stock and track sales. Take your business
          to global and let the world know your trade
        </p>
        <button className="btn md:px-[7rem] py-[2rem] btn-info capitalize text-xl ">
          join wait list
        </button>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {downlodLink.map((link, index) => (
            <div
              key={index}
              className="flex items-center gap-2  text-black px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 "
            >
              <img
                src={link.image}
                width={150}
                alt={link.title}
                className="border rounded-4xl border-amber-50"
              />
            </div>
          ))}
        </div>
      </motion.section>
      <section className=" mx-auto ">
        <div>
          <img src={Heros} alt="heros" />
        </div>
        <div className="bg-lime-600 px-[2rem] lg:py-[5rem] md:-translate-y-15.5 lg:-translate-y-17.5 transition-all duration-300 ">
          <div className=" flex flex-col justify-center lg:flex-row lg:space-y-0 ">
            <article className="bg  p-3 ">
              <h2 className="text-4xl font-semibold lg:text-5xl ">
                Boost your <br /> revenue
              </h2>
              <p className="text-xl sm:w-sm">
                gain insight that help you draw and scale you business faster
              </p>
            </article>
            <div className=" sm:flex  items-center justify-start gap-10 p-4  space-y-3 ">
              <p className="capitalize w-58 px-4 py-2 rounded-xl text-xl bg-primary  ">
                <span className="block lg:text-6xl text-5xl">100+</span>
                business <br /> worldwide
              </p>
              <p className="capitalize w-58 py-3 rounded-xl text-xl  bg-primary px-4">
                <span className="block text-5xl lg:text-6xl">10k+</span>
                trusted customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
