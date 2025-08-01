import { motion } from "framer-motion";
import refer_a_friend from "/refer_a_friend.svg";

const ReferFriend = () => {
  return (
    <motion.div
      className=" lg:h-[60vh] mx-auto my-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-10 text-center lg:justify-between lg:px-7"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.article
        className=" space-y-3 p-5 rounded-lg  flex flex-col justify-center text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-3xl text-[#1970e8]">Refer a Friend</h1>
        <div className="text-lg max-w-md space-y-3">
          <h2>Refer and earn a reward</h2>
          <p>
            Refer a friend to open a shop at Konna and enjoy one-month free
            subscription fee
          </p>
          <button className="btn btn-block btn-sm text-[#1970e8] border-transparent bg-[#1b2857] text-lg">
            Refer a friend
          </button>
        </div>
      </motion.article>

      <motion.div
        className="image-full"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={refer_a_friend} alt="refer_a_friend" />
      </motion.div>
    </motion.div>
  );
};

export default ReferFriend;
