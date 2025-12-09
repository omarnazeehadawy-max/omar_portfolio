import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, X, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when project changes
  useEffect(() => {
    setIsLoading(true);
  }, [selectedProject]);

  // Helper to extract YouTube ID
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    // Expanded regex to support Shorts, Live, and standard formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/|live\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Helper to extract Google Drive ID - Robust Regex
  const getGoogleDriveId = (url: string) => {
    if (!url) return null;
    // Matches /file/d/ID/view, /file/d/ID, id=ID
    const regExp = /(?:file\/d\/|id=|open\?id=|uc\?id=)([a-zA-Z0-9_-]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  // Helper to extract Dailymotion ID
  const getDailymotionId = (url: string) => {
    if (!url) return null;
    // Matches dailymotion.com/video/xID or dai.ly/xID
    const regExp = /(?:dailymotion\.com\/video\/|dai\.ly\/)([a-zA-Z0-9]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  // Helper to determine if a project is effectively a video
  const isVideoProject = (project: Project) => {
    return (project.type && project.type.toLowerCase() === 'video') || 
           !!getYouTubeId(project.src) || 
           !!getGoogleDriveId(project.src) || 
           !!getDailymotionId(project.src);
  };

  const getDriveId = selectedProject ? getGoogleDriveId(selectedProject.src) : null;
  const getYTId = selectedProject ? getYouTubeId(selectedProject.src) : null;
  const getDMId = selectedProject ? getDailymotionId(selectedProject.src) : null;

  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-zinc-400 text-lg">A collection of projects that define my style.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const youtubeId = getYouTubeId(project.src);
            const googleDriveId = getGoogleDriveId(project.src);
            const dailymotionId = getDailymotionId(project.src);
            const isVideo = isVideoProject(project);

            return (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 relative">
                  {/* Smart Thumbnail Rendering Logic */}
                  {isVideo ? (
                    youtubeId ? (
                      // YouTube Thumbnail
                      <img
                        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        onError={(e) => {
                          // Fallback to hqdefault if maxres doesn't exist
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                        }}
                      />
                    ) : dailymotionId ? (
                      // Dailymotion Thumbnail
                      <img
                        src={`https://www.dailymotion.com/thumbnail/video/${dailymotionId}`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        onError={(e) => {
                           (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : googleDriveId ? (
                      // Google Drive Thumbnail
                      <img
                        src={`https://drive.google.com/thumbnail?id=${googleDriveId}&sz=w800`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        onError={(e) => {
                          // Fallback if thumbnail fails to load
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      // Direct MP4/Video File
                      <video
                        src={project.src}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        muted
                        loop
                        playsInline
                        onMouseOver={(e) => e.currentTarget.play()}
                        onMouseOut={(e) => e.currentTarget.pause()}
                      />
                    )
                  ) : (
                    // Standard Image Project
                    <img 
                      src={project.src} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                     <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 shadow-xl">
                        {isVideo ? (
                           <Play className="w-8 h-8 text-white fill-white ml-1" />
                        ) : (
                           <ArrowUpRight className="w-8 h-8 text-white" />
                        )}
                     </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">{project.category}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[95vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 lg:-right-12 text-zinc-400 hover:text-white transition-colors p-2 z-50"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Media Container */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/10 border border-white/10 bg-zinc-900 flex items-center justify-center bg-black relative group">
                
                {/* Loading Indicator */}
                {isVideoProject(selectedProject) && isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                    <Loader2 className="w-10 h-10 text-primary-600 animate-spin" />
                  </div>
                )}

                {isVideoProject(selectedProject) ? (
                  getYTId ? (
                    // YouTube Embed - Uses youtube-nocookie and removes origin for max compatibility
                    <iframe
                      key={`youtube-${getYTId}`} 
                      width="100%"
                      height="100%"
                      src={`https://www.youtube-nocookie.com/embed/${getYTId}?autoplay=1&playsinline=1&rel=0`}
                      title={selectedProject.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full relative z-10"
                      onLoad={() => setIsLoading(false)}
                    ></iframe>
                  ) : getDMId ? (
                    // Dailymotion Embed
                    <iframe
                      key={`dailymotion-${getDMId}`}
                      frameBorder="0"
                      src={`https://www.dailymotion.com/embed/video/${getDMId}?autoplay=1`}
                      width="100%"
                      height="100%"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full relative z-10"
                      onLoad={() => setIsLoading(false)}
                    ></iframe>
                  ) : getDriveId ? (
                    // Google Drive Logic: Use Iframe Preview
                    <iframe
                      key={`drive-${getDriveId}`}
                      src={`https://drive.google.com/file/d/${getDriveId}/preview`}
                      width="100%"
                      height="100%"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full border-0 relative z-10"
                      onLoad={() => setIsLoading(false)}
                    ></iframe>
                  ) : (
                    // Direct Video File
                    <video
                      key={`video-${selectedProject.id}`}
                      src={selectedProject.src}
                      className="w-full h-full object-contain relative z-10"
                      controls
                      autoPlay
                      playsInline
                      onLoadedData={() => setIsLoading(false)}
                    />
                  )
                ) : (
                  // Image
                  <img
                    src={selectedProject.src}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain relative z-10"
                    onLoad={() => setIsLoading(false)}
                  />
                )}
              </div>

              {/* Project Details Footer with External Link */}
              <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-primary-400">{selectedProject.category}</p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                   <a 
                    href={selectedProject.src} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full transition-colors border border-white/10 w-full md:w-auto shadow-lg shadow-primary-900/20"
                  >
                    <span>{getYTId ? "Watch on YouTube" : getDMId ? "Watch on Dailymotion" : getDriveId ? "Watch on Drive" : "Open Link"}</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;