import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/creacodes-logo.png";
import linkedIn from '../assets/linkedin (2).png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram (1).png'
import facebook from '../assets/facebook-logo.png'

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="mb-4">
            <img src={logo} alt="Creacodes Innovation" className="h-8 w-auto brightness-0 invert" />
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
              <a href="mailto:creacodes.info@gmail.com"  className="hover:text-accent transition-colors">creacodes.info@gmail.com</a>
            </div>
            <div className="flex items-center gap-4 mt-2 flex-wrap">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/creacodes/?viewAsMember=true" target="_blank">
                <div className="p-2 rounded-full bg-transparent hover:bg-accent transition duration-300 cursor-pointer group">
                  <img
                    src={linkedIn}
                    alt="LinkedIn"
                    className="w-5 h-5 transition duration-300 group-hover:scale-110 group-hover:invert"
                  />
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/918714851501" target="_blank">
                <div className="p-2 rounded-full bg-transparent hover:bg-accent transition duration-300 cursor-pointer group">
                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                    className="w-5 h-5 transition duration-300 group-hover:scale-110 group-hover:invert"
                  />
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/creacodes.official?igsh=MXJtZ2o3cGpmdTJibA==" target="_blank">
                <div className="p-2 rounded-full bg-transparent hover:bg-accent transition duration-300 cursor-pointer group">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="w-5 h-5 transition duration-300 group-hover:scale-110 group-hover:invert"
                  />
                </div>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank">
              <div className="p-2 rounded-full bg-transparent hover:bg-accent transition duration-300 cursor-pointer group">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-5 h-5 transition duration-300 group-hover:scale-110 group-hover:invert"
                />
              </div>
                </a>
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
