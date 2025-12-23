'use client'

import { useState } from 'react'
import { ExternalLink, Github, Plus, Rocket } from 'lucide-react'

const initialProjects = [
  {
    title: 'Memory Game',
    description: 'Jeu de mémoire interactif avec animations fluides et système de score.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Game'],
    image: '🧠',
    category: 'web',
    featured: true,
    demo: 'https://mhaili.github.io/memory-game/',
    github: 'https://github.com/mhaili/memory-game',
  },
  {
    title: 'Sites E-commerce Citerneo',
    description: 'Développement de 6 sites e-commerce avec C# et VueJs sur la plateforme Orchard.',
    tags: ['C#', 'VueJs', 'Orchard', 'E-commerce'],
    image: '🛍️',
    category: 'web',
    featured: true,
  },
  {
    title: 'Refonte Site INRAE',
    description: 'Migration et refonte complète des sites internet FR/ENG sous eZplatform.',
    tags: ['eZplatform', 'Migration', 'Multilingue'],
    image: '🔬',
    category: 'web',
    featured: true,
  },
  {
    title: 'Application Gendarmerie',
    description: 'Développement d\'applications web internes avec des standards de sécurité élevés.',
    tags: ['React', 'TypeScript', 'Sécurité'],
    image: '🔒',
    category: 'web',
    featured: true,
  },
]

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'upcoming', label: 'À venir' },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [projects] = useState(initialProjects)

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 premium-tag rounded-full mb-4 sm:mb-6">
            <Rocket className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-xs sm:text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 mb-6 sm:mb-8">
            Une sélection de mes réalisations et projets en cours
          </p>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg scale-105'
                    : 'glass-effect text-gray-400 hover:text-white hover:scale-105'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-effect-strong rounded-xl sm:rounded-2xl overflow-hidden card-hover group"
            >
              {/* Image/Emoji du projet */}
              <div className="relative h-36 sm:h-40 md:h-48 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-500/20 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl md:text-6xl group-hover:scale-125 transition-transform duration-300">{project.image}</span>
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 glass-effect-strong rounded-full text-xs font-bold text-primary-400">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                {project.category !== 'upcoming' && (
                  <div className="flex gap-2 sm:gap-3">
                    {project.demo ? (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover:shadow-lg transition-all text-xs sm:text-sm"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Voir</span>
                      </a>
                    ) : (
                      <button className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover:shadow-lg transition-all text-xs sm:text-sm opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Privé</span>
                      </button>
                    )}
                    {project.github ? (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 sm:px-4 py-2 glass-effect rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    ) : (
                      <button className="px-3 sm:px-4 py-2 glass-effect rounded-lg text-gray-400 opacity-50 cursor-not-allowed">
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Card pour ajouter un projet */}
          <div className="glass-effect-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-primary-500/30 hover:border-primary-500/50 transition-colors cursor-pointer group min-h-[280px] sm:min-h-[320px]">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white mb-2">
              Ajouter un projet
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              Modifiez Projects.tsx pour ajouter vos nouveaux projets
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
