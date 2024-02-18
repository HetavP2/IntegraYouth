import axios from "axios";
import React, { useEffect, useState } from "react";
import TuteeApps from "../components/TuteeApps";

export default function ShowTuteeApplicants() {
  let [applications, setApplications] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_ORIGIN}/applications`)
      .then((response) => {
        applications = response.data.data;
        setApplications(applications);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <TuteeApps />;
}
