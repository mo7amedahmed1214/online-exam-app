import Subjects from "@/components/feature/subjects";
import User from "@/components/feature/user";

// type props
type HomeProps = {
  searchParams: { search: string };
};

export default async function Home({ searchParams }: HomeProps) {
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
