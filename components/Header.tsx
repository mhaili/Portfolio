'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Expériences', href: '#experience' },
  { name: 'Formation', href: '#education' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navigation.map(n => n.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass-effect-strong py-3'
          : 'bg-transparent py-4 md:py-5'
        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl overflow-hidden ring-2 ring-primary-500/50 group-hover:ring-primary-400 group-hover:scale-110 transition-all duration-300">
                <Image
                  src="/Portfolio/images/profile.jpg"
                  alt="Majda"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="text-lg sm:text-xl font-heading font-bold text-white">
              Majda<span className="text-gradient">.</span>
            </span>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 glass-effect rounded-full px-2 py-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 xl:px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${activeSection === item.href.replace('#', '')
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Desktop */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 xl:px-6 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 transition-all duration-300 text-sm"
          >
            Me contacter
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass-effect-strong rounded-2xl p-4 sm:p-6 animate-slide-up">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${activeSection === item.href.replace('#', '')
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium text-center"
              >
                Me contacter
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
