import Image from "next/image";
import Link from "next/link";
import reactImage from "../../../public/react.png";

export default function logo() {
  return (
    <div className="flex flex-1 items-center gap-2">
      <div className="relative h-10 w-10">
        <Image src={reactImage} alt="react" className="origin-center" fill={true} sizes="48px" />
      </div>
      <Link href={"/"}>
        <h3 className="whitespace-nowrap text-2xl font-bold text-primary">useReactHooks</h3>
      </Link>
    </div>
  );
}
