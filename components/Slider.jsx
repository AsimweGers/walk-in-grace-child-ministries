import React, { useState, useEffect } from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2 md:p-2">
      <div className="image">
        {/* <img src={urlFor(image && image[0])} width={500} className="w-72" /> */}
        <img src="address.jpg" alt="#" className="" />
      </div>
      <div className="info flex justify-center flex-col items-center">
        <div className="cat">
          <Link href="#">
            <p className="text-orange-600 hover:text-orange-800">
              BE A CHANGEMAKER
            </p>
          </Link>
        </div>
        <div className="title">
          <Link href="#">
            <h1 className="text-2xl md:text-4xl font-semibold p-3 md:p-0 text-gray-800 hover:text-gray-600">
              We are extremely grateful to all our donors and partners
            </h1>
          </Link>
        </div>
        <div className="description p-2 md:p-0">
          <p className="text-gray-500">
            who support and encourage us to transform the lives of Orphans in
            Uganda. WIGCM is always looking for new people to join our cause for
            orphans' empowerment and education. Together, we are building a
            vibrant movement of young orphans for their better tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
