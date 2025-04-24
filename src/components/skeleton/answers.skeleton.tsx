import { Skeleton } from "@/components/ui/skeleton";

export default function AnswersSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3,4].map((_, index) => (
        <div
          key={index}
          className="space-y-4 w-full bg-inputBg py-4 px-2 shadow-[0px_0px_8px_0px_rgba(42,41,41,0.25)] rounded-10"
        >
          {/* سؤال */}
          <Skeleton className="h-6 w-3/4 rounded" />

          {/* اختيارات */}
          <div className="space-y-3">
            {[1, 2, 3, 4].map((_, ansIndex) => (
              <div
                key={ansIndex}
                className="flex items-center space-x-2 rounded-10 py-4 h-70 px-5 bg-qusColor"
              >
                <Skeleton className="size-5 rounded-full" />
                <Skeleton className="h-5 w-full rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
