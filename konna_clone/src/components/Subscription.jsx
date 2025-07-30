import { useState } from "react";
import { motion } from "framer-motion";


const Subscription = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  const conversionRates = {
    USD: 1,
    NGN: 1500,
    KES: 140,
    GHS: 15,
  };

  const currencySymbols = {
    USD: "$",
    NGN: "₦",
    KES: "KSh",
    GHS: "GH₵",
  };

  const plans = [
    {
      name: "Starter",
      isPopular: false,
      pricing: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        "High-resolution image generation",
        "Customizable style templates",
        "Batch processing capabilities",
      ],
      disabledFeatures: ["Real-time collaboration tools"],
    },
    {
      name: "Pro",
      isPopular: false,
      pricing: {
        monthly: 9,
        yearly: 90,
      },
      features: [
        "High-resolution image generation",
        "Customizable style templates",
        "Batch processing capabilities",
        "Priority support",
      ],
      disabledFeatures: ["Real-time collaboration tools"],
    },
    {
      name: "Business",
      isPopular: false,
      pricing: {
        monthly: 19,
        yearly: 190,
      },
      features: [
        "High-resolution image generation",
        "Customizable style templates",
        "Batch processing capabilities",
        "Team Management",
      ],
      disabledFeatures: ["Real-time collaboration tools"],
    },
    {
      name: "Premium",
      isPopular: true,
      pricing: {
        monthly: 29,
        yearly: 290,
      },
      features: [
        "High-resolution image generation",
        "Customizable style templates",
        "Batch processing capabilities",
        "AI-driven image enhancements",
      ],
      disabledFeatures: [
        "Seamless cloud integration",
        "Real-time collaboration tools",
      ],
    },
  ];

  const formatPrice = (usdPrice) => {
    const rate = conversionRates[currency];
    const symbol = currencySymbols[currency];
    const converted = usdPrice * rate;

    return `${symbol}${
      currency === "USD" ? usdPrice : Math.round(converted).toLocaleString()
    }`;
  };

  return (
    <div>
      <section className="w-5/6 mx-auto text-white p-10 flex flex-col gap-3 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2 text-center w-2/3 mb-10 mx-auto">
          <h1 className="text-3xl font-bold text-gray-200 mb-4">
            Konna Subscription Plan
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Choose a subscription plan that fits your budget to have unlimited
            access to all the features.
            <span className="font-semibold text-green-600">
              {" "}
              Save up to NGN 8000
            </span>{" "}
            when you subscribe annually.
          </p>

          <div className="flex justify-center items-center gap-4 mt-4">
            <label
              htmlFor="currency"
              className="text-lg font-semibold text-primary"
            >
              Select Currency:
            </label>
            <select
              id="currency"
              name="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="h-10 px-4 rounded-lg border border-gray-300 text-amber-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="NGN">NG Naira</option>
              <option value="USD">US Dollar</option>
              <option value="KES">KSH Shillings</option>
              <option value="GHS">GHS Cedi</option>
            </select>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm">
            <span
              className={`cursor-pointer px-3 py-1 rounded-full ${
                billingCycle === "monthly"
                  ? "bg-primary text-white"
                  : "bg-base-300"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </span>
            <span
              className={`cursor-pointer px-3 py-1 rounded-full ${
                billingCycle === "yearly"
                  ? "bg-primary text-white"
                  : "bg-base-300"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </span>
          </div>
        </div>

        <h2 className="text-xl">Subscription Plans</h2>
        <div className="flex flex-col items-center justify-center md:flex-row flex-wrap mt-10 gap-5">
          {plans.map((plan, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="card w-80 shadow-sm hover:scale-105 transition-all duration-300 hover:bg-green-400 bg-gradient-to-bl from-5% to-secondary"
>
              <div className="card-body">
                {plan.isPopular && (
                  <span className="badge badge-xs badge-warning mb-2">
                    Most Popular
                  </span>
                )}
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold">{plan.name}</h2>
                  <span className="text-xl">
                    {formatPrice(plan.pricing[billingCycle])}
                  </span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.disabledFeatures.map((feature, i) => (
                    <li className="opacity-50" key={`disabled-${i}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-base-content/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Subscription;
