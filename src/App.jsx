import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateApplication from './pages/CreateApplication';
import ShowTutorApplicants from "./pages/ShowTutorApplicants";
import ShowApplication from './pages/ShowApplication';
import TutorApplication from "./pages/TutorApplication";
import ApplicationInfo from "./pages/ApplicationInfo";
import ShowTuteeApplicants from "./pages/ShowTuteeApplicants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/applications" element={<ApplicationInfo />} />
      <Route path="/applications/create" element={<CreateApplication />} />
      <Route path="/applications/tutors" element={<ShowTutorApplicants />} />
      <Route path="/applications/tutees" element={<ShowTuteeApplicants />} />
      <Route path="/applications/details/:id" element={<ShowApplication />} />
      <Route path="/applications/tutors/new" element={<TutorApplication />} />
    </Routes>
  );
}

export default App
