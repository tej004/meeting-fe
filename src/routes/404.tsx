import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/404')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="bg-white text-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-lg p-10 flex flex-col gap-6 items-center">
        <h1 className="text-7xl font-extrabold">404</h1>
        <p className="text-xl text-center">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-4 px-8 py-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
