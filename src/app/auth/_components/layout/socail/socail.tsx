import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";

export default function Socail() {
  return (
    <div className="max-w-100  space-y-8 mt-6 ">
      {/* title */}
      <p className="text-center text-[#6C737F] relative after:absolute after:w-1/3 after:h-[1px] after:bg-[#E7E7E7] after:top-1/2 after:left-0     before:absolute before:w-1/3 before:h-[1px] before:bg-[#E7E7E7] before:top-1/2 before:right-0">
        Or Continue with
      </p>

      {/* socail media */}
      <ul className="flex items-center justify-center gap-8">
        {/* google */}
        <li className="cursor-pointer w-16 h-16 border border-borderColor rounded-2xl shadow-btnShadow flex items-center justify-center">
          <FaGoogle className="inline-block text-3xl text-orange-400 " />
        </li>

        {/* twitter */}
        <li className="cursor-pointer w-16 h-16 border border-borderColor rounded-2xl shadow-btnShadow flex items-center justify-center">
          <FaTwitter className="inline-block text-3xl text-[#1D9BF0] " />
        </li>

        {/* facebook */}
        <li className="cursor-pointer w-16 h-16 border border-borderColor rounded-2xl shadow-btnShadow flex items-center justify-center">
          <FaFacebook className="inline-block text-3xl text-[#1877F2] " />
        </li>

        {/* apple  */}
        <li className="cursor-pointer w-16 h-16 border border-borderColor rounded-2xl shadow-btnShadow flex items-center justify-center">
          <FaApple className="inline-block text-3xl  " />
        </li>
      </ul>
    </div>
  );
}
