import refer_a_friend from "/refer_a_friend.svg";
const ReferFriend = () => {
  return (
    <div className=" w-5/6 lg:h-[60vh] mx-auto my-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-10 text-center">
      <article className=" bg-base-100 space-y-5 p-5 rounded-lg shadow-lg flex flex-col  justify-center lg:text-left">
        <h1 className=" text-4xl text-blue-300 ">Refer a Friend</h1>
        <div className=" text-lg max-w-md ">
          <h2 className=" ">Refer and earn a reward</h2>
          <p>
            Refer a friend to open a shop at Konna and enjoy one-month free
            subscription fee
          </p>
          <button className="btn  btn-accent w-1/2 mt-2.5">
            refer a friend{" "}
          </button>
        </div>
      </article>
      <div className="image-full">
        <img src={refer_a_friend} alt="refer_a_friend" />
      </div>
    </div>
  );
};

export default ReferFriend;
