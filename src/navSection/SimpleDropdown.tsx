"use client";

import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import { NavItemLink } from "./navData";

interface SimpleDropdownProps {
    items: NavItemLink[];
    onItemClick?: () => void;
}

export default function SimpleDropdown({ items, onItemClick }: SimpleDropdownProps) {
    return (
        <div className="absolute left-0 top-full z-50 w-64 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-xl ring-1 ring-black/5">
                <ul className="space-y-1">
                    {items.map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.href}
                                onClick={onItemClick}
                                className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-900"
                            >
                                <span>{item.label}</span>
                                <LuChevronRight
                                    size={15}
                                    className="text-gray-300 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-blue-900 group-hover:opacity-100"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}