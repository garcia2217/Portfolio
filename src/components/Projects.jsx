/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="relative border-b border-neutral-900 py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -right-4 top-1/2 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Section header */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-light tracking-tight">
          Featured <span className="text-neutral-500">Projects</span>
        </h2>
        <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
      </div>

      {/* Projects list */}
      <div className="container mx-auto px-4">
        {PROJECTS.map((project, projectIndex) => (
          <ProjectCard key={projectIndex} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const screenshots = project.screenshots || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <Card className="mb-16 overflow-hidden bg-neutral-900/50 shadow-xl">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          {/* Carousel section */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative bg-neutral-800">
              {/* Image container with padding to maintain aspect ratio */}
              <div className="flex min-h-[300px] items-center justify-center p-4">
                <img
                  src={screenshots[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="max-h-[600px] w-auto max-w-full rounded-lg shadow-lg"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              {/* Carousel navigation */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/75"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/75"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-white w-4'
                            : 'bg-white/50 w-2'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Current image indicator */}
                  <div className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                    {currentImageIndex + 1} / {screenshots.length}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Project details section */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 p-8">
              <div>
                <h3 className="mb-2 text-2xl font-medium text-neutral-200">
                  {project.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-purple-500/10 px-4 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 hover:shadow-lg"
              >
                View on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;