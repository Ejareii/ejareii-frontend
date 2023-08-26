'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Container from '../common/Container';
import CategoryBox from '../common/CategoryBox';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
    GiBarn, 
    GiBoatFishing, 
    GiCactus, 
    GiCastle, 
    GiCaveEntrance, 
    GiForestCamp, 
    GiIsland,
    GiWindmill
  } from 'react-icons/gi';
  import {AiFillCar,AiOutlineMobile} from "react-icons/ai"
  import {FaMotorcycle} from "react-icons/fa"
  import { MdOutlineSportsKabaddi,MdMusicNote } from 'react-icons/md';
  import { GiDutchBike,GiLaptop,GiLargeDress,GiBallerinaShoes } from 'react-icons/gi';
  import { GrGamepad } from 'react-icons/gr';
  import { PiCamera } from 'react-icons/pi';
  import { BsTools } from 'react-icons/bs';



 




export const categories = [
    {
      label: 'ماشین',
      icon: AiFillCar,
      description: 'This property is close to the beach!',
    },
    {
      label: 'موتورسیکلت',
      icon: FaMotorcycle,
      description: 'This property is has windmills!',
    },
    {
      label: 'دوچرخه',
      icon: GiDutchBike,
      description: 'This property is modern!'
    },
    {
      label: 'موبایل و تبلت ',
      icon: AiOutlineMobile,
      description: 'This property is in the countryside!'
    },
    {
      label: 'رایانه',
      icon: GiLaptop,
      description: 'This is property has a beautiful pool!'
    },
    {
      label: 'کنسول بازی',
      icon: GrGamepad,
      description: 'This property is on an island!'
    },
    {
      label: 'دوربین',
      icon: PiCamera,
      description: 'This property is near a lake!'
    },
    {
      label: 'ابزارآلات',
      icon: BsTools,
      description: 'This property has skiing activies!'
    },
    {
      label: 'لوازم ورزشی',
      icon: MdOutlineSportsKabaddi,
      description: 'This property is an ancient castle!'
    },
    {
      label: 'آلات موسیقی',
      icon: MdMusicNote,
      description: 'This property is in a spooky cave!'
    },
    {
      label: 'لباس',
      icon: GiLargeDress,
      description: 'This property offers camping activities!'
    },
    {
      label: 'کتونی و کفش',
      icon: GiBallerinaShoes,
      description: 'This property is in arctic environment!'
    },
    // {
    //   label: 'Desert',
    //   icon: GiCactus,
    //   description: 'This property is in the desert!'
    // },
    // {
    //   label: 'Barns',
    //   icon: GiBarn,
    //   description: 'This property is in a barn!'
    // },
    // {
    //   label: 'Lux',
    //   icon: IoDiamond,
    //   description: 'This property is brand new and luxurious!'
    // }
  ]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/' || pathname === '/search';
  
    if (!isMainPage) {
      return null;
    }
  
    return (
      <Container>
        <div
          className="
            pt-4
            flex 
            flex-row 
            items-center 
            justify-between
            overflow-x-auto
          "
        >
          {categories.map((item) => (
            <CategoryBox 
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            />
          ))}
        </div>
      </Container>
    );
  }
   
  export default Categories;