import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";

export default function DisplayQuestions() {
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_ORIGIN}/questions`)
      .then((response) => {
        setAllQuestions(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5555/questions/${id}`);
      // Update the state to reflect the deletion
      setAllQuestions((questions) => questions.filter((q) => q._id !== id));
      console.log(`Question with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <section className="font-poppins bg-pink-300 dark:bg-gray-900 min-h-screen p-8">
      <div className="container mx-auto">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-pink-500 dark:text-white">
            Tutor Questions
          </h1>
          {allQuestions.map((question) => {
            if (question.forRole === "tutor" || question.forRole === "Tutor") {
              return (
                <div key={question._id} className="mb-4 flex items-center">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">
                      {question.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {question.lengthOfResponse}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(question._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              );
            }
            return null;
          })}
          <hr className="my-4 border-b border-pink-500 dark:border-gray-600" />
          <h1 className="text-2xl font-bold mb-4 text-pink-500 dark:text-white">
            Tutee Questions
          </h1>
          {allQuestions.map((question) => {
            if (question.forRole === "tutee" || question.forRole === "Tutee") {
              return (
                <div key={question._id} className="mb-4 flex items-center">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">
                      {question.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {question.lengthOfResponse}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(question._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
