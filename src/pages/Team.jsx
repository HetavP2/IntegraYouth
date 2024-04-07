import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Srikrishna",
      role: "Logistics Team",
      bio: "Hello! My name is Srikrishna and I am a Grade 12 student. I am passionate towards being able to make a difference in my community. I love IntegraYouth's vision of providing free education to underprivileged students and am grateful to be a part of this amazing nonprofit!",
      image: "srikrishna.jpg", // Replace with actual image file name
    },
    // Add more team members here
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Meet The Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            {/* <img
            src={require(`../images/${member.image}`).default}
            alt={member.name}
            className="w-32 h-32 rounded-full mb-4"
          /> */}
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-lg text-gray-600 mb-2">{member.role}</p>
            <p className="text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
