
import { Progress } from "@/components/ui/progress";
import { MdFlag } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";


// type
type UserInformationProps = { userInfo: UserApp };

export default function UserInformation({ userInfo }: UserInformationProps) {

  

  return (
    <div className="w-full  lg:w-400 xl:w-600 flex  flex-col gap-4 lg:gap-7">
      {/* about user */}
      <div className="space-y-2">
        {/* name */}
        <h2 className="text-main font-bold text-3xl font-poppins">{`${userInfo.firstName} ${userInfo.lastName}`}</h2>

        {/* discription */}
        <p className=" text-[#979CA3] font-poppins text-xl">{userInfo.role}</p>
      </div>

      {/* rate */}
      <div className="pe-1">
        <Progress value={70} className="shadow-btnShadow" />
      </div>

      {/* about quezi */}
      <div className="flex justify-between gap-7">
        {/* number of quize passed */}
        <div className=" flex items-center justify-center gap-4 flex-col xl:flex-row">
          {/* logo */}
          <div className="lg:h-70 w-12 h-12 lg:w-[115px] rounded-[10px] shadow-2xl flex items-center justify-center ">
            <MdFlag className="text-main text-3xl lg:text-5xl" />
          </div>

          {/* numbeer */}
          <div className="w-full text-center space-y-1">
            <h3 className="font-poppins  font-bold text-lg  md:text-3xl text-textColor">27</h3>

            <p className="font-poppins text-sm md:text-md text-textColor">Quize Passed</p>
          </div>
        </div>

        {/* time info */}
        <div className=" flex  items-center justify-center gap-4 flex-col xl:flex-row">
          {/* logo */}
          <div className="lg:h-70 w-12 h-12 lg:w-[115px] rounded-[10px] shadow-2xl flex items-center justify-center ">
            <FaClock className="text-main text-2xl lg:text-4xl" />
          </div>

          {/* content */}
          <div className="w-full text-center space-y-1">
            {/* number */}
            <h3 className="font-poppins  font-bold text-lg  md:text-3xl text-textColor">27</h3>

            {/* time */}
            <p className="font-poppins text-sm md:text-md  text-textColor">Fastest Time</p>
          </div>
        </div>

        {/* correct answer */}
        <div className=" flex items-center justify-center gap-4 flex-col xl:flex-row">
          {/* logo */}
          <div className="lg:h-70 w-12 h-12 lg:w-[115px] rounded-[10px] shadow-2xl flex items-center justify-center ">
            <FaCircleCheck className="text-main text-2xl lg:text-4xl" />
          </div>

          {/* content */}
          <div className="w-full text-center space-y-1">
            {/* number */}
            <h3 className="font-poppins  font-bold text-lg  md:text-3xl text-textColor">27</h3>

            {/* correct */}
            <p className="font-poppins  text-sm md:text-md   text-textColor">Correct Answers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
