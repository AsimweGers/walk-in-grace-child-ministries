import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-pink-600 pt-20 lg:px-36 px-10 text-white">
      {/* div 1 */}
      <div className="flex flex-col lg:flex-row lg:justify-between mb-8 items-center">
        <div>
          <h1 className="text-2xl">KEEP UP WITH WIGCM!</h1>
          <p className="text-base font-light italic">
            Receive updates, news, and success stories straight to your inbox!
          </p>
          <div className="py-4">
            <form className="gap-4 grid lg:flex ">
              <input
                placeholder="Name"
                type="text"
                className="p-1 text-black text-base border-none active:bg-pink-600"
              />
              <input
                placeholder="Email Address"
                type="text"
                className=" p-1 text-black text-base border-none active:bg-pink-600"
              />
              <button className=" bg-blue-400 rounded-full py-2 lg:py-0 px-4 hover:bg-green-600">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="button ">
          <Link href="#">
            <button className="border-white border-2 p-4 hover:bg-green-600 rounded-full lg:rounded-none">
              DONATE TODAY
            </button>
          </Link>
        </div>
      </div>

      {/* div 2 */}

      <div className="text-center">
        <div>
          <h1 className="text-lg font-medium">
            Walk In Grace Child Ministries
          </h1>
          <p>
            Uganda Address: P.O. Box 250, Maliba Road, Kisinga Town Council,
          </p>
          <p>Busongora North, Maliba Sub-county, Kasese, Uganda</p>

          {/* other address */}
          <p>US Address: 5662 Calle Real #123, Goleta, CA, 93117</p>
          <Link href="#">
            <p>info@walkingracechildministriesuganda.org</p>
          </Link>
        </div>
      </div>

      {/* div 3 */}

      <div className="flex lg:flex-row flex-col justify-between py-5 items-center">
        <div className="flex gap-2">
          <Link href="/UpcomingEvents">
            <img
              src="logo.jpg"
              alt="walk in grace child ministries"
              className="w-6 h-6"
            />
          </Link>
          <Link href="/UpcomingEvents">
            <img
              src="logo.jpg"
              alt="walk in grace child ministries"
              className="w-6 h-6"
            />
          </Link>
          <Link href="/UpcomingEvents">
            <img
              src="logo.jpg"
              alt="walk in grace child ministries"
              className="w-6 h-6"
            />
          </Link>
          <Link href="/UpcomingEvents">
            <img
              src="logo.jpg"
              alt="walk in grace child ministries"
              className="w-6 h-6"
            />
          </Link>
          <Link href="/UpcomingEvents">
            <img
              src="logo.jpg"
              alt="walk in grace child ministries"
              className="w-6 h-6"
            />
          </Link>
        </div>
        <div className="mt-2 lg:mt-0">
          <p>WIGCM is a nonprofit organization.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
