import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import linkedIn from '../assets/linkedin (2).png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram (1).png'
import facebook from '../assets/facebook-logo.png'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <div className="pt-16">
      <section className="section-padding hero-bg">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Get in Touch</h1>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
              Have a project idea? Let's discuss how we can help bring it to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Let's Talk</h2>
                <p className="text-muted-foreground text-sm">
                  Fill out the form or reach us directly — we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Address</h4>
                    <p className="text-sm text-muted-foreground">Kochi, Kerala, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Phone</h4>
                    <a href="tel:+918714851501" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      +91 8714851501
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Email</h4>
                    <a href="https://mail.google.com/mail/?view=cm&to=creacodes.info@gmail.com" target="_blank" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      creacodes.info@gmail.com
                    </a>
                  </div>

                </div>
                <div className="flex items-center gap-4 mt-3 flex-wrap">

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/creacodes/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer group shadow-sm hover:shadow-md">
                      <img
                        src={linkedIn}
                        alt="LinkedIn"
                        className="w-4 h-4 transition duration-300 group-hover:scale-110 group-hover:invert"
                      />
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://wa.me/918714851501" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer group shadow-sm hover:shadow-md">
                      <img
                        src={whatsapp}
                        alt="WhatsApp"
                        className="w-4 h-4 transition duration-300 group-hover:scale-110 group-hover:invert"
                      />
                    </div>
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/creacodes.official?igsh=MXJtZ2o3cGpmdTJibA==" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer group shadow-sm hover:shadow-md">
                      <img
                        src={instagram}
                        alt="Instagram"
                        className="w-4 h-4 transition duration-300 group-hover:scale-110 group-hover:invert"
                      />
                    </div>
                  </a>

                  {/* Facebook */}
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer group shadow-sm hover:shadow-md">
                      <img
                        src={facebook}
                        alt="Facebook"
                        className="w-4 h-4 transition duration-300 group-hover:scale-110 group-hover:invert"
                      />
                    </div>
                  </a>

                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <form
                action="https://formsubmit.co/creacodes.info@gmail.com"
                method="POST"
                className="bg-card rounded-xl border border-border p-6 md:p-8 space-y-5"
              >
                {/* Optional hidden configs */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://creacodes-com.vercel.app//thank-you" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Name *
                    </label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      maxLength={255}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    maxLength={20}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    maxLength={1000}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  Send Message <Send size={16} />
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Map */}
          <div className="mt-16 rounded-xl overflow-hidden border border-border h-80">
            <iframe
              title="Creacodes Innovation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31428.34280318155!2d76.3131451350955!3d10.054530370187695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c269c104ecd%3A0x845435f558157962!2sKalamassery%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1775023224065!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
