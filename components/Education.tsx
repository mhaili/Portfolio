'use client'

import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    degree: 'Mastère Dev Manager Full Stack',
    school: 'EFREI',
    location: 'Bordeaux',
    period: '2024 - 2026',
    description: 'Formation avancée en développement full-stack et management de projets.',
    color: 'primary',
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
  { name: 'Arabe', level: 'Langue maternelle', percentage: 100 },
  { name: 'Français', level: 'Niveau C1 (Courant)', percentage: 95 },
  { name: 'Anglais', level: 'Niveau B2', percentage: 70 },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Formation & Langues
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un parcours académique solide en informatique et mathématiques
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Formation */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-6 card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        edu.color === 'primary'
                          ? 'bg-gradient-to-br from-primary-500 to-primary-600'
                          : 'bg-gradient-to-br from-accent-500 to-accent-600'
                      }`}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="text-xl font-heading font-bold text-gray-800">
                          {edu.degree}
                        </h3>
                        <span className="text-sm text-gray-500 font-medium">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-primary-600 font-medium mb-1">{edu.school}</p>
                      <p className="text-gray-500 text-sm mb-2">{edu.location}</p>
                      <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Langues */}
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-2xl p-6 h-fit sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-800">
                  Langues
                </h3>
              </div>
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800">{lang.name}</span>
                      <span className="text-sm text-gray-500">{lang.level}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000"
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
