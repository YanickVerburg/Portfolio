import Head from "next/head";
import Image from "next/image";
import Timeline from "../components/timeline";
import Logo from "../public/logo.png";


export default function Home() {
  return (
    <>
      <div className=" bg-neutral-800 h-screen">
        <div className="bg-neutral-900">
          <div className=" w-36  p-4">
            <Image src={Logo} />
          </div>
        </div>
        <div className="">
          <Timeline />
        </div>
      </div>
    </>
  );
}
