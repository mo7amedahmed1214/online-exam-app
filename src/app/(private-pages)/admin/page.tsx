import Subjects from "@/components/feature/subjects";
import User from "@/components/feature/user";
import { Metadata } from "next";

// type props
type PageProps = {
  searchParams: { search: string };
};

export default async function Page({ searchParams }: PageProps) {
  return (
    <>
      <div className="w-full space-y-10">
        {/* user component*/}
        <User />

        {/* subjects component*/}
        <Subjects searchParams={searchParams} />
      </div>
    </>
  );
}

// metadata
export const metadata: Metadata = {
  title: "admin Page",
  description: "this is the page of admins",
};
