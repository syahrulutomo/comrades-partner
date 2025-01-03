"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Alfa_Slab_One } from "next/font/google";
import { User, Building, Money, Home2, Logout, Calendar } from "iconsax-react";
import clsx from "clsx";
import SidebarItem from "./Item";

const anton = Alfa_Slab_One({ subsets: ["latin"], weight: "400" });

const Sidebar = () => {
  const [active, setActive] = useState("User");
  const [mount, setMount] = useState(false);

  const handleToggleActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // @ts-expect-error will fix it later
    console.log(e.target.textContent);
  };

  useEffect(() => {
    setActive("User");
    setMount(true);
  }, []);

  return (
    <div className="min-w-[235px] h-screen text-white bg-neutral-800 shadow-lg relative">
      <p
        className={clsx(
          anton.className,
          "text-[32px] text-center font-semibold mt-8 mb-8 text-white"
        )}
      >
        Cirkel
      </p>
      <div className="flex flex-col mt-8 text-base px-4">
        <SidebarItem
          Icon={Home2}
          link="/dashboard"
          label="Home"
          isActive={active === "Home" && mount}
          onClick={handleToggleActive}
        />
        <SidebarItem
          Icon={Money}
          link="/transaction"
          label="Transaction"
          isActive={active === "Transaction" && mount}
          onClick={handleToggleActive}
        />
        <SidebarItem
          Icon={Building}
          link=""
          label="Venue"
          isActive={active === "Venue" && mount}
          onClick={handleToggleActive}
          child={[
            {
              Icon: Building,
              link: "/venue",
              label: "Master Data",
              isActive: active === "Venue" && mount,
              onClick: handleToggleActive,
            },
            {
              Icon: Calendar,
              link: "/schedule",
              label: "Schedule",
              isActive: active === "Schedule" && mount,
              onClick: handleToggleActive,
            },
          ]}
        />
      </div>
      <div className="flex flex-col gap-4 border-t-[1px] border-t-white px-4 absolute bottom-0 left-0 w-full pb-6">
        <div className="flex items-center mt-5 cursor-pointer">
          <div className="flex items-center justify-center bg-white w-[32px] h-[32px] rounded-full shadow-md">
            <User size={24} color="#262626" variant="Bold" />
          </div>
          <p className="ml-5 text-base">User</p>
        </div>
        <div className="flex w-full justify-start text-center mt-3 cursor-pointer hover:text-primary-40">
          <Logout size={30} color="#FFF" variant="Bold" />
          <Link href="/login" className="ml-6 text-base">
            <span>Log Out</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
