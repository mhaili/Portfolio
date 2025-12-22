'use client'

import { Heart, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-effect mt-20 border-t border-white/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-heading font-bold text-gradient mb-4">
              Majda Mhaili
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Développeuse full-stack passionnée par la création d'expériences web
              innovantes et élégantes. Toujours en quête d'apprentissage et de nouveaux défis.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Expériences
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Formation
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Me suivre
            </h3>
            <div className="flex space-x-4">
              <a
                href="mailto:mhailimajda@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/mhaili"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/majda-mhaili/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Créé avec <Heart className="w-4 h-4 text-accent-500 fill-accent-500" /> par Majda Mhaili © {currentYear}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}
