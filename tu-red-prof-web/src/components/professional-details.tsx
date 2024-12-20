import Image from 'next/image';
import Link from 'next/link';
import { Star, Video, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProfessionalDetailsProps {
  professional: {
    id: string;
    name: string;
    specialty: string;
    description: string;
    image: string;
    rating: number;
    location: string;
    online: boolean;
  };
  className?: string;
}

function formatRating(rating: number) {
  return rating.toFixed(1);
}

export function ProfessionalDetails({ professional, className }: ProfessionalDetailsProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-lg overflow-hidden", className)}>
      <div className="flex flex-col md:flex-row md:gap-6">
        {/* Imagen */}
        <div className="md:w-1/3">
          <Image
            src={professional.image}
            alt={professional.name}
            width={400}
            height={400}
            className="h-64 w-full object-cover md:h-full"
            priority
          />
        </div>

        {/* Contenido principal */}
        <div className="p-6 md:w-2/3">
          {/* Encabezado */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{professional.name}</h1>
              <p className="text-sm text-blue-600 font-medium">{professional.specialty}</p>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
              <span className="ml-1 text-sm text-gray-600">{formatRating(professional.rating)}</span>
            </div>
          </div>

          {/* Descripción */}
          <p className="mt-4 text-gray-700 text-sm">{professional.description}</p>

          {/* Información adicional */}
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li>
              <MapPin className="h-4 w-4 mr-1 inline" aria-hidden="true" /> {professional.location}
            </li>
            {professional.online && (
              <li className="text-green-600 flex items-center">
                <Video className="h-4 w-4 mr-1" aria-hidden="true" /> Consulta online disponible
              </li>
            )}
          </ul>

          {/* Testimonios */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">Testimonios</h2>
            <p className="text-gray-600 text-sm italic mt-2">
              "Excelente profesional, siempre atento y resolutivo."
            </p>
          </div>

          {/* Botón */}
          <Link href={`/professional/${professional.id}`}>
            <button
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              aria-label={`Ver perfil completo de ${professional.name}`}
            >
              Ver perfil completo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
