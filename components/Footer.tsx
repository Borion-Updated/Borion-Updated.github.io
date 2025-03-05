import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiYoutube, FiMessageCircle } from 'react-icons/fi'

const devTeam = [
  { name: 'White', discordId: '693904495154823221', image: 'https://github.com/Borion-Updated/Borion-Updated.github.io/raw/refs/heads/master/img/devs/White.webp' },
  { name: 'Intop', discordId: '1139179607501832292', image: 'https://github.com/Borion-Updated/Borion-Updated.github.io/raw/refs/heads/master/img/devs/Intop.webp' },
  { name: 'marioSQ', discordId: '749214011962425374', image: 'https://github.com/Borion-Updated/Borion-Updated.github.io/raw/refs/heads/master/img/devs/marioSQ.webp' },
  { name: 'notnrg', discordId: '1125189851667501177', image: 'https://github.com/Borion-Updated/Borion-Updated.github.io/raw/refs/heads/master/img/devs/notnrg.webp' },
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Borion-Updated', icon: FiGithub },
  { name: 'Discord', url: 'https://discord.gg/SSPHJfpxEx', icon: FiMessageCircle },
  { name: 'YouTube', url: 'https://www.youtube.com/@Borion-Updated', icon: FiYoutube },
]

export function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#222222] py-12 mt-12 w-full">
      <div className="footer-content flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto px-4 space-y-8 md:space-y-0">
        <div className="dev-team grid grid-cols-2 md:grid-cols-4 gap-6">
          {devTeam.map((dev) => (
            <Link 
              key={dev.name} 
              href={`https://discordapp.com/users/${dev.discordId}`} 
              target="_blank" 
              className="dev-profile flex flex-col items-center text-[#E5E5E5] hover:text-blue-400 transition-colors duration-300 group"
            >
              <div className="relative w-16 h-16 mb-2 rounded-full overflow-hidden group-hover:ring-2 group-hover:ring-blue-400 transition-all duration-300">
                <Image 
                  src={dev.image} 
                  alt={dev.name} 
                  layout="fill" 
                  objectFit="cover" 
                  className="transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <span className="text-sm">{dev.name}</span>
            </Link>
          ))}
        </div>
        <div className="social-links flex gap-6">
          {socialLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              className="social-link text-[#E5E5E5] hover:text-blue-400 transition-colors duration-300 group"
            >
              <link.icon size={24} className="transition-transform duration-300 group-hover:scale-125" />
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

