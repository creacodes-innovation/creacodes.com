import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/creacodes-logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="font-bold text-accent-foreground text-sm">C</span>
            </div>
            <span className="font-bold text-lg">Creacodes</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Delivering innovative digital solutions to transform businesses and drive growth.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Portfolio", "Team", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <span>Website Development</span>
            <span>Mobile App Development</span>
            <span>UI/UX Design</span>
            <span>Software Development</span>
            <span>Digital Marketing</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/40">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-accent shrink-0" />
              <span>Kochi, Kerala</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-accent shrink-0" />
              <a href="tel:+918714851501" className="hover:text-accent transition-colors">+91 8714851501</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-accent shrink-0" />
              <a href="mailto:info@creacodes.com" className="hover:text-accent transition-colors">info@creacodes.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} Creacodes Innovation. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
