import React, { useState } from "react";
export { reportWebVitals } from "next-axiom";

type SelectedItem = {
  tone: string;
  dialect: string;
};

type ApiResponse = {
  result: string;
};

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>({
    tone: "Standard",
    dialect: "British",
  });
  const [sentence, setSentence] = useState("");
  const [apiResult, setApiResult] = useState("");
  const [loading, setLoading] = useState(false);

  const callApi = (item: SelectedItem) => {
    if (!sentence) return;
    setLoading(true);
    fetch("/api/Parapharser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tone: item.tone, sentence }),
    })
      .then((response) => response.json())
      .then((data: ApiResponse) => setApiResult(data.result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const clearAll = () => {
    setSentence("");
    setApiResult("");
  }

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
          <h1 className="text-xl font-bold p-4">
            <span className="text-2xl">C</span>
            <span className="text-sm">learphrase</span>
            <sup className="text-xs font-medium text-secondary-600 transform scale-75">
              Beta
            </sup>
          </h1>
        </div>
      </header>

      <main>
        <div className=" container flex flex-col lg:mt-20 h-screen">
          <div className="flex flex-row items-center border-2 border-solid border-b-gray-600">
            <div className="flex-none hidden sm:block">

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
                    <span
                      className={`text-lg ${
                        selectedItem?.tone === "Standard"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      Standard
                    </span>
                  </li>

                  <li
                    onClick={() => handleItemClick("Fluency", "British")}
                    className={`menu-title cursor-pointer ${
                      selectedItem?.tone === "Fluency"
                        ? "border-b-2 border-green-500"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-lg ${
                        selectedItem?.tone === "Fluency" ? "text-green-500" : ""
                      }`}
                    >
                      {" "}
                      Fluency
                    </span>
                  </li>
                  <li
                    onClick={() => handleItemClick("Formal", "British")}
                    className={`menu-title cursor-pointer ${
                      selectedItem?.tone === "Formal"
                        ? "border-b-2 border-green-500"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-lg ${
                        selectedItem?.tone === "Formal" ? "text-green-500" : ""
                      }`}
                    >
                      Formal
                    </span>
                  </li>
                  <li
                    onClick={() => handleItemClick("Simple", "British")}
                    className={`menu-title cursor-pointer ${
                      selectedItem?.tone === "Simple"
                        ? "border-b-2 border-green-500"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-lg ${
                        selectedItem?.tone === "Simple" ? "text-green-500" : ""
                      }`}
                    >
                      Simple
                    </span>
                  </li>
                  <li
                    onClick={() => handleItemClick("Creative", "British")}
                    className={`menu-title cursor-pointer ${
                      selectedItem?.tone === "Creative"
                        ? "border-b-2 border-green-500"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-lg ${
                        selectedItem?.tone === "Creative"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      Creative
                    </span>
                  </li>
                  <li
                    onClick={() => handleItemClick("Summarize", "British")}
                    className={`menu-title cursor-pointer ${
                      selectedItem?.tone === "Summarize"
                        ? "border-b-2 border-green-500"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-lg ${
                        selectedItem?.tone === "Summarize"
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      Summarize
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justufy-right w-full">
              <button
              className="btn btn-bg m-1"
              onClick={clearAll}
              >
                Clear All
              </button>
            </div>

            <div className="dropdown dropdown-bottom flex-none block sm:hidden">
              <label tabIndex={0} className="btn m-1">
                Modes
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li
                  onClick={() => handleItemClick("Standard", "British")}
                  className={`menu-title cursor-pointer ${
                    selectedItem?.tone === "Standard"
                      ? "border-b-2 border-green-500"
                      : ""
                  }`}
                >
                  <span
                    className={`text-lg ${
                      selectedItem?.tone === "Standard" ? "text-green-500" : ""
                    }`}
                  >
                    Standard
                  </span>
                </li>

                <li
                  onClick={() => handleItemClick("Fluency", "British")}
                  className={`menu-title cursor-pointer ${
                    selectedItem?.tone === "Fluency"
                      ? "border-b-2 border-green-500"
                      : ""
                  }`}
                >
                  <span
                    className={`text-lg ${
                      selectedItem?.tone === "Fluency" ? "text-green-500" : ""
                    }`}
                  >
                    {" "}
                    Fluency
                  </span>
                </li>
                <li
                  onClick={() => handleItemClick("Formal", "British")}
                  className={`menu-title cursor-pointer ${
                    selectedItem?.tone === "Formal"
                      ? "border-b-2 border-green-500"
                      : ""
                  }`}
                >
                  <span
                    className={`text-lg ${
                      selectedItem?.tone === "Formal" ? "text-green-500" : ""
                    }`}
                  >
                    Formal
                  </span>
                </li>
                <li
                  onClick={() => handleItemClick("Simple", "British")}
                  className={`menu-title cursor-pointer ${
                    selectedItem?.tone === "Simple"
                      ? "border-b-2 border-green-500"
                      : ""
                  }`}
                >
                  <span
                    className={`text-lg ${
                      selectedItem?.tone === "Simple" ? "text-green-500" : ""
                    }`}
                  >
                    Simple
                  </span>
                </li>
                <li
                  onClick={() => handleItemClick("Creative", "British")}
                  className={`menu-title cursor-pointer ${
                    selectedItem?.tone === "Creative"
                      ? "border-b-2 border-green-500"
                      : ""
                  }`}
                >
                  <span
                    className={`text-lg ${
                      selectedItem?.tone === "Creative" ? "text-green-500" : ""
                    }`}
                  >
                    Creative
                  </span>
                </li>
                <li
                  onClick={() => handleItemClick("Summarize", "British")}
                  className={`menu-title cursor-pointer ${
                    selectedItem?.tone === "Summarize"
                      ? "border-b-2 border-green-500"
                      : ""
                  }`}
                >
                  <span
                    className={`text-lg ${
                      selectedItem?.tone === "Summarize" ? "text-green-500" : ""
                    }`}
                  >
                    Summarize
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex-none block sm:hidden ml-auto">
              <div className="flex flex-row justify-center items-center mt-2 mb-2">
                <button
                  onClick={handleApiCall}
                  disabled={!selectedItem || loading}
                  className="btn btn-primary">
                  {loading ? "Loading..." : "Paraphrase"}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full lg:flex-row">

            <div className="grid flex-grow h-96 card bg-base-300 rounded-box border-none">
              <textarea
                value={sentence}
                maxLength={2000}
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

          <div className="flex-none hidden sm:block">
            <div className="flex flex-row justify-center items-center mt-2">
              <button
                onClick={handleApiCall}
                disabled={!selectedItem || loading}
                className="btn btn-primary"
              >
                {loading ? "Loading..." : "Paraphrase"}
              </button>
            </div>
          </div>

        </div>

      </main>
    </>
  );
}
