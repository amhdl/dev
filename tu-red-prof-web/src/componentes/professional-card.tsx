import React from 'react';
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

export function ProfessionalCard({ professional, className }: ProfessionalCardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-md overflow-hidden", className)}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={professional.image}
            alt={professional.name}
            className="h-48 w-full object-cover md:h-full"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{professional.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{professional.specialty}</p>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">{professional.rating}</span>
            </div>
          </div>
          
          <p className="mt-3 text-gray-600 text-sm">{professional.description}</p>
          
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {professional.location}
            </div>
            {professional.online && (
              <div className="flex items-center text-sm text-green-600">
                <Video className="h-4 w-4 mr-1" />
                Consulta online
              </div>
            )}
          </div>
          
          <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Ver perfil
          </button>
        </div>
      </div>
    </div>
  );
}