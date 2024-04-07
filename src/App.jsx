import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateApplication from "./pages/CreateApplication";
import ShowTutorApplicants from "./pages/ShowTutorApplicants";
import ShowApplication from "./pages/ShowApplication";
import TutorApplication from "./pages/TutorApplication";
import Admin from "./pages/Admin";
import ShowTuteeApplicants from "./pages/ShowTuteeApplicants";
import Faq from "./pages/FAQ";
import CodeOfConduct from "./pages/CodeOfConduct";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      {/* static pages */}
      <Route path="/" element={<Home />} />

      {/* addons are being able to change currently in demand and exec team */}
      {/* add collaspeable content for addons after. */}
      {/* FILTERING MUST */}
      <Route path="/admin" element={<Admin />} />

      {/* Add delete function, navbar, footer */}
      <Route path="/applications/create" element={<CreateApplication />} />

      {/* make subpages for apps work */}
      <Route path="/applications/tutors" element={<ShowTutorApplicants />} />
      <Route path="/applications/details/:id" element={<ShowApplication />} />

      {/* form for tutee apps */}
      <Route path="/applications/tutees" element={<ShowTuteeApplicants />} />

      <Route path="/applications/tutors/new" element={<TutorApplication />} />

      <Route path="/cod" element={<CodeOfConduct />} />
      <Route path="/team" element={<Team />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}

export default App;
