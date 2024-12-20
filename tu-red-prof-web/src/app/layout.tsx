import HeroSection from "@/components/hero-section";
import {ProfessionalCard} from "@/components/professional-card";
import {ProfessionalDetails} from "@/components/professional-details";
import { SAMPLE_PROFESSIONALS } from "@/data/sample-data";
import { Stethoscope } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Stethoscope className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">TuRedProfesional</span>
        </Link>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Profesionales Destacados
        </h2>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {SAMPLE_PROFESSIONALS.map((professional) => (
            <Link key={professional.id} href={`/professional/${professional.id}`}>
              <ProfessionalCard professional={professional} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {children}
    </div>
  );
}
