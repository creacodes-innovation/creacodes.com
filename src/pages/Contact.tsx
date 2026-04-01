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
              {/* Heading */}
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-gray-900">
                  Let's Talk
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Fill out the form or reach us directly — we'd love to hear from you.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-5">

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <MapPin size={18} className="text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Address</h4>
                    <p className="text-sm text-gray-500">Kochi, Kerala, India</p>
                  </div>
                </div>

                {/* Phone */}
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

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <Mail size={18} className="text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Email</h4>
                    <a
                      href="mailto:creacodes.info@gmail.com"
                      className="text-sm text-gray-500 hover:text-cyan-600 transition"
                    >
                      creacodes.info@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-3 flex-wrap">

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/creacodes/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer group shadow-sm hover:shadow-md">
                      <img
                        src={linkedIn}
                        alt="LinkedIn"
                        className="w-5 h-5 transition duration-300 group-hover:scale-110 group-hover:invert"
                      />
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://wa.me/918714851501" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer group shadow-sm hover:shadow-md">
                      <img
                        src={whatsapp}
                        alt="WhatsApp"
                        className="w-5 h-5 transition duration-300 group-hover:scale-110 group-hover:invert"
                      />
                    </div>
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/creacodes.official?igsh=MXJtZ2o3cGpmdTJibA==" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer group shadow-sm hover:shadow-md">
                      <img
                        src={instagram}
                        alt="Instagram"
                        className="w-5 h-5 transition duration-300 group-hover:scale-110 group-hover:invert"
                      />
                    </div>
                  </a>

                  {/* Facebook */}
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <div className="p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 hover:bg-accent transition duration-300 cursor-pointer group shadow-sm hover:shadow-md">
                      <img
                        src={facebook}
                        alt="Facebook"
                        className="w-5 h-5 transition duration-300 group-hover:scale-110 group-hover:invert"
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
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-5 shadow-sm"
              >
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Name *
                    </label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="rounded-lg h-11 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-cyan-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="rounded-lg h-11 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-cyan-500"
                      required
                    />
                  </div>

                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Phone
                  </label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="rounded-lg h-11 bg-gray-50 border-gray-200 focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Message *
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="rounded-lg bg-gray-50 border-gray-200 focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full h-12 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium shadow-md"
                >
                  {sending ? "Sending..." : "Send Message"} <Send size={16} className="ml-2" />
                </Button>

              </form>
            </motion.div>

          </div>

          {/* Map */}
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31428.34280318155!2d76.3131451350955!3d10.054530370187695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c269c104ecd%3A0x845435f558157962!2sKalamassery%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1775040822243!5m2!1sen!2sin"
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