import QuizesOfSubject from "@/components/feature/quizes-of-subject";
import { JSON_HEADER } from "@/lib/constants/api.constant";
import { handelToken } from "@/lib/utiles/get-token";
import { Metadata } from "next";

// type Props
type PageProps = {
  params: { subjectId: string };
  searchParams: { search: string };
};

export default async function Page({ searchParams, params }: PageProps) {
  // varibles
  const { subjectId } = params;
  const respons = await fetch(`${process.env.API}/exams?subject=${subjectId}`, {
    cache: "no-store",
    method: "GET",
    headers: {
      ...JSON_HEADER,
      ...(await handelToken()),
    },
  });

  const payload: ApiResponse<PaginatedResponse<{ exams: Quiz[] }>> = await respons.json();

  // handle error
  if ("code" in payload) {
    throw new Error(payload.message);
  }

  // varible stor data to filter search input
  let data = payload.exams;

  // condtion to filter data by searchParams
  if (searchParams.search) {
    data = data.filter((quiz) =>
      quiz.title.toLowerCase().includes(searchParams.search.toLowerCase())
    );
  }
  return (
    <div className="space-y-10">
      <QuizesOfSubject quize={data} searchParams={searchParams} params={params} />
    </div>
  );
}

// metadata
export const metadata: Metadata = {
  title: "Exams Page",
  description: "this is the  page of exams",
};
