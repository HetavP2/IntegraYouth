import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateApplication from './pages/CreateApplication';
import ShowAllApplications from './pages/ShowAllApplications';
import ShowApplication from './pages/ShowApplication';
import DeleteApplication from './pages/DeleteApplication';
import TutorApplication from "./pages/TutorApplication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/applications/create" element={<CreateApplication />} />
      <Route path="/applications" element={<ShowAllApplications />} />
      <Route path="/applications/details/:id" element={<ShowApplication />} />
      <Route path="/applications/tutors/new" element={<TutorApplication />} />
      <Route path="/applications/tutors/:id" element={<ShowApplication />} />
      <Route path="/applications/delete/:id" element={<DeleteApplication />} />
    </Routes>
  );
}

export default App
