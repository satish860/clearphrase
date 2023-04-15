import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type SelectedItem = {
  tone: string;
  dialect: string;
};

type ApiResponse = {
  result: string;
};

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [sentence, setSentence] = useState("");
  const [apiResult, setApiResult] = useState("");
  const [loading, setLoading] = useState(false);

  const callApi = (item: SelectedItem) => {
    setLoading(true);
    fetch("/api/Parapharser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item, sentence }),
    })
      .then((response) => response.json())
      .then((data: ApiResponse) => setApiResult(data.result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleItemClick = (tone: string, dialect: string) => {
    setSelectedItem({ tone, dialect });
    callApi({ tone, dialect });
  };

  const handleApiCall = () => {
    if (!selectedItem) {
      return;
    }
    callApi(selectedItem);
  };

  const handleSentenceChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSentence(event.target.value);
  };

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
                <li
                  onClick={() => handleItemClick("Standard", "British")}
                  className={`menu-title cursor-pointer ${
                    selectedItem?.tone === "Standard"
                      ? "border-b-2 border-green-500"
                      : ""
                  }`}
                >
                  <span className="text-lg">Standard</span>
                </li>
                <li
                  onClick={() => handleItemClick("Fluency", "British")}
                  className={`menu-title cursor-pointer ${
                    selectedItem?.tone === "Fluency"
                      ? "border-b-2 border-green-500"
                      : ""
                  }`}
                >
                  <span className="text-lg"> Fluency</span>
                </li>
                <li
                  onClick={() => handleItemClick("Formal", "British")}
                  className={`menu-title cursor-pointer ${
                    selectedItem?.tone === "Formal"
                      ? "border-b-2 border-green-500"
                      : ""
                  }`}
                >
                  <span className="text-lg">Formal</span>
                </li>
                <li
                  onClick={() => handleItemClick("Simple", "British")}
                  className={`menu-title cursor-pointer ${
                    selectedItem?.tone === "Simple"
                      ? "border-b-2 border-green-500"
                      : ""
                  }`}
                >
                  <span className="text-lg">Simple</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-96 card bg-base-300 rounded-box border-none">
              <textarea
                value={sentence}
                onChange={handleSentenceChange}
                data-theme="light"
                placeholder="To Rewrite text,enter or paste your Text here."
                className="textarea textarea-lg w-full h-full border-none focus:border-none"
              ></textarea>
            </div>
            <div className="divider m-0 p-1 lg:divider-horizontal lg:m-0 lg:p-1"></div>
            <div className="grid flex-grow h-96 card bg-base-300 rounded-box border-none">
              <textarea
                value={apiResult}
                disabled={loading}
                readOnly={true}
                data-theme="light"
                className="textarea textarea-lg w-full h-full"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-2">
            <button
              onClick={handleApiCall}
              disabled={!selectedItem || loading}
              className="btn btn-primary"
            >
              {loading ? "Loading..." : "Parapharse"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
