import Image from 'next/image';
import { Star, Video, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProfessionalCardProps {
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

export function ProfessionalCard({ professional, className }: ProfessionalCardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-md overflow-hidden", className)}>
      <div className="flex flex-col md:flex-row md:gap-4">
        {/* Imagen */}
        <div className="md:w-1/3">
          <Image
            src={professional.image}
            alt={professional.name}
            width={300}
            height={300}
            className="h-48 w-full object-cover md:h-full"
            priority
          />
        </div>

        {/* Contenido */}
        <div className="p-6 md:w-2/3">
          {/* Encabezado */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{professional.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{professional.specialty}</p>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" aria-hidden="true" />
              <span className="ml-1 text-sm text-gray-600">{formatRating(professional.rating)}</span>
            </div>
          </div>

          {/* Descripción */}
          <p className="mt-3 text-gray-600 text-sm">{professional.description}</p>

          {/* Información adicional */}
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
              {professional.location}
            </div>
            {professional.online && (
              <div className="flex items-center text-sm text-green-600">
                <Video className="h-4 w-4 mr-1" aria-hidden="true" />
                Consulta online
              </div>
            )}
          </div>

          {/* Botón */}
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label={`Ver perfil de ${professional.name}`}
          >
            Ver perfil
          </button>
        </div>
      </div>
    </div>
  );
}
