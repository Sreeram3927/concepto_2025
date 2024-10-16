import Image from "next/image";

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
