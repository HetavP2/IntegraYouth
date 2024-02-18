import { useState } from "react";
import axios from "axios";
import DisplayQuestions from "../components/DisplayQuestions";

export default function CreateApplication() {
  const [forRole, setForRole] = useState("");
  const [question, setQuestion] = useState("");
  const [lengthOfResponse, setLengthOfResponse] = useState(0);

  const handleSaveQ = () => {
    const data = {
      forRole,
      question,
      lengthOfResponse,
    };
    axios
      .post(`${import.meta.env.VITE_BACKEND_ORIGIN}/questions`, data)
      .then(() => {
        window.location.reload(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };

  return (
    <section className="font-poppins bg-pink-300 dark:bg-gray-900 min-h-screen p-8">
      <div className="container mx-auto bg-white dark:bg-gray-800 rounded-md shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-pink-500 dark:text-white">
          Application Questions
        </h1>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Question
              </label>
              <textarea
                onChange={(e) => setQuestion(e.target.value)}
                className="resize-none rounded-full py-2 px-4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                For Role
              </label>
              <input
                type="text"
                onChange={(e) => setForRole(e.target.value)}
                className="input-field rounded-full py-2 px-4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                Word Count
              </label>
              <input
                type="number"
                onChange={(e) => setLengthOfResponse(e.target.value)}
                className="input-field rounded-full py-2 px-4"
              />
            </div>
          </div>
          <hr className="my-6 border-b border-pink-500 dark:border-gray-600" />
          <button
            onClick={handleSaveQ}
            className="bg-pink-600 rounded-full py-2 px-8"
            type="button"
          >
            Save
          </button>
        </form>
      </div>
      <DisplayQuestions />
    </section>
  );
}
