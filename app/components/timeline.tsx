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
    date: 'Day 1: 9:00 AM - 9:15 AM',
    title: 'Welcome and Introduction',
    location: 'Workshop on UI/UX',
    description: 'Overview of workshop objectives and agenda. Welcome speech by IEEE club coordinator or guest speaker.',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'work',
    date: 'Day 1: 9:15 AM - 10:30 AM',
    title: 'Introduction to UI/UX Basics',
    location: 'Workshop on UI/UX',
    description: 'Understanding UI/UX fundamentals, differences, and importance. Role of UI/UX in design process and case studies.',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'work',
    date: 'Day 1: 11:00 AM - 12:30 PM',
    title: 'Hands-on Session: Basic UI/UX Design Tools',
    location: 'Workshop on UI/UX',
    description: 'Introduction to Figma and other tools. Creating wireframes or prototypes of a basic web/app interface.',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'work',
    date: 'Day 1: 1:30 PM - 2:30 PM',
    title: 'Advanced Docker and Kubernetes',
    location: 'Workshop on UI/UX',
    description: 'Deep dive into Docker and Kubernetes for containerized environments.',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'work',
    date: 'Day 1: 3:15 PM - 4:30 PM',
    title: 'Workshop on PCB Design & Concepts',
    location: 'Workshop on UI/UX',
    description: 'PCB design concepts for industrial applications.',
    icon: <School />,
    iconBgColor: '#FDDC4F',
    arrowColor: '#FDDC4F',
  },
  {
    type: 'work',
    date: 'Day 2: 9:15 AM - 10:15 AM',
    title: 'Problem Statement Presentation',
    location: 'Designathon',
    description: 'Problem statement presentation via PPT, collected through Google Forms.',
    icon: <School />,
    iconBgColor: '#CA0F24',
    arrowColor: '##CA0F24',
  },
  {
    type: 'work',
    date: 'Day 2: 10:45 AM - 11:30 AM',
    title: 'Mentorship Session Round 1',
    location: 'Designathon',
    description: 'Feedback session for Designathon participants.',
    icon: <School />,
    iconBgColor: '#CA0F24',
    arrowColor: '#CA0F24',
  },
  {
    type: 'work',
    date: 'Day 2: 11:30 AM - 12:30 PM',
    title: 'Prototyping Phase',
    location: 'Designathon',
    description: 'Teams work on building prototypes.',
    icon: <School />,
    iconBgColor: '#CA0F24',
    arrowColor: '#CA0F24',
  },
  {
    type: 'work',
    date: 'Day 2: 1:30 PM - 2:30 PM',
    title: 'Mentorship Session Round 2',
    location: 'Designathon',
    description: 'Second feedback session on prototypes.',
    icon: <School />,
    iconBgColor: '#CA0F24',
    arrowColor: '#CA0F24',
  },
  {
    type: 'work',
    date: 'Day 2: 2:45 PM - 4:00 PM',
    title: 'Final Presentations and Feedback',
    location: 'Designathon',
    description: 'Teams present their final prototypes and receive feedback.',
    icon: <Star />,
    iconBgColor: '#CA0F24',
    arrowColor: '#CA0F24',
  },
  {
    type: 'work',
    date: 'Day 2: 3:00 PM - 4:30 PM',
    title: 'Judging and Award Ceremony',
    location: 'Designathon',
    description: 'The best designs are awarded based on criteria set by the judges.',
    icon: <Star />,
    iconBgColor: '#CA0F24',
    arrowColor: '#CA0F24',
  }
];

// Timeline component
export function Timeline() {
  return (
    <>
      {/* Event Timeline title */}
      <div className="text-center text-7xl text-[#FDDC45] font-bold my-6">
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
              contentStyle={{
                backgroundColor: 'transparent',
                color: 'black',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                boxShadow: `0 4px 15px rgba(255, 223, 69, 0.5)`,
                border: `1px solid ${item.iconBgColor}`, // Use iconBgColor for border
                boxShadow: `0 4px 15px rgba(${hexToRGB(item.iconBgColor, 0.5)})`, // Dynamically set box shadow
              }}
              contentArrowStyle={{ borderRight: `8px solid ${item.iconBgColor}` }}  // Set arrow color to iconBgColor
              date={<span style={{ color: item.iconBgColor, fontSize: '16px', fontWeight: 'bold' }}>{item.date}</span>} // Date styled with iconBgColor
              iconStyle={{ backgroundColor: item.iconBgColor, color: 'white' }}  
              icon={item.icon}
            >
              {item.title && <h3 className="text-white font-bold">{item.title}</h3>}
              {item.location && <h4 className="text-white">{item.location}</h4>}
              {item.description && <p className="text-white">{item.description}</p>}
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
      <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#FDDC45] font-bold my-6">
       End
      </div>
    </>
  );
}

// Utility function to convert hex color to RGB for box shadow
function hexToRGB(hex, alpha) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return `${r}, ${g}, ${b}, ${alpha}`;
}
