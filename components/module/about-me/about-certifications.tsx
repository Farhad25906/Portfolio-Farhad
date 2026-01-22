"use client";

import { Award, Eye, ExternalLink, Code2, Users, Cloud, Database, Terminal, X, Calendar, CheckCircle2, LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/page-header";
import { FadeIn } from "@/components/fade-in";

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  skillsLearned: string[];
  certificateLink: string;
  icon: LucideIcon;
  category: string;
  description: string;
}

const AboutCertifications = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const technicalSkills = [
    {
      title: "Advanced React & Next.js",
      issuer: "Meta Frontend Developer",
      issueDate: "Jul 2024",
      expiryDate: "Permanent",
      credentialId: "WEB9-2860",
      skillsLearned: ["React", "Next.js", "TypeScript", "Server Components"],
      certificateLink: "https://example.com/cert1",
      icon: Code2,
      category: "frontend",
      description: "Comprehensive training in modern React development, including Next.js framework, server-side rendering, and advanced TypeScript patterns."
    },
    {
      title: "Full Stack Web Development",
      issuer: "Programming Hero",
      issueDate: "Nov 2023",
      expiryDate: "Permanent",
      credentialId: "PH-FS-4521",
      skillsLearned: ["Node.js", "MongoDB", "Express", "REST APIs"],
      certificateLink: "https://example.com/cert2",
      icon: Database,
      category: "backend",
      description: "Complete full-stack development bootcamp covering backend architecture, database design, API development, and deployment strategies."
    },
    {
      title: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      issueDate: "Sep 2022",
      expiryDate: "Permanent",
      credentialId: "FCC-JS-7834",
      skillsLearned: ["Data Structures", "Algorithms", "Problem Solving"],
      certificateLink: "https://example.com/cert3",
      icon: Terminal,
      category: "algorithms",
      description: "In-depth study of algorithms and data structures, including sorting, searching, trees, graphs, and dynamic programming."
    },
    {
      title: "Database Design & SQL",
      issuer: "Coursera",
      issueDate: "May 2023",
      expiryDate: "Permanent",
      credentialId: "CRS-DB-9012",
      skillsLearned: ["PostgreSQL", "SQL", "Database Design", "Normalization"],
      certificateLink: "https://example.com/cert4",
      icon: Database,
      category: "database",
      description: "Professional certification in database architecture, SQL optimization, normalization techniques, and advanced query design."
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      issueDate: "Mar 2023",
      expiryDate: "Mar 2026",
      credentialId: "AWS-CP-5623",
      skillsLearned: ["Cloud Computing", "AWS Services", "S3", "EC2"],
      certificateLink: "https://example.com/cert5",
      icon: Cloud,
      category: "cloud",
      description: "Foundational AWS certification covering cloud concepts, AWS services, security, architecture, pricing, and support."
    }
  ];

  const softSkills = [
    {
      title: "Agile Project Management",
      issuer: "Scrum Alliance",
      issueDate: "Aug 2023",
      expiryDate: "Permanent",
      credentialId: "SA-APM-3456",
      skillsLearned: ["Scrum", "Sprint Planning", "Team Collaboration", "Retrospectives"],
      certificateLink: "https://example.com/cert6",
      icon: Users,
      category: "management",
      description: "Professional Scrum Master certification covering Agile methodologies, sprint planning, and team facilitation techniques."
    },
    {
      title: "Communication & Leadership",
      issuer: "LinkedIn Learning",
      issueDate: "Mar 2023",
      expiryDate: "Permanent",
      credentialId: "LIL-CL-6789",
      skillsLearned: ["Team Leadership", "Communication", "Conflict Resolution"],
      certificateLink: "https://example.com/cert7",
      icon: Users,
      category: "leadership",
      description: "Leadership development program focusing on effective communication, team building, and conflict management strategies."
    }
  ];

  const allCertifications = [...technicalSkills, ...softSkills];

  const getFilteredCertifications = () => {
    if (activeTab === "all") return allCertifications;
    if (activeTab === "technical") return technicalSkills;
    if (activeTab === "soft") return softSkills;
    return allCertifications;
  };

  const tabs = [
    { id: "technical", label: "Technical Skills", icon: Code2 },
    { id: "soft", label: "Soft Skills", icon: Users }
  ];

  const openCertificate = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <FadeIn className="space-y-8 bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <SectionHeader
        subtitle="Certifications"
        title="What I'm Certified In"
      />

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
        <nav className="flex gap-8 min-w-max">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 py-4 text-sm font-bold uppercase tracking-widest flex items-center gap-2 transition-all ${activeTab === tab.id
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            );
          })}
        </nav>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr className="border-b-2 border-gray-200 dark:border-gray-800">
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Credential Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Issuer
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {getFilteredCertifications().map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.tr
                    key={cert.credentialId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-950 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all group"
                  >
                    <td className="px-6 py-2">
                      <div className="flex items-center gap-4">
                        <div>
                          <h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                            {cert.title}
                          </h3>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {cert.issuer}
                      </p>
                    </td>
                    <td className="px-6 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedCert(cert)}
                          className="p-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => openCertificate(cert.certificateLink)}
                          className="p-1.5 rounded-lg border-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
                          title="Open Certificate"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border-2 border-gray-200 dark:border-gray-800"
              >
                {/* Modal Header */}
                <div className="relative bg-blue-500 p-8 text-white">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>

                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0"
                    >
                      {selectedCert && <selectedCert.icon className="w-8 h-8" />}
                    </motion.div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{selectedCert.title}</h2>
                      <p className="text-white/90 text-sm">{selectedCert.issuer}</p>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                      Description
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedCert.description}
                    </p>
                  </div>

                  {/* Credential Info Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                        Credential ID
                      </h3>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        <code className="text-sm font-mono text-gray-900 dark:text-white">
                          {selectedCert.credentialId}
                        </code>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                        Issue Date
                      </h3>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          {selectedCert.issueDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Learned */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
                      Skills & Competencies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skillsLearned.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-4 py-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-lg border border-blue-200 dark:border-blue-800"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Validity Period */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Validity Period
                      </span>
                      <span className="text-sm font-bold text-blue-500">
                        {selectedCert.expiryDate}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openCertificate(selectedCert.certificateLink)}
                    className="w-full mt-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Certificate
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </FadeIn>
  );
};

export default AboutCertifications;