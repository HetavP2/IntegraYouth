import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function TutorApplication() {
  const [questionsInfo, setQuestionsInfo] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [roleApplyingFor, setRoleApplyingFor] = useState("Tutor");
  const uuidId = uuidv4();

  const [id, setId] = useState(uuidId);
  const [applicantId, setApplicantId] = useState(uuidId);
  const [answers, setAnswers] = useState([]);

  const handleSaveQResponse = () => {
    const data = {
      id,
      firstName,
      lastName,
      email,
      roleApplyingFor,
    };
    axios
      .post("http://localhost:5555/applications", data)
      .then(() => {
        console.log("posting to apps");
        window.location.reload(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });

    const data2 = {
      applicantId,
      answers,
    };
    if (answers.length > 0) {
      axios
        .post("http://localhost:5555/questionAnswers", data2)
        .then(() => {
          window.location.reload(false);
        })
        .catch((error) => {
          alert("Error2");
          console.log(error);
        });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5555/questions/tutor")
      .then((response) => {
        setQuestionsInfo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <form>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        {questionsInfo.map((question, index) => {
          return (
            <div key={question._id} className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {question.question}
              </label>
              <textarea
                key={question._id}
                id="message"
                rows="4"
                onChange={(e) => {
                  if (answers[index]) {
                    let newArray = [...answers];
                    newArray[index] = e.target.value;
                    setAnswers(newArray);
                  } else {
                    for (let i = 0; i < index + 1; i++) {
                      setAnswers((prev) => [...prev, e.target.value]);
                    }
                  }
                }}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Type your response..."
                required
              ></textarea>
            </div>
          );
        })}
      </form>
      <button
        onClick={handleSaveQResponse}
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
      >
        Submit
      </button>
    </div>
  );
}
