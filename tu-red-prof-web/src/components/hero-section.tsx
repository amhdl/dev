import { SearchFilters } from './ui/search-filters';
import { Stethoscope } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
      {/* Fondo de cuadrícula */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Ícono */}
          <div className="flex justify-center mb-6">
            <Stethoscope className="h-16 w-16 text-white" aria-hidden="true" />
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Encuentra el profesional de salud ideal para ti
          </h1>

          {/* Descripción */}
          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Conectamos pacientes con los mejores profesionales clínicos.
            Encuentra especialistas cercanos y agenda tu consulta de manera fácil y segura.
          </p>

          {/* Filtros de búsqueda */}
          <SearchFilters />
        </div>
      </div>
    </section>
  );
}
