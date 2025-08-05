import Image from "next/image";
import Navbar from "./navbar/navbar";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">


        <div id="div_about" className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-lg">We are a team of passionate developers dedicated to creating
            innovative solutions that make a difference.</p>
        </div>

        <div id="div_services" className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="text-lg">We offer a range of services including web development, mobile app
            development, and consulting.</p>
        </div>

        <div id="div_team" className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <p className="text-lg">Meet our talented team of developers, designers, and strategists.</p>  
        </div>

        <div id="div_choose" className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Why Choose Us</h2>
          <p className="text-lg">We are committed to delivering high-quality solutions that exceed
            expectations.</p>
        </div>

        <div id="div_pricing" className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="text-lg">We offer competitive pricing tailored to your needs.</p> 
        </div>

        <div id="div_consultation" className="flex flex-col gap-4">
          <button type="button"  className="btn preset-filled-primary-500">
            Request a Consultation</button>
        </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
