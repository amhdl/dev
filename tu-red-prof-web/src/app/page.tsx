import Layout from "./layout";
import HeroSection from "@/components/hero-section";
import {ProfessionalCard} from "@/components/professional-card";
import { SAMPLE_PROFESSIONALS } from "@/data/sample-data";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}
