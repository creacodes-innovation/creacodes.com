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

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  // ✅ Web3Forms Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setSending(true);

    try {
      const formData = new FormData();

      // 🔥 Your Web3Forms Access Key
      formData.append("access_key", "9b1c016f-9b85-417c-9087-2864a564f633");

      // ✅ Form Fields
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("message", form.message);

      // 🚀 Custom Email Setup
      formData.append("subject", `New Contact from ${form.name}`);
      formData.append("from_name", form.name);
      formData.append("replyto", form.email);

      // 🔒 Anti-spam
      formData.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon."
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed");
      }

    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to send",
        variant: "destructive"
      });
    }

    setSending(false);
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
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-gray-900">
                  Let's Talk
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Fill out the form or reach us directly — we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-5">

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <MapPin size={18} className="text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Address</h4>
                    <p className="text-sm text-gray-500">Kochi, Kerala, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <Phone size={18} className="text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Phone</h4>
                    <a
                      href="tel:+918714851501"
                      className="text-sm text-gray-500 hover:text-cyan-600 transition"
                    >
                      +91 8714851501
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <Mail size={18} className="text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Email</h4>
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=creacodes.info@gmail.com"
                      target="_blank"
                      className="text-sm text-gray-500 hover:text-cyan-600 transition"
                    >
                      creacodes.info@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-3 flex-wrap">

                  <a href="https://www.linkedin.com/company/creacodes/?viewAsMember=true" target="_blank">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer">
                      <img src={linkedIn} className="w-4 h-4" />
                    </div>
                  </a>

                  <a href="https://wa.me/918714851501" target="_blank">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer">
                      <img src={whatsapp} className="w-4 h-4" />
                    </div>
                  </a>

                  <a href="https://www.instagram.com/creacodes.official" target="_blank">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer">
                      <img src={instagram} className="w-4 h-4" />
                    </div>
                  </a>

                  <a href="https://facebook.com" target="_blank">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer">
                      <img src={facebook} className="w-4 h-4" />
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
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-5 shadow-sm"
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
                    placeholder="your@email.com"
                    required
                  />

                </div>

                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                />

                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full h-12 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  {sending ? "Sending..." : "Send Message"} <Send size={16} className="ml-2" />
                </Button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;