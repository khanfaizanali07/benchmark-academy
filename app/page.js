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
import { Train } from "lucide-react";
import TrainingPrograms from "@/components/TrainingPrograms";
import HealthcareLicensingServices from "@/components/HealthcareLicensingServices";
import ContactPopup from "@/components/ContactPopup";

export default function Home() {
  // const [size, setSize] = React.useState(null);
 
  // const handleOpen = (value) => setSize(value);
  // useEffect(() => {
  //   SetTimeout(() => {
  //     handleOpen("lg");
  //   }, 4000);
  // }, []);
  return (
    <main>
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
      {/* <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>Its a simple modal.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog> */}
    </main>
  );
}
