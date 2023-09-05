'use client';

import Image from "next/image";

// import useCountries from "@/app/hooks/useCountries";
// import { SafeUser } from "@/app/types";

import Heading from "@/src/shared/components/common/Heading";
//import HeartButton from "../HeartButton";

interface RentalHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  // id: string;
  // currentUser?: SafeUser | null
}

const RentalHead: React.FC<RentalHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  // id,
  // currentUser
}) => {
  //   const { getByValue } = useCountries();

  //   const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        //subtitle={`${location?.region}, ${location?.label}`}
        subtitle={locationValue}
      />
      <div className="grid w-full grid-cols-4 grid-rows-4 grid-flow-dense h-[60vh]
          overflow-hidden 
          rounded-xl
          gap-1
          ">
        <div className="col-span-4 row-span-3 md:col-span-2 md:row-span-4 relative">
          <Image fill className="w-full h-full object-cover" src={imageSrc} alt="Image 1" />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-2 relative">
          <Image fill className="w-full h-full object-cover" src={'/pics/mock2.webp'} alt="Image 2" />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-2 relative">
          <Image fill className="w-full h-full object-cover" src={'/pics/mock3.webp'} alt="Image 2" />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-2 relative">
          <Image fill className="w-full h-full object-cover" src={'/pics/mock4.webp'} alt="Image 2" />
        </div>
        <div className="col-span-1 row-span-1 md:row-span-2 relative">
          <Image fill className="w-full h-full object-cover" src={'/pics/mock5.webp'} alt="Image 2" />
        </div>
      </div>
    </>
  );
}

export default RentalHead;