"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { error: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-3xl font-bold text-red-600">{error.message}</h2>

          <p className="text-gray-500 mt-2">We could not load this section. Try again?</p>

          <button
            onClick={() => reset()}
            className="mt-6 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
