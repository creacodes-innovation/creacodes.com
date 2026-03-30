import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/creacodes-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceItems = [
  { label: "Website Development", path: "/services#web-development" },
  { label: "Mobile App Development", path: "/services#mobile-development" },
  { label: "UI/UX Design", path: "/services#ui-ux-design" },
  { label: "Software Development", path: "/services#software-development" },
  { label: "Digital Marketing", path: "/services#digital-marketing" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Creacodes Innovation" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.label === "Services" ? (
              <DropdownMenu key={item.path}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1 outline-none",
                      location.pathname === item.path
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/services" className="w-full cursor-pointer font-medium">
                      All Services
                    </Link>
                  </DropdownMenuItem>
                  {serviceItems.map((service) => (
                    <DropdownMenuItem key={service.path} asChild>
                      <Link to={service.path} className="w-full cursor-pointer">
                        {service.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
          <Link to="/contact">
            <Button variant="hero" size="sm" className="ml-3">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) =>
              item.label === "Services" ? (
                <div key={item.path}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      location.pathname === item.path
                        ? "text-accent bg-accent/10"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 flex flex-col gap-1 mt-1">
                      <Link
                        to="/services"
                        onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                        className="px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        All Services
                      </Link>
                      {serviceItems.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                          className="px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="hero" size="sm" className="w-full mt-2">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
