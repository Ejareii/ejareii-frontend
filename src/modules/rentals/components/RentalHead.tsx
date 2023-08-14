'use client';

import Image from "next/image";

// import useCountries from "@/app/hooks/useCountries";
// import { SafeUser } from "@/app/types";

import Heading from "@/src/shared/components/common/Heading";
//import HeartButton from "../HeartButton";

// interface ListingHeadProps {
//   title: string;
//   locationValue: string;
//   imageSrc: string;
//   id: string;
//   currentUser?: SafeUser | null
// }

const RentalHead: React.FC<any> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser
}) => {
//   const { getByValue } = useCountries();

//   const location = getByValue(locationValue);

  return ( 
    <>
      <Heading
        title={'title'}
        //subtitle={`${location?.region}, ${location?.label}`}
        subtitle={`ddfg`}
      />
      <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={'/pics/card-top.jpg'}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          {/* <HeartButton 
            listingId={id}
            currentUser={currentUser}
          /> */}
        </div>
      </div>
    </>
   );
}
 
export default RentalHead;