export default function Home() {
  return (
    <main className="flex items-center justify-center bg-slate-100 h-svh w-svw">
      <div className="flex flex-col bg-white p-4 rounded-xl shadow-xl">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col justify-between">
            <span className="text-lg text-gray-600 -mb-1">In transit</span>
            <span className="text-3xl font-semibold">coolblue</span>
          </div>
          <div className="size-10 bg-amber-500 rounded-full" />
        </div>
        <div className="my-3">
          <span className="bg-green-400 rounded-full px-4 py-1.5 mr-2 text-white font-semibold">
            TODAY
          </span>
          <span>09:30-10:30u</span>
        </div>
        <div className="relative">
          <div className="absolute w-full h-2 bg-gray-200 rounded-lg" />
          <div className="absolute w-2/3 h-2 bg-green-200 rounded-lg" />
          <div className="flex gap-4 mt-4">
            <span>Expected</span>
            <span>Sorting center</span>
            <span>In transit</span>
            <span className="text-gray-600">Delivered</span>
          </div>
        </div>
      </div>
    </main>
  );
}
