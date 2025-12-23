'use client'

import { Code2, Heart, Sparkles, Dumbbell, Camera, Plane, Database, Server, Layout } from 'lucide-react'

const skills = {
  frontend: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js'],
  backend: ['Node.js', 'Express.js', 'NestJS', 'PHP', 'Laravel', 'Symfony'],
  database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Sequelize'],
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
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 premium-tag rounded-full mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-xs sm:text-sm font-medium">À propos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
            Qui suis-<span className="text-gradient">je</span> ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Développeuse passionnée alliant créativité et expertise technique
          </p>
        </div>

        {/* Bio Card */}
        <div className="glass-effect-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
                Une développeuse engagée
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
                Actuellement développeuse full-stack en alternance à la{' '}
                <span className="font-semibold text-primary-400">Gendarmerie Nationale</span>,
                je recherche un CDI à partir de septembre 2026 pour rejoindre une équipe
                dynamique et contribuer à des projets innovants.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Avec une formation solide en développement web et une expérience variée,
                j'apporte une vision complète du développement, de la conception à la mise
                en production.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="glass-effect rounded-xl p-4 sm:p-6 border-l-4 border-primary-500">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Localisation</p>
                <p className="font-semibold text-white text-sm sm:text-base">Caudéran, Bordeaux</p>
              </div>
              <div className="glass-effect rounded-xl p-4 sm:p-6 border-l-4 border-accent-500">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Email</p>
                <p className="font-semibold text-white text-sm sm:text-base break-all">mhailimajda@gmail.com</p>
              </div>
              <div className="glass-effect rounded-xl p-4 sm:p-6 border-l-4 border-primary-500">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Téléphone</p>
                <p className="font-semibold text-white text-sm sm:text-base">+33 6 62 60 04 73</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-center text-white mb-6 sm:mb-8">
            Compétences techniques
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Frontend */}
            <div className="glass-effect-strong rounded-2xl p-5 sm:p-6 card-hover">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4">
                <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary-500/20 text-primary-400 rounded-full text-xs sm:text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="glass-effect-strong rounded-2xl p-5 sm:p-6 card-hover">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mb-4">
                <Server className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-accent-500/20 text-accent-400 rounded-full text-xs sm:text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="glass-effect-strong rounded-2xl p-5 sm:p-6 card-hover sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Base de données</h4>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span key={skill} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary-500/20 text-primary-400 rounded-full text-xs sm:text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Qualités & Centres d'intérêt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Qualités */}
          <div className="glass-effect-strong rounded-2xl p-6 sm:p-8">
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 sm:mb-6">
              Mes qualités
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <quality.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base">{quality.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Centres d'intérêt */}
          <div className="glass-effect-strong rounded-2xl p-6 sm:p-8">
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 sm:mb-6">
              Mes passions
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <interest.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base">{interest.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
