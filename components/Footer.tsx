'use client'

import Image from 'next/image'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Expériences', href: '#experience' },
  { name: 'Formation', href: '#education' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-16 sm:pt-20 pb-8 px-4 sm:px-6">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* À propos */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-primary-500/50">
                <Image
                  src="/Portfolio/images/profile.jpg"
                  alt="Majda"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  quality={100}
                />
              </div>
              <span className="text-lg sm:text-xl font-heading font-bold text-white">
                Majda<span className="text-gradient">.</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Développeuse full-stack passionnée par la création d'expériences web innovantes et élégantes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="mailto:mhailimajda@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base break-all"
                >
                  mhailimajda@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33662600473"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base"
                >
                  +33 6 62 60 04 73
                </a>
              </li>
              <li className="text-gray-400 text-sm sm:text-base">
                Bordeaux, France
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Me suivre
            </h3>
            <div className="flex gap-3">
              <a
                href="mailto:mhailimajda@gmail.com"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://github.com/mhaili"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/majda-mhaili/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 flex items-center gap-2 text-xs sm:text-sm text-center sm:text-left">
            Créé avec <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-accent-500 fill-accent-500" /> par Majda Mhaili © {currentYear}
          </p>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
