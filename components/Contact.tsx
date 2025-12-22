'use client'

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:mhailimajda@gmail.com"
              className="glass-effect rounded-2xl p-8 card-hover animate-slide-up"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-lg">Email</h4>
                  <p className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                    mhailimajda@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Téléphone */}
            <a
              href="tel:+33662600473"
              className="glass-effect rounded-2xl p-8 card-hover animate-slide-up"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-accent-600 to-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-lg">Téléphone</h4>
                  <p className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                    +33 6 62 60 04 73
                  </p>
                </div>
              </div>
            </a>

            {/* Localisation */}
            <div className="glass-effect rounded-2xl p-8 animate-slide-up">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-lg">Localisation</h4>
                  <p className="text-gray-600 font-medium">Caudéran, 33200 Bordeaux</p>
                </div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="glass-effect rounded-2xl p-8 bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200 animate-slide-up">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-lg">Disponibilité</h4>
                  <p className="text-gray-600 font-medium">
                    Recherche un CDI dès septembre 2026 en développement full-stack
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="glass-effect rounded-2xl p-8 mt-8 animate-slide-up">
            <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6 text-center">
              Retrouvez-moi sur
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/majda-mhaili/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              <a
                href="https://github.com/mhaili"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 glass-effect rounded-xl font-medium text-gray-700 hover:shadow-lg hover:scale-105 transition-all"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>
              <a
                href="mailto:mhailimajda@gmail.com"
                className="flex items-center gap-3 px-8 py-4 glass-effect rounded-xl font-medium text-gray-700 hover:shadow-lg hover:scale-105 transition-all"
              >
                <Mail className="w-6 h-6" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
