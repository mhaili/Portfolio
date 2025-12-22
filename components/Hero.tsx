'use client'

import { Sparkles, Download, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">
                Disponible pour un CDI dès septembre 2026
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Bonjour, je suis{' '}
              <span className="text-gradient">Majda Mhaili</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Développeuse <span className="font-semibold text-primary-600">Full-Stack</span> passionnée
              par la création d'expériences web <span className="font-semibold text-accent-500">innovantes</span> et <span className="font-semibold text-accent-500">élégantes</span>
            </p>

            <p className="text-lg text-gray-500">
              Actuellement en alternance à la Gendarmerie Nationale, je combine créativité
              et expertise technique pour donner vie à des projets web ambitieux.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Voir mes projets
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="/documents/CV_Majda_Mhaili.pdf"
                download="CV_Majda_Mhaili.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 glass-effect rounded-full font-medium text-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">10+</div>
                <div className="text-sm text-gray-600">Technologies maîtrisées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <div className="w-full aspect-square max-w-md mx-auto glass-effect rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/profile.jpg"
                    alt="Majda Mhaili - Développeuse Full-Stack"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Décoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-200 rounded-full blur-2xl opacity-50 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
