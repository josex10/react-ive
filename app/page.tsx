import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Dashboard from "./components/Dashboard";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div 
        style={{
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(to bottom, #0A1128 0%, #0D1B3E 50%, #0A1128 100%)",
        }}
      >
        <Problem />
        <Solution />
        <Dashboard />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
