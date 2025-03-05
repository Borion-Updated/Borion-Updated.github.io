import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'

export function DownloadButton() {
  return (
    <Link 
      href="https://github.com/Borion-Updated/Releases/releases/latest/download/Borion.dll" 
      className="download-button inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-full font-bold transition-all duration-300 ease-in-out mb-8 hover:scale-105"
    >
      <FiDownload className="mr-2" />
      Download Borion.dll
    </Link>
  )
}
