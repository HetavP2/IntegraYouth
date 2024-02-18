import { useState, useEffect } from "react";
import axios from "axios";

export default function TutorApps() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_ORIGIN}/applications`)
      .then((response) => {
        // Filter applications to show only tutor applications
        const tutorApplications = response.data.data.filter(
          (application) =>
            application.roleApplyingFor === "Tutor" ||
            application.roleApplyingFor === "tutor"
        );
        setApplications(tutorApplications);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSelection = (id) => {
    // Your logic to update the isSelected property
  };

  return (
    <div className="font-poppins bg-pink-300 dark:bg-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-white dark:text-white">
        Tutor Applications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {applications.map((application) => (
          <div
            key={application._id}
            className={`font-lulo bg-white dark:bg-gray-800 p-6 rounded-md shadow-md ${
              application.isSelected ? "border-4 border-pink-500" : ""
            } transition-transform transform hover:scale-105`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {application.firstName} {application.lastName}
              </h2>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`select-${application._id}`}
                  checked={application.isSelected}
                  onChange={() => handleSelection(application._id)}
                  className="mr-2"
                />
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <strong>Email:</strong> {application.email}
            </p>
            {/* Add additional information as needed */}
            <a
              href={`tutors/${application._id}`}
              className="text-pink-500 hover:underline"
            >
              Link to Application
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
