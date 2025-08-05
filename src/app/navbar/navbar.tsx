import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-2 p-4 bg-gray-200 text-black">
      <div className="flex items-center gap-4">
        <Image src="/static/images/logo.png" alt="fixify LABS" width={200} height={200} />

      </div>
      <ul className="flex gap-6">
        <li><a href="#div_about" className="hover:underline">About</a></li>
        <li><a href="#div_services" className="hover:underline">Our Services</a></li>
        <li><a href="#div_team" className="hover:underline">Our Team</a></li>
        <li><a href="#div_choose" className="hover:underline">Why Choose Us</a></li>
        <li><a href="#div_pricing" className="hover:underline">Pricing</a></li>
        <li><a href="#div_consultation" className="btn bg-teal-50">Request a Consultation</a></li>
      </ul>
    </nav>
  );
}