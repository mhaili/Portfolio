'use client'

import Image from 'next/image'
import { Download, ArrowRight, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo - Mobile First (apparaît en premier sur mobile) */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden ring-2 ring-white/10">
                <Image
                  src="/Portfolio/images/profile.jpg"
                  alt="Majda Mhaili - Développeuse Full-Stack"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 glass-effect-strong px-4 py-2 rounded-full flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs sm:text-sm text-white font-medium">Disponible</span>
              </div>
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 premium-tag rounded-full">
              <span className="text-xs sm:text-sm font-medium text-primary-400">
                CDI dès septembre 2026
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-white">
              Bonjour, je suis{' '}
              <span className="text-gradient block sm:inline">Majda Mhaili</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
              Développeuse <span className="font-semibold text-primary-400">Full-Stack</span> passionnée
              par la création d'expériences web <span className="font-semibold text-accent-400">innovantes</span>
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0">
              Actuellement en alternance à la Gendarmerie Nationale, je combine créativité
              et expertise technique pour donner vie à des projets web ambitieux.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium hover:shadow-xl hover:shadow-primary-500/25 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Voir mes projets
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href="/Portfolio/documents/CV_Majda_Mhaili.pdf"
                download="CV_Majda_Mhaili.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-full font-medium text-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Télécharger CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="https://github.com/mhaili"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/majda-mhaili/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">3+</div>
                <div className="text-xs sm:text-sm text-gray-500">Années d'exp.</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">10+</div>
                <div className="text-xs sm:text-sm text-gray-500">Technologies</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">50+</div>
                <div className="text-xs sm:text-sm text-gray-500">Projets</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <span className="text-xs text-gray-500">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
