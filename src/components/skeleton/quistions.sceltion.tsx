import { Skeleton } from "@/components/ui/skeleton";

export default function QuistionsSkeleton() {
  return (
    <section className="w-full rounded-20 space-y-10">
      {/* header skeleton */}
      <div className="w-full space-y-8">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-40 rounded" />
          <Skeleton className="h-6 w-24 rounded" />
        </div>

        {/* steps dots skeleton */}
        <ul className="flex flex-wrap gap-6">
          {[1,2,3,4,5,6,7,8,9].map((_, index) => (
            <Skeleton
              key={index}
              className="size-[10px] rounded-full"
            />
          ))}
        </ul>
      </div>

      {/* content skeleton */}
      <div className="space-y-6 w-full">
        {/* question text */}
        <Skeleton className="h-8 w-3/4 rounded" />

        {/* answers skeleton */}
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center space-x-2 rounded-10 bg-qusColor h-70 px-5">
              <Skeleton className="size-5 rounded-full" />
              <Skeleton className="h-5 w-full rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* footer buttons skeleton */}
      <div className="w-full flex mt-10 gap-12">
        <Skeleton className="h-12 w-32 rounded-10" />
        <Skeleton className="h-12 w-32 rounded-10" />
      </div>
    </section>
  );
}
