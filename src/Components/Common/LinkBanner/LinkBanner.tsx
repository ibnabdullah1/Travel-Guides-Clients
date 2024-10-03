import Image from "next/image";
import Link from "next/link";
const LinkBanner = ({ subLocation, ActiveLocation }: any) => {
  return (
    <div className="h-[200px] relative  text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={"/assets/images/Link-banner.jpg"}
          alt="Link Banner Image"
          width={1200}
          height={200}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-primary/10 opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10 flex  items-center h-full">
        <div className="text-lg leading-tight ml-7 mb-4 flex items-center gap-1">
          <Link href={"/"}>Home</Link>
          {subLocation && (
            // eslint-disable-next-line react/prop-types
            <Link href={`/${subLocation.toLowerCase()}`}>/{subLocation}</Link>
          )}
          {ActiveLocation && (
            <span className="text-primary cursor-pointer">
              /{ActiveLocation}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkBanner;
