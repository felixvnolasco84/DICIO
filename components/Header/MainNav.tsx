import * as React from "react";
import Link from "next/link";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
interface MainNavProps {
  items?: NavItem[];
}

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2 w-52">
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
    </div>
  );
}
