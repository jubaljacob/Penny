"use client"

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () =>{
    const {user, isLoaded} = useUser();

    return(
        <div className="spacy-y-2 mb-4 ">
            <h2 className="text-exl lg:text-4xl text-white font-medium ">
                Welcome Back{isLoaded ?", ":" "}{user?.firstName}
            </h2>
            <p className="text-sm lg:text-base text-[#9290C3]">Financial Overview Report</p>
        </div>
    )
}