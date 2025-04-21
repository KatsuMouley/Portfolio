export default function Home() {
  return (
    <div className="radialb1">
      <main className="">
        <div className="backgroundpattern min-h-screen w-full relative "></div>
        <div className="radialb2"></div>

        <div className="flex items-center justify-center h-full w-full absolute top-0 left-0 z-10">
          <div className="w-80 h-24 rounded-lg bg-blue-400 shadow-blue-950 shadow-2xl flex items-center justify-center hover:scale-125 transition-all cursor-pointer active:scale-100 cursor-default transition-all">
            <h1 className="text-4xl text-blue-50">Not yet</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
