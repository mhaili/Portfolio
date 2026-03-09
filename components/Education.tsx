'use client'

import { GraduationCap, Globe } from 'lucide-react'

const education = [
  {
    degree: 'Mastère Dev Manager Full Stack',
    school: 'EFREI',
    location: 'Bordeaux',
    period: '2024 - 2026',
    description: 'Formation avancée en développement full-stack et management de projets.',
    color: 'primary',
    current: true,
  },
  {
    degree: 'BUT Métiers du Multimédia et de l\'Internet',
    school: 'IUT de Blois',
    location: 'Blois',
    period: '2022 - 2024',
    description: '2ème et 3ème année - Spécialisation développement web et création numérique.',
    color: 'accent',
  },
  {
    degree: 'Licence Informatique et Mathématiques',
    school: 'Université François Rabelais',
    location: 'Blois',
    period: '2019 - 2022',
    description: 'L1 et L2 - Fondamentaux de l\'informatique et des mathématiques.',
    color: 'primary',
  },
  {
    degree: 'Baccalauréat Sciences Physiques',
    school: 'Lycée',
    location: 'Maroc',
    period: '2018 - 2019',
    description: 'Formation scientifique avec spécialisation en physique.',
    color: 'accent',
  },
]

const languages = [
  { name: 'Arabe', level: 'Langue maternelle', percentage: 100, flag: '🇲🇦' },
  { name: 'Français', level: 'Niveau C1 (Courant)', percentage: 95, flag: '🇫🇷' },
  { name: 'Anglais', level: 'Niveau B2', percentage: 70, flag: '🇬🇧' },
]

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 premium-tag rounded-full mb-4 sm:mb-6">
            <GraduationCap className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-xs sm:text-sm font-medium">Formation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
            Mon <span className="text-gradient">Parcours</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Un parcours académique solide en informatique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Formation */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-effect-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 card-hover group relative overflow-hidden"
              >
                {/* Décoration */}
                <div className={`absolute -bottom-8 -right-8 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br ${
                  edu.color === 'primary' 
                    ? 'from-primary-500/10 to-accent-500/10' 
                    : 'from-accent-500/10 to-primary-500/10'
                } rounded-full blur-xl`} />
                
                <div className="relative flex gap-3 sm:gap-5">
                  {/* Icône */}
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${
                    edu.color === 'primary'
                      ? 'from-primary-500 to-accent-500'
                      : 'from-accent-500 to-primary-500'
                  } flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  
                  {/* Contenu */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-2 mb-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white group-hover:text-gradient transition-all">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-500 font-medium bg-white/5 px-2 sm:px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                        {edu.current && (
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
                    <p className="text-primary-400 font-medium mb-1 text-sm sm:text-base">{edu.school}</p>
                    <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">{edu.location}</p>
                    <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Langues */}
          <div className="lg:col-span-1">
            <div className="glass-effect-strong rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Langues
                </h3>
              </div>
              
              <div className="space-y-5 sm:space-y-6">
                {languages.map((lang, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-xl sm:text-2xl">{lang.flag}</span>
                        <div>
                          <span className="font-semibold text-white block text-sm sm:text-base">{lang.name}</span>
                          <span className="text-xs text-gray-500">{lang.level}</span>
                        </div>
                      </div>
                      <span className="text-primary-400 font-bold text-sm sm:text-base">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-primary-500/30"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
