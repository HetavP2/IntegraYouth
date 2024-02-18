// TutorApplication.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function TutorApplication() {
  const [questionsInfo, setQuestionsInfo] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [roleApplyingFor, setRoleApplyingFor] = useState("Tutor");
  const uuidId = uuidv4();
  const [subjects, setSubjects] = useState([]);
  const [availability, setAvailability] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  });
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
      subjects,
      availability,
      comments,
    };
    axios
      .post(`${import.meta.env.VITE_BACKEND_ORIGIN}/applications`, data)
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
        .post(`${import.meta.env.VITE_BACKEND_ORIGIN}/questionAnswers`, data2)
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
      .get(`${import.meta.env.VITE_BACKEND_ORIGIN}/questions/tutor`)
      .then((response) => {
        setQuestionsInfo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDayChange = (e) => {
    e.preventDefault();
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [String(e.target.name)]: String(e.target.value),
    }));
  };

  return (
    <div className="bg-[#FEF4F4] text-[#242323]">
      <br />
      <br />
      <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-[#242323]"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-[#242323]"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#242323]"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <h3 className="mb-4 font-semibold text-[#242323]">Subjects</h3>
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="mathCheckbox"
                value="Math"
                className="text-[#ED1566] bg-white border border-[#D4D4D4] rounded focus:ring-[#ED1566] focus:border-[#ED1566] dark:border-gray-600"
                onChange={(e) => handleSubjectChange(e, "Math")}
              />
              <label htmlFor="mathCheckbox" className="ml-2 text-[#242323]">
                Math
              </label>
            </div>
          </li>
          {/* <li>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="ECheckbox"
                value="English"
                className="text-[#ED1566] bg-white border border-[#D4D4D4] rounded focus:ring-[#ED1566] focus:border-[#ED1566] dark:border-gray-600"
                onChange={(e) => handleSubjectChange(e, "English")}
              />
              <label htmlFor="mathCheckbox" className="ml-2 text-[#242323]">
                English
              </label>
            </div>
          </li> */}
        </ul>
        <br />

        <h3 className="mb-4 font-semibold text-[#242323]">Availability</h3>
        <p className="text-[#696969]">
          If you are not available on a day, leave it blank
        </p>
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <label
              htmlFor="mondayAvailability"
              className="block text-sm font-medium text-[#242323]"
            >
              Monday
            </label>
            <input
              type="text"
              id="mondayAvailability"
              name="Monday"
              className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
              placeholder="e.g. 6:00am-8:45am;9:00pm-9:30pm"
              onChange={handleDayChange}
            />
          </li>
          <li>
            <label
              htmlFor="TAvailability"
              className="block text-sm font-medium text-[#242323]"
            >
              Tuesday
            </label>
            <input
              type="text"
              id="TAvailability"
              name="Tuesday"
              className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
              placeholder="e.g. 6:00am-8:45am;9:00pm-9:30pm"
              onChange={handleDayChange}
            />
          </li>
          <li>
            <label
              htmlFor="WAvailability"
              className="block text-sm font-medium text-[#242323]"
            >
              Wednesday
            </label>
            <input
              type="text"
              id="WAvailability"
              name="Wednesday"
              className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
              placeholder="e.g. 6:00am-8:45am;9:00pm-9:30pm"
              onChange={handleDayChange}
            />
          </li>
          <li>
            <label
              htmlFor="TAvailability"
              className="block text-sm font-medium text-[#242323]"
            >
              Thursday
            </label>
            <input
              type="text"
              id="TAvailability"
              name="Thursday"
              className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
              placeholder="e.g. 6:00am-8:45am;9:00pm-9:30pm"
              onChange={handleDayChange}
            />
          </li>
          <li>
            <label
              htmlFor="FAvailability"
              className="block text-sm font-medium text-[#242323]"
            >
              Friday
            </label>
            <input
              type="text"
              id="FAvailability"
              name="Friday"
              className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
              placeholder="e.g. 6:00am-8:45am;9:00pm-9:30pm"
              onChange={handleDayChange}
            />
          </li>
          <li>
            <label
              htmlFor="SatAvailability"
              className="block text-sm font-medium text-[#242323]"
            >
              Saturday
            </label>
            <input
              type="text"
              id="SatAvailability"
              name="Saturday"
              className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
              placeholder="e.g. 6:00am-8:45am;9:00pm-9:30pm"
              onChange={handleDayChange}
            />
          </li>
          <li>
            <label
              htmlFor="SunAvailability"
              className="block text-sm font-medium text-[#242323]"
            >
              Sunday
            </label>
            <input
              type="text"
              id="SunAvailability"
              name="Sunday"
              className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
              placeholder="e.g. 6:00am-8:45am;9:00pm-9:30pm"
              onChange={handleDayChange}
            />
          </li>
        </ul>
        <br />
        {questionsInfo.map((question, index) => (
          <div key={question._id} className="mb-4">
            <label
              htmlFor={`question${index}`}
              className="block text-sm font-medium text-[#242323]"
            >
              {question.question}
            </label>
            <textarea
              id={`question${index}`}
              rows="4"
              className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
              placeholder="Type your response..."
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
              required
            ></textarea>
          </div>
        ))}

        <div className="mb-4">
          <label
            htmlFor="comments"
            className="block text-sm font-medium text-[#242323]"
          >
            Additional Comments
          </label>
          <textarea
            id="comments"
            rows="4"
            className="mt-1 p-2 w-full border border-[#D4D4D4] rounded-md"
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>
        <button
          onClick={handleSaveQResponse}
          className="bg-[#ED1566] text-white active:bg-[#FF4040] font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md focus:outline-none focus:ring focus:border-[#9A9AAB] transition-all duration-150"
          type="button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
