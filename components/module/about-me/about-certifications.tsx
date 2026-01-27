"use client";

import { Award, Eye, ExternalLink, Code2, Users, Cloud, Database, Terminal, X, Calendar, CheckCircle2, LucideIcon, GitBranch, FileText, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/page-header";
import { FadeIn } from "@/components/fade-in";

interface Certification {
  title: string;
  issuer: string;
  issueDate: string | null;
  expiryDate: string;
  credentialId: string | null;
  skillsLearned: string[];
  certificateLink: string | null;
  icon: LucideIcon;
  category: string;
  description: string;
  pdfUrl?: string; // Add PDF URL for direct PDF viewing
}

const AboutCertifications = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState<string | null>(null);
  const [isLoadingPdf, setIsLoadingPdf] = useState(false);

  // Update PDF preview when selected cert changes
  useEffect(() => {
    if (selectedCert?.certificateLink) {
      setIsLoadingPdf(true);
      // For Google Drive links, we need to convert to direct preview URL
      const driveLink = selectedCert.certificateLink;
      let previewUrl = driveLink;

      // Convert Google Drive link to embeddable preview
      if (driveLink.includes("drive.google.com")) {
        const fileId = extractGoogleDriveFileId(driveLink);
        if (fileId) {
          previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        }
      }

      setPdfPreviewUrl(previewUrl);
      setIsLoadingPdf(false);
    } else {
      setPdfPreviewUrl(null);
    }
  }, [selectedCert]);

  const extractGoogleDriveFileId = (url: string): string | null => {
    const match = url.match(/\/d\/([^/]+)/);
    return match ? match[1] : null;
  };

  const technicalSkills: Certification[] = [
    {
      title: "Introduction to TypeScript",
      issuer: "Great Learning Academy",
      issueDate: "October 2024",
      expiryDate: "Permanent",
      credentialId: null,
      skillsLearned: ["TypeScript"],
      certificateLink: "https://drive.google.com/file/d/1RQidChXWPz1C4X_Y07UztO0ZJ5ZWfqJo/view?usp=drive_link",
      icon: Code2,
      category: "frontend",
      description: "Free online course covering the fundamentals of TypeScript."
    },
    {
      title: "Complete Web Development Course",
      issuer: "Programming Hero",
      issueDate: null,
      expiryDate: "Permanent",
      credentialId: null,
      skillsLearned: ["JavaScript", "HTML", "CSS", "React"],
      certificateLink: "https://drive.google.com/file/d/1qwIQjJ1dgvMEfCA7pU2B3lI4LIXCaUkU/view?usp=drive_link",
      icon: Code2,
      category: "frontend",
      description: "Rigorous course with extensive practice in JavaScript, HTML, CSS, and React, including project-based learning."
    },
    {
      title: "Next Level Web Development Course",
      issuer: "Programming Hero",
      issueDate: "",
      expiryDate: "Permanent",
      credentialId: "PHL2B5WEB9-28601145",
      skillsLearned: ["React", "Next.js", "TypeScript", "Server Components"],
      certificateLink: "https://drive.google.com/file/d/1T2nG6CQbZiWHc8JGEOANNZaPHfiduRNb/view?usp=sharing",
      icon: Code2,
      category: "frontend",
      description: "Immersive full-stack web development training with modern React, Next.js, server-side rendering, and TypeScript patterns."
    },
    {
      title: "Master Git and Github - Beginner to Expert",
      issuer: "Anisul Islam",
      issueDate: "July 14, 2024",
      expiryDate: "Permanent",
      credentialId: "UC-6f97ebcc-6fac-43bf-b0d8-989b00b95fd0",
      skillsLearned: ["Git", "GitHub"],
      certificateLink: "https://ude.my/UC-6f97ebcc-6fac-43bf-b0d8-989b00b95fd0",
      icon: GitBranch,
      category: "tools",
      description: "Comprehensive course covering Git and GitHub from basics to advanced usage."
    }
  ];

  const softSkills: Certification[] = [
    {
      title: "Corporate Etiquette",
      issuer: "10 Minute School",
      issueDate: "September 17, 2024",
      expiryDate: "Permanent",
      credentialId: "66e97ec4d6678",
      skillsLearned: ["Professional Conduct", "Workplace Behavior", "Business Communication"],
      certificateLink: "https://drive.google.com/file/d/1eFP33FkTYAW7SsU-g65pJa9V16MPP5ZM/view?usp=sharing", // Add your Google Drive link
      icon: Users,
      category: "professional",
      description: "Free online course covering professional etiquette, workplace behavior, and business communication skills."
    },
    {
      title: "Communication Hacks",
      issuer: "10 Minute School",
      issueDate: "September 12, 2024",
      expiryDate: "Permanent",
      credentialId: "66e305ca81d90",
      skillsLearned: ["Effective Communication", "Active Listening", "Interpersonal Skills"],
      certificateLink: "https://drive.google.com/file/d/1nz0gob0j5vV-pL3hJbBw-GbD31HQ3HJW/view?usp=sharing", // Add your Google Drive link
      icon: Users,
      category: "communication",
      description: "Free online course focusing on communication techniques, active listening, and interpersonal effectiveness."
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

  const openCertificate = (link: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const downloadCertificate = (link: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
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
                const hasCertificateLink = cert.certificateLink !== null;

                return (
                  <motion.tr
                    key={cert.credentialId || cert.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white dark:bg-gray-950 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all group"
                  >
                    <td className="px-6 py-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950">
                          <Icon className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                            {cert.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {cert.category}
                            </span>
                            {/* {hasCertificateLink && (
                              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-0.5 rounded-full">
                                PDF Available
                              </span>
                            )} */}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {cert.issueDate || "Date not specified"}
                      </p>
                    </td>
                    <td className="px-6 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setSelectedCert(cert)}
                          className="p-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                          title="View Details & PDF Preview"
                        >
                          <Eye className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => openCertificate(cert.certificateLink)}
                          className={`p-1.5 rounded-lg border-1 ${hasCertificateLink
                            ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                            : "border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                            } transition-all`}
                          title={hasCertificateLink ? "Open Certificate" : "Certificate link not available"}
                          disabled={!hasCertificateLink}
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
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border-2 border-gray-200 dark:border-gray-800 flex flex-col"
              >
                {/* Modal Header */}
                <div className="relative bg-blue-500 p-6 text-white flex-shrink-0">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4">
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0"
                      >
                        <selectedCert.icon className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold mb-1">{selectedCert.title}</h2>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-white/90 text-sm">{selectedCert.issuer}</p>
                          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                            {selectedCert.category}
                          </span>
                          {/* {selectedCert.certificateLink && (
                            <span className="inline-block px-3 py-1 bg-green-500/20 rounded-full text-xs font-medium text-green-200">
                              ✓ PDF Available
                            </span>
                          )} */}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {selectedCert.certificateLink && (
                        <>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => downloadCertificate(selectedCert.certificateLink)}
                            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                            title="Download Certificate"
                          >
                            <Download className="w-5 h-5" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openCertificate(selectedCert.certificateLink)}
                            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                            title="Open in New Tab"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.button>
                        </>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.05, rotate: 90 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCert(null)}
                        className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Modal Content with 2 Columns */}
                <div className="flex flex-1 overflow-hidden">
                  {/* Left Column - PDF Preview */}
                  <div className="w-1/2 border-r border-gray-200 dark:border-gray-800 flex flex-col">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
                      <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Certificate Preview
                      </h3>
                      {selectedCert.certificateLink && (
                        <a
                          href={selectedCert.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
                        >
                          Direct Link
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <div className="flex-1 p-4 overflow-auto">
                      {selectedCert.certificateLink ? (
                        <div className="h-full flex flex-col">
                          {isLoadingPdf ? (
                            <div className="flex items-center justify-center h-64 flex-1">
                              <div className="text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                                <p className="text-gray-500 dark:text-gray-400">Loading PDF preview...</p>
                              </div>
                            </div>
                          ) : (
                            <div className="flex-1 relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                              <iframe
                                src={pdfPreviewUrl || ""}
                                className="w-full h-full border-0"
                                title={`${selectedCert.title} Certificate Preview`}
                                loading="lazy"
                              />
                              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                                Scroll to view
                              </div>
                            </div>
                          )}
                          <div className="mt-4 text-center">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {selectedCert.category === "soft"
                                ? "Soft Skills Certificate - Interactive Preview"
                                : "Technical Certificate - Interactive Preview"}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center p-8">
                          <FileText className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
                          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            No Preview Available
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            {selectedCert.category === "soft"
                              ? "Soft skills certificate PDF link is not provided."
                              : "Certificate PDF link is not provided."}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            Contact me for certificate verification
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="w-1/2 overflow-y-auto p-6">
                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Course Description
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        {selectedCert.description}
                      </p>
                    </div>

                    {/* Credential Info Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                          Credential ID
                        </h3>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                          <code className="text-sm font-mono text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded w-full break-all">
                            {selectedCert.credentialId || "Not specified"}
                          </code>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                          Issue Date
                        </h3>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {selectedCert.issueDate || "Not specified"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Skills Learned */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
                        Skills & Competencies Gained
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skillsLearned.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`px-4 py-2 text-sm font-medium rounded-lg border ${selectedCert.category === "soft"
                              ? "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                              : "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                              }`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Validity Period */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Validity Period
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-blue-500">
                            {selectedCert.expiryDate}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            ({selectedCert.expiryDate === "Permanent" ? "No expiration" : "Expires"})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {selectedCert.certificateLink && (
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => openCertificate(selectedCert.certificateLink)}
                          className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Open Full Certificate
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => downloadCertificate(selectedCert.certificateLink)}
                          className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                          <Download className="w-5 h-5" />
                          Download PDF
                        </motion.button>
                      </div>
                    )}
                  </div>
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