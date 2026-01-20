import { FadeIn } from "@/components/fade-in";
import { PageHeader } from "@/components/page-header";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <FadeIn className="flex flex-col gap-10">
      <PageHeader 
        title="Contact Me"
        description="Let’s work together. I’m currently available for freelance projects and full-time roles."
        className="mb-8"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 space-y-6">
            <div className="bg-card border border-border p-6 rounded-3xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm text-muted-foreground">example@email.com</p>
                </div>
            </div>
            <div className="bg-card border border-border p-6 rounded-3xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-sm text-muted-foreground text-nowrap">+880 1234 567890</p>
                </div>
            </div>
             <div className="bg-card border border-border p-6 rounded-3xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>

        <div className="col-span-1 lg:col-span-2 bg-card border border-border p-8 rounded-3xl">
            <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold">Name</label>
                        <input type="text" id="name" placeholder="John Doe" className="w-full bg-secondary border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold">Email</label>
                        <input type="email" id="email" placeholder="john@example.com" className="w-full bg-secondary border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary transition-all" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold">Subject</label>
                    <input type="text" id="subject" placeholder="Project Inquiry" className="w-full bg-secondary border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold">Message</label>
                    <textarea id="message" rows={5} placeholder="Tell me about your project..." className="w-full bg-secondary border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="py-4 px-8 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer w-max">
                    Send Message
                    <Send className="w-5 h-5" />
                </button>
            </form>
        </div>
      </div>
    </FadeIn>
  );
}
