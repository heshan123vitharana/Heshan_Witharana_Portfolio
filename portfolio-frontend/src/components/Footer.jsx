import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/heshan123vitharana'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/heshan-witharana-7b3b3b1b3/'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:heshanwitharana@gmail.com'
    }
  ]

  return (
    <footer className="bg-dark-100 py-8 w-full">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[200px]">
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>
          
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-gray-400 text-sm text-center w-full">
              Made with ❤️ by Heshan Witharana
            </p>
            <p className="text-gray-500 text-xs mt-2 text-center w-full">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 