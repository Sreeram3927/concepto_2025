import Head from "next/head";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import { AboutEvent } from "./components/AboutEvent";
import { Faq } from "./components/Faq";
import { Closing } from "./components/closing";
import { Timeline } from "./components/ui/timeline";
import Footer from "./components/footer/footer";
import { Hero } from "./components/Hero";
import { TimelineDemo } from "./components/timeline";
import { Workshop } from "./components/Workshop";

export default function Home() {
  return (
    <>
      <Head>
        <title>Concepto 2025 - Unleash Your Creativity in Tech & Design</title>
        <meta
          name="description"
          content="Join Concepto 2025 for exciting hackathons, design challenges, and workshops. Elevate your tech skills, collaborate with innovators, and showcase your creativity. Open to all tech enthusiasts!"
        />
        <meta
          name="keywords"
          content="Concepto 2025, Hackathon, Designathon, UI/UX Workshop, Coding Challenge, Innovation, GenAI, IEEE SRM Student Branch, Tech Collaboration, Tech Enthusiasts, Software Development, ByteBurst, Hactrix-24, PROTOCOL 1.0, Digital Era, Student Innovation, Inclusivity in Tech, Tech Mentorship, Skill Development, Project Awards, Team Building, Tech Networking, Professional Growth, Coding Competition, Registration"
        />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Navbar />
      <Hero />
      <AboutUs />
      <Workshop/>
      <TimelineDemo /> 
      <Faq />
      <Closing />
      <Footer />
    </>
  );
}
