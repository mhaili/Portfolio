'use client'

import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Développeuse Web Full-Stack',
    company: 'Gendarmerie Nationale',
    location: 'France',
    period: 'Septembre 2024 - Août 2026',
    type: 'Alternance',
    description: 'Développement d\'applications web pour les besoins internes de la Gendarmerie Nationale.',
    color: 'primary',
  },
  {
    title: 'Développeuse Web',
    company: 'Citerneo',
    location: 'Amboise',
    period: 'Septembre 2023 - Août 2024',
    type: 'Alternance',
    description: 'Refonte complète du site de l\'entreprise. Création de six sites e-commerce distincts avec C# et VueJs.',
    highlights: [
      'Refonte site corporate',
      '6 sites e-commerce (C#, VueJs)',
    ],
    color: 'accent',
  },
  {
    title: 'Assistante Informatique',
    company: 'INRAE - UMR Infectiologie et Santé Publique',
    location: 'Nouzilly',
    period: 'Avril - Juillet 2023',
    type: 'Stage',
    description: 'Refonte et reprise des sites internet (FR/ENG) suite à la migration sous eZplatform.',
    highlights: [
      'Refonte sites FR/ENG',
      'Migration eZplatform',
      'Création logo UMR ISP',
      'Création trombinoscope',
    ],
    color: 'primary',
  },
  {
    title: 'Agent Polyvalent',
    company: 'Mamie Bigoude',
    location: 'Blois',
    period: 'Juin 2022 - Juillet 2023',
    type: 'CDI 15h',
    description: 'Service client et gestion des commandes.',
    highlights: [
      'Prise de commande',
      'Service en salle',
      'Encaissement',
    ],
    color: 'accent',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Mon parcours professionnel
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expérience variée dans le développement web et les technologies modernes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-primary-300 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg z-10 ${
                          exp.color === 'primary' 
                            ? 'bg-gradient-to-br from-primary-500 to-primary-600' 
                            : 'bg-gradient-to-br from-accent-500 to-accent-600'
                        }`}
                      >
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass-effect rounded-2xl p-6 md:p-8 card-hover">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span
                            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                              exp.color === 'primary' 
                                ? 'bg-primary-100 text-primary-700' 
                                : 'bg-accent-100 text-accent-700'
                            }`}
                          >
                            {exp.type}
                          </span>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {exp.highlights && (
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white/50 border border-gray-200 rounded-lg text-sm text-gray-700"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
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
