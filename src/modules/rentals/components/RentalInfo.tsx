'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";
import CategoryView from "./CategoryView";

import { FaBeer } from 'react-icons/fa';
import Map from "@/src/shared/components/common/Map";
import { iconDic } from "@/src/shared/components/navigation/Categories";

// import useCountries from "@/app/hooks/useCountries";
// import { SafeUser } from "@/app/types";

// import Avatar from "../Avatar";
// import ListingCategory from "./ListingCategory";

// const Map = dynamic(() => import('../Map'), { 
//   ssr: false 
// });

interface RentalInfoProps {
  // user: SafeUser,
  user: string,
  description: string;
  Strictness_number:number;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue: string;
  listing:any
}

const   RentalInfo: React.FC<any> = ({
  user,
  description,
  Strictness_number=2,
  category = true,
  locationValue,
  listing
}) => {
  // const { getByValue } = useCountries();

  // const coordinates = getByValue(locationValue)?.latlng

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          {/* <div>اجاره دهنده {user?.name}</div> */}
          <div>اجاره دهنده:{user}</div>
          {/* <Avatar src={user?.image} /> */}
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div> 
            میزان سخت گیری میزبان : {Strictness_number} 
          </div>
        </div>
      </div>
      <hr />
      {category && (
        <CategoryView
          icon={iconDic[category.icon_name]}
          label={category.name}
          description={'این دسته بندی عالی هست.'}
        // icon={category.icon} 
        // label={category?.label}
        // description={category?.description} 
        />
      )}
      <hr />
      <div className="
      text-lg font-light text-neutral-500">
        <h1>توضیحات:</h1>
        {description}
      </div>
      <hr />
      <div className="h-[50vh]">
        <Map
          center={[51, -0.09]}
          listings={[listing]}
        />
      </div>
    </div>
  );
}

export default RentalInfo;