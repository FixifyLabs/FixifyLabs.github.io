import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-2 p-4 bg-gray-200 text-black">
      <div className="flex items-center gap-4">
        <Image src="/static/images/logo.png" alt="fixify LABS" width={200} height={200} />

      </div>
      <ul className="flex gap-6">
        <li><a href="https://www.fixifylabs.com" className="hover:underline">Home</a></li>
        <li><a href="https://www.fixifylabs.com" className="hover:underline">About</a></li>
        <li><a href="https://www.fixifylabs.com" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}