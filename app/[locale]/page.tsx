import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Dashboard from "../components/Dashboard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="relative z-[1] bg-gradient-to-b from-[#0A1128] via-[#0D1B3E] to-[#0A1128]">
        <Problem />
        <Solution />
        <Dashboard />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
