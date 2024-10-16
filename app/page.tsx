import Head from "next/head";
import Navbar  from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import { AboutEvent} from "./components/AboutEvent";
import { Speakers} from "./components/Speakers";
import { Faq } from "./components/Faq";
import Countdown from "./components/Countdown";
import { Closing } from "./components/closing";
import { Timeline } from "./components/timeline";
import  Footer  from "./components/footer/footer";


export default function Home() {
  return (
    <>
    
      <Head>
        <title>Concepto 2024</title>
        <meta name="description" content="Unlock Exclusive Access to Exciting Events and Workshops" />
        <meta name="keywords" content="Hackathon, Tech Challenge, Coding Competition, Innovation Contest, E-VOLVE, GenAi, Workshop, Hactrix-24, PROTOCOL 1.0, ByteBurst, Igniting Innovation, Digital Era Tech Event, Coding, Programming, Software Development, Tech Trends, Innovation Showcase, IEEE SRM Student Branch, Student Collaboration, Student Tech Enthusiasts, Student Innovation Network, Inclusivity in Tech, Diversity in Innovation, Women in Technology, Tech for All, Tech Networking, Collaboration Opportunities, Team Building, Industry Connections, Technical Skills, Learning and Growth, Skill Enhancement, Professional Development, Register for Hactrix-24, Tech Event Registration, ByteBurst Registration, Hackathon Signup, Mentorship Program, Tech Mentors, Guidance and Support, Learn from Experts, Project Awards, Recognition in Tech, Certificates for Innovation, Outstanding Projects" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Navbar />
      <Countdown />
      <AboutUs />
      <AboutEvent />
      <Speakers />
      <Timeline />
      <Faq />
      <Closing />
      <Footer />
    </>
  );
}
