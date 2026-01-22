"use client"
import { useState } from 'react';
import { FadeIn } from "@/components/fade-in";
import { SectionHeader } from "@/components/page-header";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");
        setIsSubmitting(true);
        setIsSuccess(false);
        setShowSuccessMessage(false);

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "0778716b-f323-47d3-b275-ef1cf89f2f6e");

        // Optional: Add subject from form or default
        if (!formData.get("subject")) {
            formData.append("subject", "New Contact Form Submission");
        }

        // Add from_name field for Web3Forms
        const name = formData.get("name") || "";
        formData.append("from_name", name.toString());

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                setIsSuccess(true);
                setShowSuccessMessage(true);
                (event.target as HTMLFormElement).reset();

                // Hide success message after 8 seconds
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 8000);
            } else {
                setResult(data.message || "Error submitting form");
                setIsSuccess(false);
            }
        } catch (error) {
            setResult("Network error. Please try again.");
            setIsSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <FadeIn className="flex flex-col gap-5">
            <SectionHeader
                subtitle="Get in Touch"
                title="I'd Love to Hear From You"
                className="mb-8"
            />

            {/* Success Message Banner */}
            {showSuccessMessage && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-6 animate-fade-in">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">Thank You!</h3>
                            <p className="text-green-700">
                                Your message has been sent successfully. I'll get back to you as soon as possible.
                            </p>
                        </div>
                        <button
                            onClick={() => setShowSuccessMessage(false)}
                            className="text-green-600 hover:text-green-800 ml-4"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Contact Info Cards */}
                <div className="col-span-1 space-y-6">
                    <div className="bg-card border border-border p-6 rounded-3xl flex flex-col items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div className='text-center'>
                            <h3 className="font-bold">Email</h3>
                            <p className="text-sm text-muted-foreground">farhadhossen2590@email.com</p>
                        </div>
                    </div>
                    <div className="bg-card border border-border p-6 rounded-3xl flex flex-col items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div className='text-center'>
                            <h3 className="font-bold">Phone</h3>
                            <p className="text-sm text-muted-foreground">+880 1829313336</p>
                        </div>
                    </div>
                    <div className="bg-card border border-border p-6 rounded-3xl flex flex-col items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div className='text-center'>
                            <h3 className="font-bold">Location</h3>
                            <p className="text-sm text-muted-foreground">Chittagong, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-span-1 lg:col-span-2 bg-card border border-border p-8 rounded-3xl">
                    <form onSubmit={onSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    className="w-full bg-secondary border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-secondary border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary transition-all"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-bold">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Project Inquiry"
                                className="w-full bg-secondary border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full bg-secondary border-none rounded-xl p-4 outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Result Message */}
                        {result && !showSuccessMessage && (
                            <div className={`flex items-center gap-2 p-4 rounded-xl ${isSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                {isSuccess ? (
                                    <CheckCircle className="w-5 h-5" />
                                ) : (
                                    <AlertCircle className="w-5 h-5" />
                                )}
                                <span className="text-sm font-medium">{result}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="py-4 px-8 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer w-max disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </>
                            )}
                        </button>

                        <p className="text-xs text-muted-foreground mt-2">
                            * Required fields
                        </p>
                    </form>
                </div>
            </div>
        </FadeIn>
    );
}