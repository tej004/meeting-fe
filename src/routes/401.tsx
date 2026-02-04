import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/401')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white">
      <div className="bg-white text-red-700 border border-red-300 rounded-2xl shadow-2xl w-full max-w-lg p-10 flex flex-col gap-6 items-center">
        <h1 className="text-7xl font-extrabold">401</h1>
        <p className="text-xl text-center">
          Oops! You are not authorized to access this page.
        </p>
        <a
          href="/"
          className="mt-4 px-8 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
