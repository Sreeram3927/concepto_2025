import Image from "next/image";
import { StickyScrollRevealDemo } from "./components/test";
import { Closing } from "./components/closing";
import { Timeline } from "./components/timeline";
import  Footer  from "./components/footer/footer";


export default function Home() {
  return (
    <>
      <StickyScrollRevealDemo />
      <Timeline />
      <Closing />
      <Footer />
    </>
  );
}
