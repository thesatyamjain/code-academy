import HeroScene from "./components/3d/HeroScene";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* 3D Background */}
      <HeroScene />

      {/* Glass Overlay Content */}
      <div className="z-10 text-center space-y-6 p-8 glass-panel rounded-2xl max-w-2xl mx-4">
        <h1 className="text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cyber-text-glow">
          CODE ACADEMY
        </h1>

        <p className="text-xl text-muted font-sans tracking-wide">
          FROM ZERO TO MASTER. <br />
          <span className="text-white font-bold">THE CYBER ACADEMY AWAITS.</span>
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <Link
            href="/dashboard"
            className="px-8 py-4 bg-primary text-black font-bold font-mono rounded hover:bg-white transition-all transform hover:scale-105 cyber-border shadow-[0_0_20px_rgba(0,243,255,0.5)]"
          >
            [ ENTER SYSTEM ]
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 bg-transparent border border-gray-700 text-gray-300 font-mono rounded hover:border-white hover:text-white transition-all"
          >
            / ABOUT
          </Link>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-4 left-4 text-xs font-mono text-gray-600">
        SYSTEM_STATUS: ONLINE<br />
        VER: 2.0.0
      </div>
    </main>
  );
}
