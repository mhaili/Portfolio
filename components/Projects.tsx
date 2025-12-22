'use client'

import { useState } from 'react'
import { ExternalLink, Github, Folder, Plus } from 'lucide-react'

// Projets initiaux - vous pourrez facilement en ajouter d'autres
const initialProjects = [
  {
    title: 'Sites E-commerce Citerneo',
    description: 'Développement de 6 sites e-commerce avec C# et VueJs sur la plateforme Orchard. Architecture modulaire et performante.',
    tags: ['C#', 'VueJs', 'Orchard', 'E-commerce'],
    image: '🛍️',
    category: 'web',
    featured: true,
  },
  {
    title: 'Refonte Site INRAE',
    description: 'Migration et refonte complète des sites internet FR/ENG de l\'UMR Infectiologie et Santé Publique sous eZplatform.',
    tags: ['eZplatform', 'Migration', 'Multilingue'],
    image: '🔬',
    category: 'web',
    featured: true,
  },
  {
    title: 'Application Gendarmerie',
    description: 'Développement d\'applications web internes pour la Gendarmerie Nationale avec des standards de sécurité élevés.',
    tags: ['React', 'TypeScript', 'Sécurité'],
    image: '🔒',
    category: 'web',
    featured: true,
  },
  // Placeholder pour projets futurs
  {
    title: 'Votre prochain projet',
    description: 'Espace réservé pour vos futurs projets. Ajoutez-les facilement en modifiant le fichier Projects.tsx !',
    tags: ['À venir'],
    image: '✨',
    category: 'upcoming',
    featured: false,
  },
]

const categories = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'backend', label: 'Backend' },
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
    <section id="projects" className="py-20 px-6 bg-white/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Mes projets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Une sélection de mes réalisations et projets en cours
          </p>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg scale-105'
                    : 'glass-effect text-gray-700 hover:scale-105'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl overflow-hidden card-hover animate-slide-up ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image/Emoji du projet */}
              <div className="relative h-48 bg-gradient-to-br from-primary-400 via-accent-400 to-primary-600 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary-600">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                {project.category !== 'upcoming' && (
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                      <ExternalLink className="w-4 h-4" />
                      Voir le projet
                    </button>
                    <button className="px-4 py-2 glass-effect rounded-lg text-gray-700 hover:shadow-lg transition-all">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Card pour ajouter un projet */}
          <div className="glass-effect rounded-2xl p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-primary-300 hover:border-primary-500 transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
              Ajouter un projet
            </h3>
            <p className="text-gray-600 text-sm">
              Modifiez le fichier Projects.tsx pour ajouter vos nouveaux projets
            </p>
          </div>
        </div>

        {/* Guide d'ajout de projets */}
        <div className="mt-12 max-w-4xl mx-auto glass-effect rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Folder className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-heading font-bold text-gray-800 mb-3">
                💡 Comment ajouter un nouveau projet ?
              </h3>
              <div className="text-gray-600 space-y-2">
                <p>1. Ouvrez le fichier <code className="px-2 py-1 bg-primary-50 text-primary-700 rounded">components/Projects.tsx</code></p>
                <p>2. Ajoutez un nouvel objet dans le tableau <code className="px-2 py-1 bg-primary-50 text-primary-700 rounded">initialProjects</code></p>
                <p>3. Personnalisez le titre, la description, les tags et la catégorie</p>
                <p>4. Votre projet apparaîtra automatiquement sur votre portfolio ! ✨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
