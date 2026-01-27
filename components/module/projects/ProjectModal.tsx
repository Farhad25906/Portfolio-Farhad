"use client"
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, CheckCircle, Users, Shield, Server, CreditCard, ShoppingCart, BarChart } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./ProjectModal.module.css";

export interface Project {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  tags: string[];
  liveLink: string;
  clientRepo: string;
  serverRepo?: string;
  stats: {
    linesOfCode: string;
    contributors: number;
    monthsToBuild: number;
    apis?: string;
    charts?: string;
  };
  screenshots: string[];
  features: Record<string, string[] | undefined>;
  technologies: Record<string, string[] | string | undefined>;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => {
    setImageLoaded(false);
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setImageLoaded(false);
    setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  const getFeatureIcon = (featureType: string) => {
    switch (featureType) {
      case 'user': return <Users className="w-5 h-5" />;
      case 'admin': return <Shield className="w-5 h-5" />;
      case 'payment': return <CreditCard className="w-5 h-5" />;
      case 'security': return <Shield className="w-5 h-5" />;
      case 'technical': return <Server className="w-5 h-5" />;
      case 'shopping': case 'checkout': return <ShoppingCart className="w-5 h-5" />;
      case 'analytics': case 'visualization': case 'data': return <BarChart className="w-5 h-5" />;
      default: return <CheckCircle className="w-5 h-5" />;
    }
  };

  const formatFeatureTitle = (key: string) => {
    return key.charAt(0).toUpperCase() + key.slice(1) + ' Features';
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm ${styles.animateFadeIn}`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-slate-900 
                   rounded-3xl shadow-2xl overflow-hidden ${styles.animateSlideUp}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 rounded-full 
                   bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm
                   text-slate-700 dark:text-slate-300
                   hover:bg-blue-50 dark:hover:bg-blue-900/50
                   hover:text-blue-600 dark:hover:text-blue-400
                   shadow-lg border border-slate-200 dark:border-slate-700
                   transition-all duration-300 hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable content */}
        <div className={`overflow-y-auto max-h-[90vh] ${styles.customScrollbar}`}>
          {/* Image Slider Section */}
          <div className="relative h-96 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-900 dark:to-indigo-950">
            {/* Image */}
            <img
              src={project.screenshots[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Loading state */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Navigation arrows */}
            {project.screenshots.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full
                           bg-white/20 backdrop-blur-md text-white
                           hover:bg-white/30 transition-all duration-300 hover:scale-110
                           border border-white/30"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full
                           bg-white/20 backdrop-blur-md text-white
                           hover:bg-white/30 transition-all duration-300 hover:scale-110
                           border border-white/30"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image indicators */}
            {project.screenshots.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setImageLoaded(false);
                      setCurrentImageIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/70'
                      }`}
                  />
                ))}
              </div>
            )}

            {/* Project title overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-blue-500/30 dark:bg-blue-600/30 backdrop-blur-md
                            border border-white/30 mb-3">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wider uppercase">
                  {project.category}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {project.title}
              </h2>
              <p className="text-white/90 text-sm max-w-2xl drop-shadow">
                {project.detailedDescription}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.liveLink !== "#" && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-semibold text-sm
                           bg-gradient-to-r from-blue-600 to-indigo-600 
                           hover:from-blue-700 hover:to-indigo-700
                           text-white shadow-lg shadow-blue-500/25
                           hover:shadow-xl hover:shadow-blue-500/40
                           transition-all duration-300 hover:-translate-y-0.5
                           flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Demo
                </a>
              )}
              {project.clientRepo !== "#" && (
                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-semibold text-sm
                           bg-slate-100 dark:bg-slate-800
                           text-slate-700 dark:text-slate-300
                           border border-slate-300 dark:border-slate-700
                           hover:bg-slate-200 dark:hover:bg-slate-700
                           transition-all duration-300 hover:-translate-y-0.5
                           flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Client Repository
                </a>
              )}
              {project.serverRepo && project.serverRepo !== "#" && (
                <a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-semibold text-sm
                           bg-slate-100 dark:bg-slate-800
                           text-slate-700 dark:text-slate-300
                           border border-slate-300 dark:border-slate-700
                           hover:bg-slate-200 dark:hover:bg-slate-700
                           transition-all duration-300 hover:-translate-y-0.5
                           flex items-center gap-2"
                >
                  <Server className="w-4 h-4" />
                  Server Repository
                </a>
              )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 
                            dark:from-blue-950/30 dark:to-indigo-950/30
                            border border-blue-200 dark:border-blue-800/50">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  {project.stats.linesOfCode}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Lines of Code
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 
                            dark:from-purple-950/30 dark:to-pink-950/30
                            border border-purple-200 dark:border-purple-800/50">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {project.stats.monthsToBuild}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Months to Build
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 
                            dark:from-green-950/30 dark:to-emerald-950/30
                            border border-green-200 dark:border-green-800/50">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {project.stats.contributors}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {project.stats.contributors === 1 ? 'Solo Developer' : 'Team Members'}
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 
                            dark:from-orange-950/30 dark:to-amber-950/30
                            border border-orange-200 dark:border-orange-800/50">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                  {project.stats.apis || project.stats.charts || '20+'}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {project.stats.apis ? 'API Endpoints' : 'Chart Types'}
                </div>
              </div>
            </div>

            {/* Technologies Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
                Technologies Used
              </h3>
              <div className="space-y-4">
                {Object.entries(project.technologies).map(([key, techs]) => {
                  if (!techs) return null;
                  return (
                    <div key={key}>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
                        {key}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(techs) ? (
                          techs.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 rounded-lg text-sm font-medium
                                      bg-slate-100 dark:bg-slate-800
                                      text-slate-700 dark:text-slate-300
                                      border border-slate-200 dark:border-slate-700
                                      hover:border-blue-300 dark:hover:border-blue-600
                                      hover:bg-blue-50 dark:hover:bg-blue-950/30
                                      transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))
                        ) : (
                          <span
                            className="px-4 py-2 rounded-lg text-sm font-medium
                                    bg-slate-100 dark:bg-slate-800
                                    text-slate-700 dark:text-slate-300
                                    border border-slate-200 dark:border-slate-700
                                    hover:border-blue-300 dark:hover:border-blue-600
                                    hover:bg-blue-50 dark:hover:bg-blue-950/30
                                    transition-all duration-200"
                          >
                            {techs}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features Section */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(project.features).map(([key, features]) => {
                  if (!features) return null;
                  return (
                    <div
                      key={key}
                      className="p-6 rounded-2xl 
                              bg-gradient-to-br from-slate-50 to-blue-50/30
                              dark:from-slate-800/50 dark:to-blue-950/20
                              border border-slate-200 dark:border-slate-700
                              hover:border-blue-300 dark:hover:border-blue-700
                              transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 
                                      text-blue-600 dark:text-blue-400">
                          {getFeatureIcon(key)}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            {formatFeatureTitle(key)}
                          </h4>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {features.length} features
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* All Tags */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3 uppercase tracking-wider">
                All Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium
                             bg-gradient-to-r from-blue-50 to-indigo-50
                             dark:from-blue-950/30 dark:to-indigo-950/30
                             text-blue-700 dark:text-blue-300
                             border border-blue-200 dark:border-blue-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}