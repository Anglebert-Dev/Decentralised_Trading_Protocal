import React from "react";
import { SiHiveBlockchain } from "react-icons/si";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-full bg-white text-black text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16 ">
        <div>
          <h1 className="py-4">What is Menya Math ?</h1>
          <p className="py-4 text-lg">
            MenyaMath is a free online tutoring math site. With a team of more
            than 12 national education teachers and growing every day, our goal
            is to help you progress in mathematics throughout the school year
            with resources written by teachers and completely free. You have, on
            the site, lessons and exercises fully corrected and detailed for
            students from ordinary level to advanced level. You will find all
            the courses and lessons of the official national education program
            in maths but also exercises similar to your textbooks.
          </p>

          {/* Card Container */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-16">
            {/* Card */}
            <AboutCard
              icon={<SiHiveBlockchain size={50} />}
              text=" Get over 2000 Mathematics courses which will help you to strive and succeed in national level and international level exams, We provide a lot of Mathematics based courses with great explanations and you will find all the courses and lessons of the official national education program in Mathematics"
              heading="Courses"
            />
            <AboutCard
              icon={<SiHiveBlockchain size={50} />}
              text="Many exercises are provided in this section. Exercises are  solvable and we provide answers inorder to guide you , Also we provide some past National exams papers which helps you to prepare your national exams."
              heading="Exercises"
            />
            <AboutCard
              icon={<SiHiveBlockchain size={50} />}
              text="After having courses and provided exercises which trains you and open your mind and help you gain skills to solve mathematical questions  there is a section of tests , where we provide verified and well prepared tests to check and see if you have been following our courses well and to prepare you for international mathematic exams."
              heading="Tests"
            />
            <AboutCard
              icon={<SiHiveBlockchain size={50} />}
              text="After having courses and provided exercises which trains you and open your mind and help you gain skills to solve mathematical questions  there is a section of tests , where we provide verified and well prepared tests to check and see if you have been following our courses well and to prepare you for international mathematic exams"
              heading="Simulation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
