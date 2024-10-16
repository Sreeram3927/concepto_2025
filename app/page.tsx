import Image from "next/image";
import { AboutEvent} from "./components/AboutEvent";
import { Speakers} from "./components/Speakers";
import { Faq } from "./components/Faq";
import Countdown from "./components/Countdown";

export default function Home() {
  return (
<div className="bg-black">
  <Countdown/>
<AboutEvent/>
<Speakers/>
<Faq/>
</div>
  );
}
