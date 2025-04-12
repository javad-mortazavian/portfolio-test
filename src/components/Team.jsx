import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const teamMembers = [
  {
    name: "John Doe",
    position: "Team Lead",
    email: "john.doe@example.com",
    bio: "John is an experienced team leader with a passion for innovation and collaboration.",
    picture: "path/to/john-picture.jpg", // Replace with the actual path to the image
  },
  {
    name: "Jane Smith",
    position: "Software Engineer",
    email: "jane.smith@example.com",
    bio: "Jane specializes in building scalable web applications and loves solving complex problems.",
    picture: "path/to/jane-picture.jpg", // Replace with the actual path to the image
  },
  {
    name: "Alice Johnson",
    position: "UI/UX Designer",
    email: "alice.johnson@example.com",
    bio: "Alice is a creative designer focused on delivering user-friendly and visually appealing designs.",
    picture: "path/to/alice-picture.jpg", // Replace with the actual path to the image
  },
  {
    name: "Bob Brown",
    position: "Data Scientist",
    email: "bob.brown@example.com",
    bio: "Bob is a data enthusiast who enjoys turning raw data into actionable insights.",
    picture: "path/to/bob-picture.jpg", // Replace with the actual path to the image
  },
];

const TeamCard = ({ member }) => (
  <div className="bg-tertiary p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
    <img
      src={member.picture}
      alt={member.name}
      className="w-32 h-32 rounded-full object-cover mb-4"
    />
    <h3 className="text-white text-[20px] font-bold">{member.name}</h3>
    <p className="text-secondary text-[16px] font-semibold">{member.position}</p>
    <a
      href={`mailto:${member.email}`}
      className="text-blue-400 text-[14px] mt-2 underline"
    >
      {member.email}
    </a>
    <p className="text-white-100 text-[14px] mt-4">{member.bio}</p>
  </div>
);

const Team = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>Meet Our Team</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Our Team</h2>
    </motion.div>

    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {teamMembers.map((member, index) => (
        <TeamCard key={`team-member-${index}`} member={member} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Team, "team");