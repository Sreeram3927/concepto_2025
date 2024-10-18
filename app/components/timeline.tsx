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
  },
  {
    type: 'star',
    icon: <Star />,
    iconBgColor: '#FDDC4F',
  }
];

// Timeline component
export function Timeline() {
  return (
    <>
      {/* Event Timeline title */}
      <div className="text-center text-7xl text-[#f3de21] font-bold my-6">
        Event Timeline
      </div>
      <VerticalTimeline className="relative p-5">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 z-0 transform -translate-x-1/2" /> {/* Vertical line */}
        {
          timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              visible={true}
              className={`vertical-timeline-element--${item.type}`}
              contentClassName="bg-transparent text-black p-6 rounded-lg shadow-lg shadow-yellow-50 border border-gray-200"
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
    </>
  );
}
