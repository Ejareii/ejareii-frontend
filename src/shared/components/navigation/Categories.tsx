'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Container from '../common/Container';
import CategoryBox from '../common/CategoryBox';
import {AiFillCar,AiOutlineMobile} from "react-icons/ai"
import {FaMotorcycle} from "react-icons/fa"
import { MdOutlineSportsKabaddi,MdMusicNote } from 'react-icons/md';
import { GiDutchBike,GiLaptop,GiLargeDress,GiBallerinaShoes } from 'react-icons/gi';
import { GrGamepad } from 'react-icons/gr';
import { PiCamera } from 'react-icons/pi';
import { BsTools } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IconType } from 'react-icons';
import useCategoriesStore from '@/src/hooks/useCategoriesStore';

interface CategoryInfo {
  category_id: number;
  name: string;
  query_name: string;
  icon_name: string;
  parent_category_id: number | null;
  created_at: string;
  updated_at: string;
}

interface IconDic {
  [key: string]: IconType;
}

 


export const iconDic:IconDic={
  "AiFillCar":AiFillCar,
  "FaMotorcycle":FaMotorcycle,
    "GiDutchBike":GiDutchBike,
    "AiOutlineMobile":AiOutlineMobile,
    "GiLaptop":GiLaptop,
    "GrGamepad":GrGamepad,
    "PiCamera":PiCamera,
    "BsTools":BsTools,
    "MdOutlineSportsKabaddi":MdOutlineSportsKabaddi,
    "MdMusicNote":MdMusicNote,
    "GiLargeDress":GiLargeDress,
    "GiBallerinaShoes":GiBallerinaShoes
}

export const categories = [
    {
      label: 'ماشین',
      icon: AiFillCar,
      description: 'This property is close to the beach!',
      queryName:"car"
    },
    {
      label: 'موتورسیکلت',
      icon: FaMotorcycle,
      description: 'This property is has windmills!',
      queryName:"moto"

    },
    {
      label: 'دوچرخه',
      icon: GiDutchBike,
      description: 'This property is modern!',
      queryName:"moto"

    },
    {
      label: 'موبایل و تبلت ',
      icon: AiOutlineMobile,
      description: 'This property is in the countryside!',
      queryName:"moto"

    },
    {
      label: 'رایانه',
      icon: GiLaptop,
      description: 'This is property has a beautiful pool!',
      queryName:"moto"

    },
    {
      label: 'کنسول بازی',
      icon: GrGamepad,
      description: 'This property is on an island!',
      queryName:"moto"

    },
    {
      label: 'دوربین',
      icon: PiCamera,
      description: 'This property is near a lake!',
      queryName:"moto"

    },
    {
      label: 'ابزارآلات',
      icon: BsTools,
      description: 'This property has skiing activies!',
      queryName:"moto"

    },
    {
      label: 'لوازم ورزشی',
      icon: MdOutlineSportsKabaddi,
      description: 'This property is an ancient castle!',
      queryName:"moto"

    },
    {
      label: 'آلات موسیقی',
      icon: MdMusicNote,
      description: 'This property is in a spooky cave!',
      queryName:"moto"

    },
    {
      label: 'لباس',
      icon: GiLargeDress,
      description: 'This property offers camping activities!',
      queryName:"moto"

    },
    {
      label: 'کتونی و کفش',
      icon: GiBallerinaShoes,
      description: 'This property is in arctic environment!',
      queryName:"moto"

    },
  ]


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const CategoriesStore=useCategoriesStore()
    const isMainPage = pathname === '/' || pathname === '/search';

    const [categoriess, setCategories] = useState<CategoryInfo[]>([]);

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get<CategoryInfo[]>('http://localhost:9000/v1/rentals/categories');
          if (response.status === 200) {
            setCategories(response.data);
            CategoriesStore.setCategories(response.data)
            
          } else {
            console.error('Failed to fetch categories');
          }
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      if (isMainPage) {
        fetchCategories();
      }
    }, [isMainPage]);
  
    if (!isMainPage) {
      return null;
    }
    // console.log(categoriess)
    return (
      <Container>
        <div
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            overflow-x-auto
          "
        >
          {categoriess.map((item) => {
            
            return(
              <CategoryBox 
            key={item.name}
            label={item.name}
            query={item.query_name}
            Icon={iconDic[item.icon_name] as IconType}
            selected={category === item.query_name}
            />
            )
            })}
        </div>
      </Container>
    );
  }
   
  export default Categories;