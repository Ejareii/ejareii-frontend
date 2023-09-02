'use client';

import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";



interface HeartButtonProps {
  listingId: string
  currentUser?: any | null
}

const HeartButton: React.FC<HeartButtonProps> = ({ 
  listingId,
  currentUser
}) => {
  //for api call
  // const { hasFavorited, toggleFavorite } = useFavorite({
  //   listingId,
  //   currentUser
  // });
  const[hasFavorited,sethasFavorited]=useState(false)
  // const hasFavorited=false;
  const toggleFavorite=()=>{
    sethasFavorited(!hasFavorited)
  }

  return (
    <div 
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className={
          hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'
        }
      />
    </div>
   );
}
 
export default HeartButton;