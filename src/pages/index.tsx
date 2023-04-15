import {Bars3CenterLeftIcon} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <header className="flex flex-row justify-between z-50 h-14 bg-white">
      <div className="flex items-center">
        <Bars3CenterLeftIcon className="h-6 w-6 cursor-pointer" />
        <h1 className="text-xl font-bold p-4">Quillbot</h1>
      </div>
      <div className="flex items-center">
        <div className="avatar pr-4">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </header>
  );
}
