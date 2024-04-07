import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [isOpen, setIsOpen] = useState({});
  const [activeTab, setActiveTab] = useState("Tutor");

  const toggleAccordion = (index) => {
    setIsOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = {
    Tutor: [
      {
        question: "How do I apply to become a peer tutor?",
        answer:
          "To apply to become a peer tutor, please fill out this form. To learn more about the process, please read the step-by-step summary on the home page. Thanks!",
      },
      {
        question: "Is there an age requirement to be a peer-tutor?",
        answer: "Peer-tutors must be at least 14 years of age.",
      },
      {
        question: "Will teaching material be provided?",
        answer:
          "Yes, teaching material will be provided, but you as a tutor will have to make your own judgement as to how your lesson should be planned out. If you ever need assistance, please don't hesitate to send us an email.",
      },
      {
        question:
          "What if I have a very busy schedule and can only tutor during certain times?",
        answer:
          "No worries, as long as you let us know which times work for you, we can accordingly match you with students who are available during the same hours.",
      },
      {
        question:
          "Can I receive high school community hours for my peer-tutoring?",
        answer:
          "Yes, you can receive volunteer hours for your peer-tutoring, as IntegraYouth is an official non-profit, registered with the Canadian government.",
      },
      {
        question: "Will peer-tutors be paid?",
        answer:
          "IntegraYouth is a non-profit organization, meaning everything is done out of good will.",
      },
      {
        question:
          "Is there a minimum or maximum amount of hours we need to teach per week?",
        answer:
          "You must teach a minimum of 30 minutes a week, although other than that, there is no other limit- all of your session times will be based off of your schedule, and teaching preferences that you provide us with.",
      },
      {
        question: "What is the time commitment in terms of months/years?",
        answer:
          "You must be able to commit at least two months of teaching, prior to leaving IntegraYouth.",
      },
    ],
    Tutee: [
      {
        question: "How do I attend my first meeting through ZOOM?",
        answer:
          "Prior to your first meeting, you and your peer-tutor should've confirmed and time and date for your session. Your peer-tutor will then email you a custom link and meeting ID. Once the time arrives to attend your meeting, all you have to do is click on the link and attend your meeting :) please don't be late! ",
      },
      {
        question: "Do I need to prepare anything prior to my first meeting?",
        answer:
          "To ensure a stress-free first meeting, please download ZOOM prior to your session, and double-check your email incase there are any last-minute changes. Other than that, all your materials should be virtual and will not need to be printed. Although if you prefer to print your work, please let your peer-tutor know, and they will email you printable worksheets.",
      },
      {
        question: "Do my parents have to be present during my tutor sessions?",
        answer:
          "Your parents may join you if they'd like to, but it is not a requirement for them to be present. ",
      },
      {
        question:
          "I'm unable to attend the schedule meeting with my peer-tutor, what should I do?",
        answer:
          "If you are unable to attend your scheduled meeting, please contact your peer-tutor as soon as possible. You and your tutor can also discuss make-up sessions if you'd like to. If your tutor is unreachable, please email integrayouth.fywy@gmail.com. ",
      },
      {
        question: "I'm uncomfortable with my tutor... can I change tutors?",
        answer:
          "We're sorry to hear that you feel this way.  Our top priority within this program is to ensure that you enjoy learning in this environment, and our goal is to make it a safe space for you. Please don't hesitate to email us at integrayouth.fywy@gmail.com if anything unacceptable has occurred, or if you would like to talk- everything will be kept confidential :)",
      },
      {
        question: "How many subjects can I sign up for?",
        answer: "You may sign up for as many different subjects as you wish.",
      },
      {
        question: "How many sessions can I have per week, and for how long?",
        answer:
          "IntegraYouth aims to make our services as accommodating and flexible as possible, so with that being said, you may have as many or little lessons as you wish per week, for however long you’d like. ",
      },
      {
        question: "How do you ensure the volunteer tutors are credible?",
        answer:
          "All of IntegraYouth’s tutors go through a 4-step process. They begin by sending us their most recent academic report card, followed by their resume. If they are knowledgeable in the area in which they wish to teach, they will then be directed through an interview. If it is clear that they demonstrate a genuine passion for teaching, will be committed to their responsibility, and follow by our same values, the prospective tutor will then receive an orientation at a separate date. Lastly, it is mandatory for all of our tutors to sign a contract form, regarding informational privacy between the student and tutor, and as well as their responsibilities. ",
      },
    ],
    "Exec Team": [
      {
        question:
          "How do I apply for the executive team? Do I need to be a tutor?",
        answer:
          "To join the IntegraYouth Executive Team, you do not have to be an IntegraYouth tutor. All you need to do is check out this page, and apply for the positions you are interested in. Thanks!",
      },
      {
        question: "Is there an age requirement to join the executive team?",
        answer:
          "Executive members must be at least 14 years of age. Exceptions may be made if the applicant is sufficiently knowledgeable and mature.",
      },
      {
        question:
          "Can I receive high school community hours for my work on the executive team?",
        answer:
          "Yes, you can receive volunteer hours as an executive member, as IntegraYouth is an official non-profit, registered with the Canadian government. ",
      },
      {
        question: "Will executive members be paid?",
        answer: "IntegraYouth is a non-profit organization, meaning everything is done out of good will. Executive members are also volunteers, and will therefore not be paid.",
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="bg-[#F4DEFC] p-12 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "Tutor"
                ? "bg-[#4CAF50] text-white"
                : "bg-[#F4DEFC] text-[#242323] hover:bg-[#4CAF50] hover:text-white"
            }`}
            onClick={() => setActiveTab("Tutor")}
          >
            Tutor
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "Tutee"
                ? "bg-[#4CAF50] text-white"
                : "bg-[#F4DEFC] text-[#242323] hover:bg-[#4CAF50] hover:text-white"
            } ml-4`}
            onClick={() => setActiveTab("Tutee")}
          >
            Tutee
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "Exec Team"
                ? "bg-[#4CAF50] text-white"
                : "bg-[#F4DEFC] text-[#242323] hover:bg-[#4CAF50] hover:text-white"
            } ml-4`}
            onClick={() => setActiveTab("Exec Team")}
          >
            Exec Team
          </button>
        </div>
        <div className="divide-y divide-[#242323]">
          {faqData[activeTab].map((faq, index) => (
            <div key={index} className="py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <p className="text-lg font-medium">{faq.question}</p>
                {isOpen[index] ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isOpen[index] && (
                <div className="mt-4">
                  <p className="text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
