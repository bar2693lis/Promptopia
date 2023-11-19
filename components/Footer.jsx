import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center flex-col">
      <span>
        Developed By{" "}
        <span className="blue_gradient font-satoshi font-bold text-xl">
          Bar Lis
        </span>
      </span>
      <span className="flex-row flex font-inter text-sm text-gray-500">
        Developed with Next.js
        <Image
          src={"/assets/icons/nextjs.svg"}
          alt="user_image"
          width={20}
          height={20}
          className="rounded-full object-contain ml-1"
        />
        , React
        <Image
          src={"/assets/icons/react.svg"}
          alt="user_image"
          width={20}
          height={20}
          className="rounded-full object-contain ml-[0.15rem]"
        />
        , Tailwind CSS
        <Image
          src={"/assets/icons/tailwind.svg"}
          alt="user_image"
          width={20}
          height={20}
          className="rounded-full object-contain ml-[0.15rem]"
        />
        , bcrypt
        <Image
          src={"/assets/icons/bcrypt.svg"}
          alt="user_image"
          width={25}
          height={25}
          className="rounded-full object-contain ml-[0.15rem]"
        />
        , MongoDB
        <Image
          src={"/assets/icons/mongodb.svg"}
          alt="user_image"
          width={25}
          height={25}
          className="rounded-full object-contain"
        />
        and Mongoose
        <Image
          src={"/assets/icons/mongoose.svg"}
          alt="user_image"
          width={20}
          height={20}
          className="object-contain ml-1"
        />
        {/* <img src={react} alt="react_logo" className="w-5 object-contain" />,
        Tailwind{" "}
        <img
          src={tailwind}
          alt="tailwind_logo"
          className="w-5 object-contain"
        />
        , Redux
        <img src={redux} alt="redux_logo" className="w-5 object-contain" />, */}
      </span>
    </footer>
  );
};

export default Footer;
