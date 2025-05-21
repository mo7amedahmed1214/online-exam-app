"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Routes } from "@/lib/constants/app.constant";

export default function NotFound() {
  // navigate
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="text-xl mt-4 text-gray-600">Oops! Page not found.</p>
      <p className="mt-2 text-gray-500">The page you are looking for doesnt exist or has been moved.</p>

      <Button className="mt-6" onClick={() => router.push(Routes.ROOT)}>
        Go back home
      </Button>
    </main>
  );
}
