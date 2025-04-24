"use client";
import React, { useState } from "react";
import SubjectItem from "./_components/subject-item";
import SubjectsSkeleton from "@/components/skeleton/subjects.skeleton";
import useSubjects from "@/app/(private-pages)/(Dashbord)/_hooks/use-subjects";

// type props
type SubjectsProps = {
  searchParams: { search: string };
};
export default function Subjects({ searchParams }: SubjectsProps) {
  // varibles
  const detualtLimit = 6;
  const allLimit = 1000;

  // state
  const [limit, setLimit] = useState(detualtLimit);

  // mutaion
  const { payload, error, isPending } = useSubjects(limit);

  // functions
  const toggleLimit = () => {
    setLimit((prev) => (prev === detualtLimit ? allLimit : detualtLimit));
  };

  // store data to filter by search input
  let data = payload?.subjects;

  //  condtion to to filter value from searchParams
  if (searchParams.search) {
    data = data?.filter((quiz) =>
      quiz?.name.toLowerCase().includes(searchParams.search.toLowerCase())
    );
  }

  return (
    <div className=" w-full px-4 py-8 shadow-comShadow rounded-20 flex gap-6 flex-col">
      {/* header */}
      <div className="flex justify-between w-full">
        <p className="font-poppins text-main font-medium text-2xl">Subjects</p>

        {/* btn to show more */}
        <button onClick={toggleLimit} className="font-poppins text-main font-medium text-2xl">
          {limit == detualtLimit ? " Veiw All" : "Veiw less"}
        </button>
      </div>

      {/* quizes item */}
      <div className="flex  gap-6 flex-wrap">
        {/* codtion to loading */}
        {!data ? (
          <SubjectsSkeleton />
        ) : (
          data.map((sub) => <SubjectItem key={sub._id} subjectInfo={sub} />)
        )}
      </div>
    </div>
  );
}
