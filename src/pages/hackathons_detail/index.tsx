import React from "react";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Header from "../../components/header";
import Tail from "../../components/tail";
import Heads from "../../components/head";
import HackathonsState from "../../components/state";

// Move this function to a separate utility file
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// Extract this component to a separate file
const Links = () => {
    // ... component code
}

const HackathonsDetail = () => {
    const categories = [
        { title: "总览" },
        { title: "Links" },
        { title: "Q&A" },
    ];

    return (
        <div className="mx-auto relative bg-fixed overflow-hidden"
             style={{backgroundImage: "url('/tintin-bg.png')"}}>
            <Heads />
            <Header />
            <div className="lg:px-10 xl:px-20 relative px-5 pt-24 mx-auto">
                {/* Banner section */}
                <div className="rounded-xl bg-left md:bg-cover overflow-hidden h-48" 
                     style={{backgroundImage: "url('/黑客松_bg.png')"}}>
                    <div className="text-center mt-20 flex justify-center text-2xl xl:text-5xl">
                        ETH CC HACKATHON
                    </div>
                </div>

                {/* Main content */}
                <div className="xl:flex mt-10">
                    {/* Sidebar */}
                    <div className="xl:w-4/12 h-full bg-white rounded-md px-10 my-2 pb-5">
                        {/* ... sidebar content ... */}
                    </div>

                    {/* Tab content */}
                    <div className="md:w-full ml-4">
                        <Tab.Group>
                            <Tab.List className="mt-2 border-b-2 border-[#000000]/20 mx-auto flex">
                                {/* ... tab list ... */}
                            </Tab.List>
                            <Tab.Panels className="mt-2 w-full h-new-1 xl:h-new 2xl:h-100 overflow-y-auto scrollbar-thin scrollbar-thumb-fuchsia-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full xl:pr-4">
                                {/* ... tab panels ... */}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
            <Tail />
        </div>
    );
}

export default HackathonsDetail;
