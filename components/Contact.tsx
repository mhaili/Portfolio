'use client'

import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 premium-tag rounded-full mb-4 sm:mb-6">
            <Send className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-xs sm:text-sm font-medium">Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Email */}
            <a
              href="mailto:mhailimajda@gmail.com"
              className="glass-effect-strong rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 card-hover group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-white mb-1 sm:mb-2 text-base sm:text-lg">Email</h4>
                  <p className="text-primary-400 font-medium text-sm sm:text-base break-all">
                    mhailimajda@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Téléphone */}
            <a
              href="tel:+33662600473"
              className="glass-effect-strong rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 card-hover group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 sm:mb-2 text-base sm:text-lg">Téléphone</h4>
                  <p className="text-primary-400 font-medium text-sm sm:text-base">
                    +33 6 62 60 04 73
                  </p>
                </div>
              </div>
            </a>

            {/* Localisation */}
            <div className="glass-effect-strong rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 group">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 sm:mb-2 text-base sm:text-lg">Localisation</h4>
                  <p className="text-gray-400 font-medium text-sm sm:text-base">Caudéran, 33200 Bordeaux</p>
                </div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="glass-effect-strong rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1 sm:mb-2 text-base sm:text-lg">Disponibilité</h4>
                  <p className="text-gray-400 font-medium text-sm sm:text-base">
                    Recherche un CDI dès septembre 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="glass-effect-strong rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 sm:mb-6 text-center">
              Retrouvez-moi sur
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/majda-mhaili/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 transition-all text-sm sm:text-base"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                LinkedIn
              </a>
              <a
                href="https://github.com/mhaili"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-xl font-medium text-white hover:bg-white/10 hover:scale-105 transition-all text-sm sm:text-base"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                GitHub
              </a>
              <a
                href="mailto:mhailimajda@gmail.com"
                className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-xl font-medium text-white hover:bg-white/10 hover:scale-105 transition-all text-sm sm:text-base"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
