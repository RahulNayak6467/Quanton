import { RetroGrid } from "@/components/ui/retro-grid";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Features from "@/Components/Features";
import Testimonials from "@/Components/Testimonials";
import HowItWorks from "@/Components/HowItWorks";
import HowIt from "@/Components/HowIt";
import CTA from "@/Components/CTA";
import Footer from "@/Components/Footer";

function UnsignedUser({ props, data }) {
  return (
    <div className=" min-h-screen bg-bg-page p-6 overflow-x-hidden">
      <RetroGrid />
      <Navbar />
      <Hero props={props} data={data} />
      {/* <StockChart {...props} data={dataArr} />*/}
      {/* <FeaturesList />*/}
      <Features />
      <Testimonials />
      <HowItWorks />
      <HowIt />
      <CTA />
      <Footer />
    </div>
  );
}

export default UnsignedUser;
