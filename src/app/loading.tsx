import { FaSpinner } from "react-icons/fa";

export default function loading() {
    return (
        < >
            <div className='w-full h-[100vh] bg-slate-300 bg-opacity-35  flex items-center justify-center'>


                <FaSpinner className="text-5xl text-black animate-spin" />
            </div>


        </>
    )
}