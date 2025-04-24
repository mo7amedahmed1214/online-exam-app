import { useQuery } from "@tanstack/react-query";

export default function useSubjects(limit: number) {
  // mutaion
  const {
    isPending,
    error,
    data: payload,
  } = useQuery({
    queryKey: ["subiect", limit],
    queryFn: async () => {
      const respons = await fetch(`${process.env.NEXT_PUBLIC_API}/subjects?limit=${limit}`);

      const payload: ApiResponse<PaginatedResponse<{ subjects: Subject[] }>> = await respons.json();

      // handle error
      if ("code" in payload) {
        throw new Error(payload.message);
      }
      return payload;
    },
  });

  return { payload, error, isPending };
}
