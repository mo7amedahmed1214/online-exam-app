import { Skeleton } from "@/components/ui/skeleton";

export default function SubjectsSkeleton() {
  return (
    <div className="w-full px-4 py-8 shadow-comShadow rounded-20 flex gap-6 flex-col">
      <div className="flex gap-6 flex-wrap">
        {[1, 2, 3, 4,5,6].map((_, index) => (
          <div
            key={index}
            className="w-330 h-292 rounded-lg relative overflow-hidden"
          >
            <Skeleton className="w-full h-full rounded-lg" />
            <div className="absolute left-7 bottom-7 w-276 h-16 bg-slate-300 backdrop-blur-[27px] rounded-lg p-3 flex flex-col justify-center">
              <Skeleton className="h-4 w-1/2 rounded" />
              <Skeleton className="h-3 w-3/4 rounded mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
