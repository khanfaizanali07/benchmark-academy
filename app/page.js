import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Programs from "@/components/Programs";
import LicensureJourney from "@/components/LicensureJourney";
import DataflowSupport from "@/components/DataflowSupport";
import CourseFees from "@/components/CourseFees";
import WhyChooseUs from "@/components/WhyChooseUs";
import ImpactStats from "@/components/ImpactStats";
import CTAContact from "@/components/CTAContact";
import Footer from "@/components/Footer";
import TrainingPrograms from "@/components/TrainingPrograms";
import HealthcareLicensingServices from "@/components/HealthcareLicensingServices";
import ContactPopup from "@/components/ContactPopup";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  // const [size, setSize] = React.useState(null);
 
  // const handleOpen = (value) => setSize(value);
  // useEffect(() => {
  //   SetTimeout(() => {
  //     handleOpen("lg");
  //   }, 4000);
  // }, []);
  return (
    <main className="w-full relative">
      <ContactPopup/>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Programs />
      <LicensureJourney />
      <DataflowSupport />
      <TrainingPrograms/>
      <HealthcareLicensingServices />
      {/* <CourseFees /> */}
      <WhyChooseUs />
      {/* <ImpactStats /> */}
      <CTAContact />
      <Footer />
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/918830577926"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-400 text-paper shadow-lg transition-colors hover:bg-forest-500"
        >
          <FaWhatsapp className="h-7 w-7" />
        </a>
      </div>
    </main>
  );
}
