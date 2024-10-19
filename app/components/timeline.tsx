'use client';
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Star } from "@mui/icons-material";

// Data for all timeline elements
const timelineData = [
  {
    type: 'work',
    date: '2011 - present',
    title: 'Creative Director',
    location: 'Miami, FL',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'work',
    date: '2010 - 2011',
    title: 'Art Director',
    location: 'San Francisco, CA',
    description: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'work',
    date: '2008 - 2010',
    title: 'Web Designer',
    location: 'Los Angeles, CA',
    description: 'User Experience, Visual Design',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'work',
    date: '2006 - 2008',
    title: 'Web Designer',
    location: 'San Francisco, CA',
    description: 'User Experience, Visual Design',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'education',
    date: 'April 2013',
    title: 'Content Marketing for Web, Mobile and Social Media',
    location: 'Online Course',
    description: 'Strategy, Social Media',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'education',
    date: 'November 2012',
    title: 'Agile Development Scrum Master',
    location: 'Certification',
    description: 'Creative Direction, User Experience, Visual Design',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'education',
    date: '2002 - 2006',
    title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
    location: 'Bachelor Degree',
    description: 'Creative Direction, Visual Design',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  }
];

// Timeline component
export function Timeline() {
  return (
    <section className="max-w-screen-2xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10">
      {/* Event Timeline title */}
      <h2 className="mb-4 md:mb-6 font-sans text-center font-bold text-white text-2xl sm:text-4xl">
        Event Timeline
      </h2>
      <h4 className="max-w-screen-md mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
        Welcome to our 2-Day Designathon, a thrilling event where creativity, learning, and problem-solving come together.
        The first day is dedicated to mastering UI/UX principles, while the second day will be an action-packed hackathon,
        allowing participants to put their new skills to the test!
      </h4>
      <div className="text-center text-4xl text-[#FDDC45] font-bold mt-6">
       Start
      </div>
      <VerticalTimeline className="relative p-5">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 z-0 transform -translate-x-1/2" /> {/* Vertical line */}
        {
          timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              visible={true}
              className={`vertical-timeline-element--${item.type}`}
              contentStyle={{
                backgroundColor: 'transparent',
                color: 'black',
                padding: '1.5rem', // Equivalent to p-6
                borderRadius: '0.5rem', // Equivalent to rounded-lg
                boxShadow: '0 4px 15px rgba(255, 223, 69, 0.5)', // Shadow equivalent to shadow-lg shadow-yellow-50
                border: '1px solid #e5e7eb', // Equivalent to border border-gray-200
              }}
              contentArrowStyle={{ borderRight: `8px solid ${item.arrowColor}` }}
              date={item.date}
              iconStyle={{ backgroundColor: item.iconBgColor, color: 'white' }}
              icon={item.icon}
            >
              {item.title && <h3 className="text-black font-bold">{item.title}</h3>}
              {item.location && <h4 className="text-gray-700">{item.location}</h4>}
              {item.description && <p>{item.description}</p>}
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
      <div className="text-center text-4xl text-[#FDDC45] font-bold mb-6">
        End
      </div>
    </section>
  );
}
