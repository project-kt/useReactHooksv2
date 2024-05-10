import Image from "next/image";
import Link from "next/link";
import reactImage from "../../../public/react.png";
import { siteConfig } from "@/config/site";

export default function logo() {
  return (
    <div className="flex flex-1 items-center gap-2">
      <div className="relative h-10 w-10">
        <Image src={reactImage} alt="react" className="origin-center" fill={true} sizes="48px" />
      </div>
      <Link href={"/"}>
        <h3 className="text-gradient text-2xl font-bold">{siteConfig.title}</h3>
      </Link>
    </div>
  );
}
