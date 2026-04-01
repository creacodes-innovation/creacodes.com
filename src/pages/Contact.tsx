import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

import linkedIn from '../assets/linkedin (2).png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram (1).png'
import facebook from '../assets/facebook-logo.png'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setSending(true);

    emailjs.send(
      "service_nqrmktr",     
      "template_sds3c54",      
      form,
      "bdG-kDUneyA3Apfwe"     
    )
    .then(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon."
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      setSending(false);
    })
    .catch((error) => {
      console.error(error);
      toast({
        title: "Failed to send",
        variant: "destructive"
      });
      setSending(false);
    });
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding hero-bg">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
              Have a project idea? Let's discuss how we can help bring it to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">

            {/* Left Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">Let's Talk</h2>
                <p className="text-sm text-muted-foreground">
                  Fill out the form or reach us directly — we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <MapPin size={18} />
                  <p>Kochi, Kerala, India</p>
                </div>

                <div className="flex gap-4">
                  <Phone size={18} />
                  <a href="tel:+918714851501">+91 8714851501</a>
                </div>

                <div className="flex gap-4">
                  <Mail size={18} />
                  <a href="mailto:creacodes.info@gmail.com">
                    creacodes.info@gmail.com
                  </a>
                </div>

                {/* Social */}
                <div className="flex gap-3 flex-wrap">
                  <img src={linkedIn} className="w-5 h-5" />
                  <img src={whatsapp} className="w-5 h-5" />
                  <img src={instagram} className="w-5 h-5" />
                  <img src={facebook} className="w-5 h-5" />
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
                onSubmit={handleSubmit}
                className="bg-card rounded-xl border p-6 space-y-5"
              >

                <div className="grid sm:grid-cols-2 gap-4">

                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />

                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Your email"
                    required
                  />

                </div>

                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Phone number"
                />

                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Message"
                  required
                />

                <Button type="submit" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"} <Send size={16} />
                </Button>

              </form>
            </motion.div>

          </div>

          {/* Map */}
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps?q=kochi&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;