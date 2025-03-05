import Image from 'next/image'
import Link from 'next/link'
import { DownloadButton } from '../components/DownloadButton'
import { InstallationGuide } from '../components/InstallationGuide'
import { FAQ } from '../components/FAQ'
import { Footer } from '../components/Footer'
import { GridBackground } from '../components/GridBackground'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      <GridBackground />
      <main className="flex-grow container mx-auto px-4 py-12 relative">
        <div className="max-w-4xl mx-auto">
          <div className="logo-section text-center py-8 bg-[#111111]/80 backdrop-blur-md rounded-lg border border-[#222222] p-8 mb-12">
            <Link href="/">
              <Image
                src="https://github.com/Borion-Updated/Borion-Updated.github.io/blob/master/img/banner.png?raw=true"
                alt="Borion Logo"
                width={300}
                height={150}
                className="mx-auto mb-8 transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <div className="description text-center text-[#E5E5E5] mb-8 max-w-2xl mx-auto">
              Borion-Updated is an updated version of <a href="https://github.com/horionclient/Horion" className="text-[#40E0FE] hover:text-[#7DEBFF]">Horion</a> and <a href="https://github.com/NRGJobro/Horion-Open-SRC" className="text-[#40E0FE] hover:text-[#7DEBFF]">Horion-Open-SRC</a>. Full credit goes to the original Horion developers and everyone who has contributed over the years for the base. We do NOT claim credit for the code of the base.
            </div>
          </div>

          <section className="download-section text-center py-8 bg-[#111111]/80 backdrop-blur-md rounded-lg border border-[#222222] p-8">
            <DownloadButton />
            <InstallationGuide />
            <FAQ />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

