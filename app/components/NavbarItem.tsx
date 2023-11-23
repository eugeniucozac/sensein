"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarItemType = {
  title: string, 
  param: string
}

export default function NavbarItem({ title, param }: NavbarItemType) {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className={`${pathname === param ? 'md:text-blue-700' : ''} block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
        href={param}
      >
        {title}
      </Link>
    </div>
  );
}
