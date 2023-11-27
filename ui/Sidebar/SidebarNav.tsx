'use client'
import ToggleSlimSidebarButton from "./ToggleSlimSidebarButton";
import { IconLayoutKanban } from "@tabler/icons-react";
import Link from "next/link";
import { useSidebarVisibility } from "@/contexts/SidebarContext";


const SidebarLinks = [
    {
      path: "/",
      label: "Boards",
      Icon: IconLayoutKanban,
    }
  ];

export default function SidebarNav() {
    const { isSlimSidebar } = useSidebarVisibility();
    return (
        <ul className="px-5 space-y-3 text-white text-sm">
            {SidebarLinks.map((link, index) => (
                <li key={index}>
                <Link href={link.path} className="flex items-center space-x-3">
                    <span>{link.Icon && <link.Icon />}</span>
                    {!isSlimSidebar && <span>{link.label}</span>}
                </Link>
                </li>
            ))}
            <ToggleSlimSidebarButton />
        </ul>
    )
}