import Image from "next/image";
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
    <AboutEvent />
      <Speakers />
      <Faq />
      <Countdown />
      <Timeline />
      <Closing />
      <Footer />
    </>
  );
}
