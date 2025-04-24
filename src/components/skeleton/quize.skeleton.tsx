import { Skeleton } from "@/components/ui/skeleton";

export default function QuizeSkeleton() {
  return (
    <div className="w-full sm:h-103 shadow-comShadow rounded-10 py-4 px-6 bg-bgComp flex flex-col sm:flex-row gap-4">
      <div className="relative w-full h-64 sm:w-70 sm:h-70">
        <Skeleton className="w-full h-full rounded-8" />
      </div>

      <div className="md:h-70 w-full flex justify-between items-center">
        <div className="space-y-2 w-2/3">
          <Skeleton className="h-5 sm:h-4 w-3/4 rounded" />
          <Skeleton className="h-4 sm:h-3 w-1/2 rounded" />
        </div>

        <div className="flex flex-col gap-2 items-end">
          <Skeleton className="h-4 sm:h-3 w-16 rounded" />
          <Skeleton className="h-10 sm:h-8 w-24 sm:w-20 rounded" />
        </div>
      </div>
    </div>
  );
}
