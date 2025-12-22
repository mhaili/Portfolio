'use client'

import { Code2, Heart, Sparkles, Dumbbell, Camera, Plane } from 'lucide-react'

const skills = {
  frontend: [
    'HTML/CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Angular',
    'Vue.js',
  ],
  backend: [
    'Node.js',
    'Express.js',
    'NestJS',
    'PHP',
    'Laravel',
    'Symfony',
  ],
  database: [
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Sequelize',
  ],
}

const qualities = [
  { icon: Sparkles, text: 'Curieuse et apprenante' },
  { icon: Heart, text: "Esprit d'équipe" },
  { icon: Code2, text: 'Rigoureuse et précise' },
]

const interests = [
  { icon: Dumbbell, text: 'Musculation et fitness' },
  { icon: Camera, text: 'Photographie' },
  { icon: Plane, text: 'Voyages' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Développeuse passionnée alliant créativité et expertise technique
          </p>
        </div>

        {/* Bio */}
        <div className="glass-effect rounded-3xl p-8 md:p-12 mb-12 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                Une développeuse engagée
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Actuellement développeuse full-stack en alternance à la{' '}
                <span className="font-semibold text-primary-600">Gendarmerie Nationale</span>,
                je recherche un CDI à partir de septembre 2026 pour rejoindre une équipe
                dynamique et contribuer à des projets innovants.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Avec une formation solide en développement web et une expérience variée,
                j'apporte une vision complète du développement, de la conception à la mise
                en production. Mon objectif : créer des applications web performantes,
                accessibles et esthétiques.
              </p>
            </div>
            <div className="space-y-4">
              <div className="glass-effect rounded-xl p-6 border-l-4 border-primary-500">
                <p className="text-sm text-gray-500 mb-1">Localisation</p>
                <p className="font-semibold text-gray-800">Caudéran, Bordeaux</p>
              </div>
              <div className="glass-effect rounded-xl p-6 border-l-4 border-accent-500">
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-semibold text-gray-800">mhailimajda@gmail.com</p>
              </div>
              <div className="glass-effect rounded-xl p-6 border-l-4 border-primary-500">
                <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                <p className="font-semibold text-gray-800">+33 6 62 60 04 73</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences */}
        <div className="mb-12">
          <h3 className="text-3xl font-heading font-bold text-center text-gray-800 mb-8">
            Mes compétences techniques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="glass-effect rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="glass-effect rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-600 to-primary-500 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent-50 text-accent-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="glass-effect rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Base de données</h4>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Qualités & Centres d'intérêt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Qualités */}
          <div className="glass-effect rounded-2xl p-8">
            <h4 className="text-2xl font-heading font-bold text-gray-800 mb-6">
              Mes qualités
            </h4>
            <div className="space-y-4">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <quality.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{quality.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Centres d'intérêt */}
          <div className="glass-effect rounded-2xl p-8">
            <h4 className="text-2xl font-heading font-bold text-gray-800 mb-6">
              Mes passions
            </h4>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <interest.icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{interest.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
