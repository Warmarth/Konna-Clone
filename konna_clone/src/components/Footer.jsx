import logo from "../assets/logo.svg";

const FooterPage = () => {
  return (
    <div>
      <footer className="footer w-full bg-yellow-950">
        <div className="w-5/6 mx-auto py-4 ">
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4 py-5 border-b-1 border-amber-500 p-4 ">
            <article>
              <h1 className="text-2xl text-white font-bold">
                join our newsletter
              </h1>
              <p className="text-white text-md">
                We’ll like to reach out to you whenever there is an important
                update
              </p>
            </article>
            <form className="flex items-center  justify-between  bg-amber-500 rounded w-full md:w-1/2 lg:w1/3">
              <input
                type="email"
                name="email"
                id=""
                className="w-full bg-amber-50 p-2"
              />
              <button className="btn btn-secondary text-white rounded">
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4 my-5">
            <div>
              <img src={logo} alt="logo" />
              <p className="text-white text-md cursor-pointer">
                The one-stop-solution to business growth
              </p>
            </div>
            <div>
              <p className="text-white text-md capitalize text-xl pb-2">
                features
              </p>
              <ul className="space-y-4">
                {[
                  "Online Shop",
                  "Payments",
                  "Manage Sales",
                  "Manage Inventory",
                  "Business Analytics",
                  "Prices",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-blue-400 text-md cursor-pointer"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white text-md capitalize text-xl pb-2">
                Company
              </p>
              <ul className="space-y-4">
                {["About Us", "Contact Us", "Careers", "Blog"].map(
                  (company, idx) => (
                    <li
                      key={idx}
                      className="text-blue-400 text-md cursor-pointer"
                    >
                      {company}{" "}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <p className="text-white text-md capitalize text-xl pb-2">
                Supported Businesses
              </p>
              <ul className="space-y-4">
                {[
                  "Pharmaceutical shops",
                  "Restaurants",
                  "Superstores",
                  "Agro-based products",
                  "See More",
                ].map((business, idx) => (
                  <li
                    key={idx}
                    className="text-blue-400 text-md cursor-pointer"
                  >
                    {business}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white text-md capitalize text-xl pb-2">
                Download
              </p>
              <ul className="space-y-4">
                {["Android", "iOS", "Windows"].map((download, idx) => (
                  <li
                    key={idx}
                    className="text-blue-400 text-md cursor-pointer"
                  >
                    {download}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-5 md:p-4 mt-8 flex-wrap duration-300">
            <div className=" flex items-start md:items-center justify-between border-t-1 border-amber-500  w-5/6 md:mx-auto flex-wrap ">
              <div className=" flex md:flex-row flex-col md:items-center items-start md:justify-center gap-5 py-4 ">
                <p className="hover:cursor-pointer  hover:border-b-amber-200 hover:border-b-2 p-1 ">
                  © 2023 Konna App
                </p>
                <p className="hover:cursor-pointer  hover:border-b-amber-200 hover:border-b-2 p-1 ">
                  Terms of Use{" "}
                </p>
                <p className="hover:cursor-pointer  hover:border-b-amber-200 hover:border-b-2 p-1 ">
                  Privacy Policy
                </p>
              </div>
              <div className="py-4  flex flex-col md:items-center md:flex-row items-start justify-center gap-4">
                <p className="text-muted">Follow us on social media!</p>
                <p className="space-x-4  md:flex items-center justify-center">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#1877F2"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#000000"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
