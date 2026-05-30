import Hero from "./components/Hero";
import WhatIsPB from "./components/WhatIsPB";
import HowItWorks from "./components/HowItWorks";
import WhyItMatters from "./components/WhyItMatters";
import GetInvolved from "./components/GetInvolved";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIsPB />
      <HowItWorks />
      <WhyItMatters />
      <GetInvolved />
      <Footer />
    </main>
  );
}
