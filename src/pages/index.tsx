import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <header
        className="flex flex-row justify-between z-50 h-14"
        data-theme="light"
      >
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

      <main>
        <div className=" container flex flex-col lg:mt-20 h-screen">
          <div className="flex flex-row items-center border-2">
            <div className="navbar bg-base-100">
              <a className="btn btn-ghost normal-case text-xl">Modes:</a>
              <ul className="menu flex flex-row space-x-3">
                <li className="menu-title cursor-pointer">
                  <span className="text-lg">Standard</span>
                </li>
                <li className="menu-title cursor-pointer">
                  <span className="text-lg"> Fluency</span>
                </li>
                <li className="menu-title cursor-pointer">
                  <span className="text-lg">Formal</span>
                </li>
                <li className="menu-title cursor-pointer">
                  <span className="text-lg">Simple</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-96 card bg-base-300 rounded-box border-none">
              <textarea
                data-theme="light"
                placeholder="Bio"
                className="textarea textarea-lg w-full h-full border-none focus:border-none"
              ></textarea>
            </div>
            <div className="divider m-0 p-1 lg:divider-horizontal lg:m-0 lg:p-1"></div>
            <div className="grid flex-grow h-96 card bg-base-300 rounded-box border-none">
              <textarea
                placeholder="Bio"
                readOnly={true}
                data-theme="light"
                className="textarea textarea-lg w-full h-full"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-2">
            <button className="btn btn-primary">parapharse</button>
          </div>
        </div>
      </main>
    </>
  );
}
