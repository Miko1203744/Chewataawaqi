import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/comunity" },
];

// const legalLinks = [
//   { name: "Privacy Policy", href: "/privacy" },
//   { name: "Terms of Service", href: "/terms" },
// ]

export function Footer() {
  return (
    <footer className="bg-background border-t bg-green-500 ">
      <div className="container mx-auto px-4 py-2 max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* <img src="https://raw.githubusercontent.com/Zemenaytech/chewataawaqi-assets/main/Logo-images/chewataawaqi.jpg" alt="Logo" className="w-8 h-8 rounded-full" /> */}
              <img
                src="/logo1.png"
                alt="Logo"
                className="w-56 h-44 rounded-full mt-2"
              />
              {/* <div className="w-6 h-6 bg-primary rounded-full" /> */}
              {/* <span className="font-bold text-lg">Chewataawaqi</span> */}
            </Link>
            {/* <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramLogoIcon className="w-4 h-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInLogoIcon className="w-4 h-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="mailto:contact@example.com">
                  <EnvelopeClosedIcon className="w-4 h-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div> */}
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 mt-20 text-white">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm ">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-2 text-white mt-20">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogoIcon className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="mailto:contact@example.com">
                <EnvelopeClosedIcon className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>

          {/* <div>
            <h3 className="font-semibold text-base mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-base mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-2">Stay updated with our latest news and offers.</p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-3 py-1 text-sm bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          </div> */}
        </div>
        <Separator className="my-6" />
        <div className="text-center text-muted-foreground text-sm text-white">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
