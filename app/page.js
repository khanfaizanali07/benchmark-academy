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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Programs />
      <LicensureJourney />
      <DataflowSupport />
      <CourseFees />
      <WhyChooseUs />
      <ImpactStats />
      <CTAContact />
      <Footer />
    </main>
  );
}
