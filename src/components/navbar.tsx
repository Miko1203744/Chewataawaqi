"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Community", href: "/community" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="" className="flex items-center space-x-2">
          <img
            // src="https://raw.githubusercontent.com/Zemenaytech/chewataawaqi-assets/main/Logo-images/chewataawaqi.jpg"
            src="/logo3.png"
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          {/* <span className="font-bold text-xl text-green-600">Chewata Awaqi</span> */}
        </Link>
        <div className="hidden md:flex items-center space-x-8 ">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={isActive ? "text-red-500 hover:text-primary" : ""}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 active:text-green-500"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </nav>
  );
}
