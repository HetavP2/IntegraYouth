import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import testimonialData from "../components/testimonialData";
import Navbar from "../components/Navbar";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialData.length) % testimonialData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = {
    tutors: 50,
    tutees: 100,
    hoursTaught: 500,
  };

  return (
    <div className="relative bg-[#F4DEFC] text-[#242323]">
      <Navbar />
      <header className="bg-[#F399C1] text-white py-8 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">IntegraYouth</h1>
          <p className="text-2xl mt-2">Empowering Education for Youth</p>
        </div>
      </header>

      <section className="bg-white py-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col items-center space-y-4 w-1/2">
            <div className="bg-[#F399C1] text-white p-4 rounded-lg">
              <p className="text-3xl font-bold">{stats.tutors}</p>
              <p className="text-lg">Tutors</p>
            </div>
            <div className="bg-[#F399C1] text-white p-4 rounded-lg">
              <p className="text-3xl font-bold">{stats.tutees}</p>
              <p className="text-lg">Tutees</p>
            </div>
            <div className="bg-[#F399C1] text-white p-4 rounded-lg">
              <p className="text-3xl font-bold">{stats.hoursTaught}</p>
              <p className="text-lg">Hours Taught</p>
            </div>
          </div>

          <div className="flex-grow mx-12">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              Empowering youth through education by connecting passionate tutors
              with eager learners. Together, we strive to make a positive impact
              on the educational journey of every student.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-12">
        <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
        {/* Add your events here */}
      </section>

      <section className="container mx-auto mt-12">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute top-1/2 transform -translate-y-1/2">
            <button
              className="text-3xl text-[#F399C1] focus:outline-none"
              onClick={prevTestimonial}
            >
              <FaChevronLeft />
            </button>
          </div>

          <div className="relative w-full h-64 bg-[#F399C1] rounded-lg p-8 shadow-md">
            <p className="text-white text-lg font-medium">
              {testimonialData[currentTestimonial].quote}
            </p>
            <p className="text-white text-sm mt-4">
              - {testimonialData[currentTestimonial].author}
            </p>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              className="text-3xl text-[#F399C1] focus:outline-none"
              onClick={nextTestimonial}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
