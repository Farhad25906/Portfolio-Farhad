"use client"
import { FadeIn } from "@/components/fade-in";
import { ExternalLink, Github, Calendar, Users, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "../../page-header";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";


interface ProjectsSectionProps {
  limit?: number;
}

export function ProjectsSection({ limit }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

 const projects = [
  {
    id: 1,
    title: "TourNest - Travel Platform",
    category: "Full Stack",
    shortDescription: "Modern travel booking platform with Next.js and Framer Motion",
    detailedDescription: "TourNest is a comprehensive travel platform that connects travelers with local hosts. It features interactive tour discovery, secure booking management, and role-based dashboards for tourists, hosts, and administrators.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind"],
    liveLink: "https://tour-nest-client.vercel.app/",
    clientRepo: "https://github.com/Farhad25906/TourNest-Client",
    serverRepo: "https://github.com/Farhad25906/TourNest-Server",
    stats: {
      linesOfCode: "15,000+",
      contributors: 1,
      monthsToBuild: 3,
      apis: "25+ endpoints"
    },
    screenshots: [
      "https://i.ibb.co.com/8LCpp3Gh/Screenshot-from-2026-01-26-07-33-55.png",
      "https://i.ibb.co.com/Grqz6L7/Screenshot-from-2026-01-28-01-22-43.png",
      "https://i.ibb.co.com/S4RCQRVm/Screenshot-from-2026-01-28-01-22-11.png",
      "https://i.ibb.co.com/fGyJK2x6/Screenshot-from-2026-01-28-01-21-51.png",
      "https://i.ibb.co.com/p6VJWgLv/Screenshot-from-2026-01-28-01-21-29.png"
    ],
    features: {
      user: [
        "Interactive tour discovery with advanced filtering",
        "Secure booking management with real-time availability",
        "User profile with travel preferences and history",
        "Wishlist and saved tours functionality",
        "Review and rating system for tours",
        "Payment integration with Stripe",
        "Email notifications for bookings",
        "Responsive design for mobile and desktop"
      ],
      host: [
        "Dashboard for managing tours and bookings",
        "Tour creation and editing interface",
        "Revenue tracking and analytics",
        "Subscription management (Free/Pro plans)",
        "Blog creation and management",
        "Booking approval/rejection system",
        "Commission and payout tracking",
        "Performance metrics dashboard"
      ],
      admin: [
        "Comprehensive user management",
        "Content moderation and approval",
        "Platform analytics and reporting",
        "Revenue and commission oversight",
        "System configuration and settings",
        "Support ticket management",
        "Activity monitoring and logs"
      ],
      technical: [
        "Role-based access control (RBAC)",
        "JWT authentication with refresh tokens",
        "Image upload with Cloudinary",
        "Real-time notifications",
        "Email service integration",
        "Data validation with Zod",
        "Rate limiting and security",
        "API documentation with Swagger"
      ]
    },
    technologies: {
      frontend: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Lucide Icons"],
      backend: ["Node.js", "Express", "TypeScript", "Prisma ORM", "PostgreSQL", "Zod", "JWT", "Bcrypt"],
      payment: ["Stripe API", "Payment intents", "Webhook handling"],
      deployment: ["Vercel", "Render", "Neon DB", "Cloudinary"]
    }
  },
  {
    id: 2,
    title: "ZapWallet - Digital Payment System",
    category: "Full Stack",
    shortDescription: "Comprehensive digital wallet platform with role-based dashboards",
    detailedDescription: "ZapWallet is a feature-rich digital payment system that enables users to send money, cash out through agents, and manage their finances securely. It supports three user roles with distinct functionalities and commission tracking.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Redux", "Tailwind"],
    liveLink: "https://zap-wallet-client.vercel.app",
    clientRepo: "https://github.com/yourusername/ZapWallet-Client",
    serverRepo: "https://github.com/yourusername/ZapWallet-Server",
    stats: {
      linesOfCode: "20,000+",
      contributors: 1,
      monthsToBuild: 4,
      apis: "30+ endpoints"
    },
    screenshots: [
      "https://i.ibb.co.com/WNyVrvdX/Screenshot-from-2026-01-28-01-24-07.png",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1600&auto=format&fit=crop"
    ],
    features: {
      user: [
        "Send money to other users (৳100 - ৳1,000,000)",
        "Cash out through verified agents",
        "Transaction history with filters",
        "Wallet balance tracking",
        "Profile management",
        "6-digit PIN security",
        "OTP phone verification",
        "Real-time notifications"
      ],
      agent: [
        "Cash in functionality (deposit to users)",
        "Withdraw earnings to bank account",
        "Commission tracking (1.5% rate)",
        "Transaction history dashboard",
        "Agent profile management",
        "Balance and earnings overview",
        "Customer management",
        "Performance analytics"
      ],
      admin: [
        "User and agent management",
        "Agent application approval",
        "Fund agent wallets",
        "Revenue dashboard",
        "System-wide transaction monitoring",
        "Commission reports",
        "Platform analytics",
        "Support management"
      ],
      security: [
        "JWT authentication with refresh tokens",
        "Rate limiting (5 attempts per 15 min)",
        "PIN hashing with bcrypt",
        "Input validation with Zod",
        "CORS protection",
        "Request size limits",
        "Redis session management",
        "Secure API endpoints"
      ],
      payment: [
        "Atomic transaction processing",
        "Real-time balance updates",
        "Commission auto-calculation",
        "Transaction receipt generation",
        "Failed transaction handling",
        "Balance validation",
        "Currency support (BDT)",
        "Audit logging"
      ]
    },
    technologies: {
      frontend: ["React 19", "TypeScript", "Redux Toolkit", "Tailwind CSS 4", "Framer Motion", "React Hook Form", "Zod"],
      backend: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose", "JWT", "Redis", "Bcrypt", "Twilio"],
      deployment: ["Vercel", "Render", "MongoDB Atlas", "Redis Cloud"]
    }
  },
  {
    id: 3,
    title: "Eventify - Event Management Platform",
    category: "Full Stack",
    shortDescription: "Event management platform with categorized listings and service ordering",
    detailedDescription: "Eventify simplifies event planning with categorized listings, gallery management, and personalized service ordering. Built as a group project with collaborative GitHub workflows.",
    tags: ["React", "Redux", "Firebase", "Express", "MongoDB", "Tailwind"],
    liveLink: "https://eventify-bd.netlify.app/",
    clientRepo: "https://github.com/Farhad2590/Eventify-Client",
    serverRepo: "https://github.com/Marufhossain07/Eventify-Server",
    stats: {
      linesOfCode: "12,000+",
      contributors: 3,
      monthsToBuild: 2,
      apis: "20+ endpoints"
    },
    screenshots: [
      "https://i.ibb.co.com/PsSRq3YX/Screenshot-from-2026-01-28-01-25-05.png",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1600&auto=format&fit=crop"
    ],
    features: {
      core: [
        "Event gallery with images and video reels",
        "Six event categories (Concerts, Birthdays, Weddings, Festivals, Conferences, New Year Parties)",
        "Customized event service ordering",
        "User authentication with Firebase",
        "Role-based access (Admin, Moderator, User)",
        "Responsive design with Bootstrap",
        "Search and filter functionality",
        "Event booking and management"
      ],
      user: [
        "Browse events by category",
        "View event details and gallery",
        "Book event services",
        "User profile management",
        "Booking history",
        "Wishlist events",
        "Contact event organizers",
        "Review and rating system"
      ],
      admin: [
        "Event creation and management",
        "User management dashboard",
        "Content moderation",
        "Revenue tracking",
        "Analytics dashboard",
        "Support ticket system",
        "Platform settings",
        "Email notifications"
      ],
      technical: [
        "GitHub collaboration workflow",
        "Version control with branches",
        "Code review process",
        "Deployment automation",
        "Database management",
        "API documentation",
        "Error handling",
        "Performance optimization"
      ]
    },
    technologies: {
      frontend: ["React", "Redux", "Firebase Auth", "Tailwind CSS", "Bootstrap", "React Router"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Nodemailer"],
      tools: ["Git", "GitHub", "Netlify", "Render", "Postman"],
      group: "Collaborative project with 3 developers"
    }
  },
  {
    id: 4,
    title: "TravelTrade - P2P Logistics Platform",
    category: "Full Stack",
    shortDescription: "Peer-to-peer platform connecting travelers with senders for parcel delivery",
    detailedDescription: "TravelTrade is a unique marketplace where travelers can monetize their extra luggage space and senders can ship parcels economically. Features real-time bidding, secure payments, and role-based dashboards.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Redux", "Stripe", "Firebase"],
    liveLink: "https://travel-trade-client.vercel.app",
    clientRepo: "https://github.com/yourusername/TravelTrade/TravelTrade-Client",
    serverRepo: "https://github.com/yourusername/TravelTrade/TravelTrade-Server",
    stats: {
      linesOfCode: "18,000+",
      contributors: 1,
      monthsToBuild: 3,
      apis: "35+ endpoints"
    },
    screenshots: [
      "https://i.ibb.co.com/xKTdHy37/Screenshot-from-2026-01-30-06-19-13.png",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1600&auto=format&fit=crop"
    ],
    features: {
      sender: [
        "Post parcel requests with details and photos",
        "Find travelers going to your destination",
        "Manage bids from travelers",
        "Real-time parcel tracking",
        "Payment history and transaction tracking",
        "Secure payment processing with Stripe",
        "Profile management",
        "Review system for travelers"
      ],
      traveler: [
        "Post upcoming travel plans and available capacity",
        "Browse parcel requests matching your route",
        "Bid on delivery requests and earn money",
        "Earnings dashboard with withdrawal history",
        "Build reputation with transparent reviews",
        "Trip management interface",
        "Real-time messaging with senders",
        "Payment processing via Stripe & SSLCommerz"
      ],
      admin: [
        "User management for all platform users",
        "Bid monitoring and oversight",
        "Dispute resolution system",
        "Platform analytics and growth insights",
        "Transaction monitoring and financial oversight",
        "Content moderation",
        "System configuration",
        "Support ticket management"
      ],
      technical: [
        "Real-time bidding system",
        "Role-based access control (Sender/Traveler/Admin)",
        "Firebase-powered chat system",
        "JWT authentication with Firebase verification",
        "Real-time updates with Redux Toolkit & TanStack Query",
        "Interactive maps for location services",
        "Secure payment integration (Stripe & SSLCommerz)",
        "Input validation and data sanitization"
      ]
    },
    technologies: {
      frontend: ["React 18", "TypeScript", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "Framer Motion", "Ant Design", "Firebase"],
      backend: ["Node.js", "Express", "TypeScript", "MongoDB", "Mongoose", "JWT", "Stripe", "SSLCommerz", "Firebase Admin"],
      deployment: ["Vercel", "MongoDB Atlas", "Firebase"],
      special: ["Peer-to-peer logistics", "Real-time bidding", "Cross-border delivery"]
    }
  },
  {
    id: 5,
    title: "HomeEase - Home Service Booking Platform",
    category: "Full Stack",
    shortDescription: "Platform connecting homeowners with professional service providers",
    detailedDescription: "HomeEase is a comprehensive platform that connects homeowners with vetted service providers for home maintenance needs. Features role-based dashboards, secure payments, and service management.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Firebase", "Stripe", "Tailwind"],
    liveLink: "https://home-ease-client-493v.vercel.app",
    clientRepo: "https://github.com/Farhad25906/HomeEase-Client",
    serverRepo: "https://github.com/Farhad25906/HomeEase-Server",
    stats: {
      linesOfCode: "15,000+",
      contributors: 1,
      monthsToBuild: 2,
      apis: "25+ endpoints"
    },
    screenshots: [
      "https://i.ibb.co.com/HDyXYr8X/Screenshot-from-2026-01-30-06-20-11.png",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-043788447eb1?q=80&w=1600&auto=format&fit=crop"
    ],
    features: {
      serviceReceiver: [
        "Browse wide range of home services with filtering",
        "Easy booking process with date/time selection",
        "Manage current and past bookings",
        "Secure payments via Stripe integration",
        "Rate and review service providers",
        "Profile management and preferences",
        "Service search and filtering",
        "Real-time booking status updates"
      ],
      serviceProvider: [
        "Add and manage service listings with descriptions and pricing",
        "Accept or reject booking requests",
        "Earnings dashboard with detailed tracking",
        "Request payouts to bank accounts",
        "Edit and update service details",
        "Track performance metrics",
        "Build professional profile",
        "Manage service categories"
      ],
      admin: [
        "Platform-wide statistics and metrics dashboard",
        "User management with role assignment",
        "Service listing moderation",
        "Category management (add/edit/remove)",
        "Approve or reject provider withdrawal requests",
        "Financial oversight and reporting",
        "Support ticket management",
        "Platform configuration"
      ],
      technical: [
        "Role-based dashboards (User/Provider/Admin)",
        "Secure authentication with Firebase",
        "Payment processing with Stripe",
        "Real-time data with TanStack Query",
        "Responsive design for all devices",
        "Interactive animations with Framer Motion and Lottie",
        "Image upload and management",
        "Email notifications"
      ]
    },
    technologies: {
      frontend: ["React", "Vite", "Tailwind CSS", "Material UI", "TanStack Query", "Firebase", "Stripe.js", "Framer Motion"],
      backend: ["Node.js", "Express", "MongoDB", "Stripe", "JWT", "Mongoose"],
      deployment: ["Vercel", "MongoDB Atlas", "Firebase"],
      special: ["Home services marketplace", "Service provider management", "Booking system"]
    }
  },
  {
    id: 6,
    title: "Eventify - Event Management System",
    category: "Full Stack",
    shortDescription: "Comprehensive event management platform for organizers, moderators, and attendees",
    detailedDescription: "Eventify is a complete event management system with role-based access for Users, Admins, and Moderators. Features event scheduling, gallery management, booking system, and OpenAI integration.",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "OpenAI", "Redux", "Tailwind"],
    liveLink: "https://eventify-bd.netlify.app/",
    clientRepo: "https://github.com/Farhad25906/Eventify-Client",
    serverRepo: "https://github.com/Farhad25906/Eventify-Server",
    stats: {
      linesOfCode: "14,000+",
      contributors: 1,
      monthsToBuild: 2,
      apis: "22+ endpoints"
    },
    screenshots: [
      "https://i.ibb.co.com/jvcFX1Zv/Screenshot-from-2026-01-30-06-19-42.png",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1600&auto=format&fit=crop"
    ],
    features: {
      user: [
        "Browse and book available events",
        "Track payment history",
        "Add and view reviews for events",
        "Update personal information",
        "Access user support",
        "Event wishlist functionality",
        "Booking management",
        "Event notifications"
      ],
      moderator: [
        "Oversee and moderate event listings",
        "Handle user feedback and reports",
        "Update event status",
        "Manage event staff assignments",
        "Content approval workflow",
        "User support management",
        "Event analytics",
        "Communication tools"
      ],
      admin: [
        "View and manage all system users",
        "Full control over event creation and modification",
        "Assign moderator responsibilities",
        "Business reports and revenue tracking",
        "Add and manage gallery media",
        "Budget oversight",
        "System configuration",
        "Platform analytics"
      ],
      technical: [
        "Role-Based Access Control (Admin/Moderator/User)",
        "Firebase authentication with social login (Google, GitHub)",
        "OpenAI integration for advanced features",
        "Real-time updates with Redux Toolkit",
        "Interactive UI with Framer Motion and Lottie",
        "Gallery management with LightGallery and Swiper",
        "Toast notifications with React Toastify",
        "Image and video management"
      ]
    },
    technologies: {
      frontend: ["React", "Vite", "Tailwind CSS", "Redux Toolkit", "Firebase Auth", "Framer Motion", "TanStack Query", "React Hook Form"],
      backend: ["Node.js", "Express", "MongoDB", "Mongoose", "OpenAI", "JWT", "Cors"],
      deployment: ["Netlify", "Vercel", "MongoDB Atlas"],
      special: ["Event management", "Role-based system", "OpenAI integration"]
    }
  }
];

  return (
    <div className="space-y-12">
      <SectionHeader
        subtitle="Featured Work"
        title="Projects With Impact"
      />

      <FadeIn delay={0.3}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.slice(0, limit).map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden 
                         border border-slate-200 dark:border-slate-700
                         hover:border-blue-500 dark:hover:border-blue-400
                         transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Cover Image */}
              <div className="relative h-48 w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
                <img
                  src={project.screenshots[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Content wrapper */}
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                                  bg-blue-100 dark:bg-blue-900/30 
                                  border border-blue-200 dark:border-blue-800/50 mb-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                      <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wide uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 
                                 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg
                               bg-slate-100 dark:bg-slate-800 
                               text-slate-700 dark:text-slate-300
                               border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1.5 text-xs font-medium rounded-lg
                                   bg-blue-50 dark:bg-blue-900/20 
                                   text-blue-600 dark:text-blue-400
                                   border border-blue-200 dark:border-blue-800/50">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Stats */}
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-xl 
                              bg-slate-50 dark:bg-slate-800/50 
                              border border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <Code2 className="w-4 h-4 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {project.stats.linesOfCode}
                    </div>
                  </div>
                  <div className="text-center border-x border-slate-200 dark:border-slate-700">
                    <Calendar className="w-4 h-4 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {project.stats.monthsToBuild}
                    </div>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {project.stats.contributors}
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="flex-1 px-4 py-3 rounded-xl font-semibold text-sm
                             bg-blue-600 hover:bg-blue-700
                             text-white shadow-lg shadow-blue-500/20
                             transition-all duration-300 hover:-translate-y-0.5
                             flex items-center justify-center gap-2 group/btn"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>

                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl font-semibold text-sm
                               bg-white dark:bg-slate-800
                               text-slate-600 dark:text-slate-400
                               border-2 border-slate-200 dark:border-slate-700
                               hover:border-blue-600 dark:hover:border-blue-500
                               hover:text-blue-600 dark:hover:text-blue-400
                               transition-all duration-300 hover:-translate-y-0.5"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}

                  {project.clientRepo !== "#" && (
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl font-semibold text-sm
                               bg-white dark:bg-slate-800
                               text-slate-600 dark:text-slate-400
                               border-2 border-slate-200 dark:border-slate-700
                               hover:border-blue-600 dark:hover:border-blue-500
                               hover:text-blue-600 dark:hover:text-blue-400
                               transition-all duration-300 hover:-translate-y-0.5"
                      title="Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="flex justify-center mt-12">
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl
                         bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500
                         text-blue-600 dark:text-blue-400 font-bold text-lg
                         hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white
                         transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25"
            >
              See More Projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </FadeIn>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={projects.find(p => p.id === selectedProject)!}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}