'use client'

import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Développeuse Web Full-Stack',
    company: 'Gendarmerie Nationale',
    location: 'France',
    period: 'Sept. 2024 - Août 2026',
    type: 'Alternance',
    description: 'Développement d\'applications web pour les besoins internes de la Gendarmerie Nationale.',
    color: 'primary',
    current: true,
  },
  {
    title: 'Développeuse Web',
    company: 'Citerneo',
    location: 'Amboise',
    period: 'Sept. 2023 - Août 2024',
    type: 'Alternance',
    description: 'Refonte complète du site de l\'entreprise. Création de six sites e-commerce distincts.',
    highlights: ['C#', 'VueJs', 'Orchard CMS', 'E-commerce'],
    color: 'accent',
  },
  {
    title: 'Assistante Informatique',
    company: 'INRAE',
    location: 'Nouzilly',
    period: 'Avril - Juillet 2023',
    type: 'Stage',
    description: 'Refonte des sites internet FR/ENG suite à la migration sous eZplatform.',
    highlights: ['eZplatform', 'Migration', 'Design Logo'],
    color: 'primary',
  },
  {
    title: 'Agent Polyvalent',
    company: 'Mamie Bigoude',
    location: 'Blois',
    period: 'Juin 2022 - Juillet 2023',
    type: 'CDI 15h',
    description: 'Service client et gestion des commandes en restauration.',
    color: 'accent',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 premium-tag rounded-full mb-4 sm:mb-6">
            <Briefcase className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-xs sm:text-sm font-medium">Parcours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
            Mon <span className="text-gradient">Expérience</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Un parcours riche en apprentissages et en projets variés
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden sm:block" />
            
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Point sur la timeline */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${
                      exp.current 
                        ? 'bg-green-500 animate-pulse' 
                        : 'bg-gradient-to-r from-primary-500 to-accent-500'
                    }`} />
                    <div className={`absolute w-8 h-8 rounded-full ${
                      exp.current 
                        ? 'bg-green-500/20' 
                        : 'bg-primary-500/20'
                    } animate-ping`} style={{ animationDuration: '2s' }} />
                  </div>
                  
                  {/* Contenu */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16'} pl-6 sm:pl-12 md:pl-0`}>
                    {/* Point mobile */}
                    <div className="absolute left-4 sm:left-8 w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 md:hidden" style={{ marginTop: '1.5rem' }} />
                    
                    <div className="glass-effect-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-hover group relative overflow-hidden">
                      {/* Décoration */}
                      <div className={`absolute -bottom-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${
                        exp.color === 'primary' 
                          ? 'from-primary-500/10 to-accent-500/10' 
                          : 'from-accent-500/10 to-primary-500/10'
                      } rounded-full blur-2xl`} />
                      
                      <div className="relative">
                        {/* Header */}
                        <div className="mb-3 sm:mb-4">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white mb-2 group-hover:text-gradient transition-all">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-400 mb-2 sm:mb-3">
                            <span className="font-medium text-primary-400 text-sm sm:text-base">{exp.company}</span>
                            <span className="text-gray-600 hidden sm:inline">•</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span className="text-xs sm:text-sm">{exp.location}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                              exp.color === 'primary'
                                ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                                : 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                            }`}>
                              {exp.type}
                            </span>
                            <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm bg-white/5 px-2 sm:px-3 py-1 rounded-full">
                              <Calendar className="w-3 h-3" />
                              <span>{exp.period}</span>
                            </div>
                            {exp.current && (
                              <div className="flex items-center gap-2 px-2 sm:px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-green-400 text-xs font-medium">En cours</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        {exp.highlights && (
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs sm:text-sm text-gray-400"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
