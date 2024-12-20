import { FiInfo } from 'react-icons/fi'

export function InstallationGuide() {
  return (
    <div className="installation-guide bg-[#0A0A0A] rounded-lg p-8 mt-8 text-left border border-[#222222]">
      <h2 className="text-blue-400 mb-6 text-center text-2xl font-bold flex items-center justify-center">
        <FiInfo className="mr-2" />
        How to Install
      </h2>
      <ol className="list-decimal pl-8 space-y-4 text-[#E5E5E5]">
        <li>Download the latest <code className="bg-[#111111] px-2 py-1 rounded font-mono">Borion.dll</code> from the button above.</li>
        <li>Ensure you have Minecraft Bedrock Edition installed and running.</li>
        <li>Use a dll loader like <a href="https://github.com/fligger/FateInjector" className="text-blue-400 hover:text-blue-300">FateInjector</a> or <a href="https://horion.download/" className="text-blue-400 hover:text-blue-300">Horion Injector</a> by right-clicking "inject"</li>
        <li>Enjoy!</li>
      </ol>
      <p className="text-center text-red-400 mt-8 bg-[#111111] py-2 px-4 rounded-md inline-block">
        ⚠️ Use at your own risk. Modifying the game clients may violate the <a href="https://www.minecraft.net/en-us/eula" className="text-blue-400 hover:text-blue-300">terms of service</a>.
      </p>
    </div>
  )
}

