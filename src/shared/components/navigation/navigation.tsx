'use client';

import { FC } from "react";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Container from "../common/Container";
import Categories from "./Categories";

const Navigation:FC = () =>{

    return(
		<div className="sticky w-full bg-white z-10 shadow-sm">
			<div
				className="
				py-4 
				border-b-[1px]">

		<Container>
		<div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
		<Logo/>
		<Search />
		<UserMenu/>
		</div>
		</Container>
	  	</div>
		<Categories/>

		</div>
    )
}

export default Navigation;