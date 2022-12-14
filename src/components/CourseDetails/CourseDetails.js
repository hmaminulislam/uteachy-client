import React from 'react';
import { FaBell, FaBuromobelexperte, FaClock, FaStar, FaUsers } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";


const CourseDetails = () => {
  const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [12, 14],
  };
    const course = useLoaderData()
    const {
      id,
      name,
      img,
      price,
      duration,
      students,
      lectures,
      quizzes,
      rating,
      body,
      instructorImg,
    } = course;
    return (
      <div
        ref={ref}
        className="md:flex flex-row justify-between px-5 sm:px-10 md:px-20 py-14 dark:bg-black"
      >
        <div className="md:w-9/12 w-full mr-8">
          <h2 className="text-4xl font-semibold dark:text-white">{name}</h2>
          <img className="w-full mt-10" src={img} alt="" />
          <h3 className="text-3xl font-semibold mt-5 mb-3 dark:text-white">
            About this course
          </h3>
          <p className="text-justify dark:text-gray-400">{body}</p>
        </div>
        <div className="md:w-3/12 w-full md:mt-20 mt-14">
          <div>
            <ReactToPdf
              targetRef={ref}
              filename="UTeachy.pdf"
              options={options}
              x={0.5}
              y={0.5}
              scale={0.8}
            >
              {({ toPdf }) => (
                <button className="btn btn-primary" onClick={toPdf}>
                  Download PDF
                </button>
              )}
            </ReactToPdf>
          </div>
          <div>
            <img
              className="w-40 h-40 mx-auto rounded-full mt-16"
              src={instructorImg}
              alt=""
            />
            <h3 className="text-2xl text-center font-semibold mb-5 md:mt-5 mt-2 dark:text-white">
              Instructor
            </h3>
            <div className="flex items-center justify-between border-b-2 border-zinc-100 px-3 py-3 mt-5 dark:text-cyan-700">
              <div className="flex items-center">
                <FaClock className="text-cyan-700 mr-2"></FaClock>
                <h4 className="font-semibold"> Duration</h4>
              </div>
              <h4 className="font-semibold">{duration}</h4>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-100 px-3 py-3 dark:text-cyan-700">
              <div className="flex items-center">
                <FaBell className="text-cyan-700 mr-2"></FaBell>
                <h4 className="font-semibold"> Leactures</h4>
              </div>
              <h4 className="font-semibold">{lectures}</h4>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-100 px-3 py-3 dark:text-cyan-700">
              <div className="flex items-center">
                <FaBuromobelexperte className="text-cyan-700 mr-2"></FaBuromobelexperte>
                <h4 className="font-semibold"> Quizzes</h4>
              </div>
              <h4 className="font-semibold">{quizzes}</h4>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-100 px-3 py-3 dark:text-cyan-700">
              <div className="flex items-center">
                <FaUsers className="text-cyan-700 mr-2"></FaUsers>
                <h4 className="font-semibold"> Students</h4>
              </div>
              <h4 className="font-semibold">{students}</h4>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-100 px-3 py-3 dark:text-cyan-700">
              <div className="flex items-center">
                <FaStar className="text-cyan-700 mr-2"></FaStar>
                <h4 className="font-semibold"> Rating</h4>
              </div>
              <h4 className="font-semibold">{rating}</h4>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-xl text-center font-semibold mb-5 md:mt-5 text-sky-600 dark:text-white">
              Get premium access
            </h3>
            <h3 className="text-xl font-semibold text-primary text-center">
              Price: ${price}
            </h3>
            <Link to={`/checkout/${id}`}>
              <button className="btn btn-primary w-full mt-8">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CourseDetails;