import React from 'react';
import { Professional } from '../types/professional';
import { Star, Video, MapPin, GraduationCap, Award, Languages } from 'lucide-react';
import { ContactForm } from './contact-form';

interface ProfessionalDetailsProps {
  professional: Professional;
}

export function ProfessionalDetails({ professional }: ProfessionalDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="relative h-64 sm:h-80">
          <img
            src={professional.image}
            alt={professional.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h1 className="text-3xl font-bold">{professional.name}</h1>
            <p className="text-xl mt-2">{professional.specialty}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{professional.rating}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-1" />
                {professional.location}
              </div>
              {professional.online && (
                <div className="flex items-center text-green-600">
                  <Video className="h-5 w-5 mr-1" />
                  Consulta online disponible
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Sobre mí</h2>
              <p className="text-gray-600">{professional.description}</p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2" />
                Educación
              </h2>
              <ul className="space-y-2">
                {professional.education.map((edu, index) => (
                  <li key={index} className="text-gray-600">{edu}</li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Award className="h-6 w-6 mr-2" />
                Experiencia
              </h2>
              <ul className="space-y-2">
                {professional.experience.map((exp, index) => (
                  <li key={index} className="text-gray-600">{exp}</li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Languages className="h-6 w-6 mr-2" />
                Idiomas
              </h2>
              <div className="flex space-x-2">
                {professional.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Consultation Types */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Tipos de consulta</h3>
              <div className="space-y-3">
                {professional.consultationTypes.map((consultation, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{consultation.type}</span>
                    <span className="font-semibold">
                      ${consultation.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Disponibilidad</h3>
              <div className="space-y-3">
                {professional.availability.map((slot, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-700">{slot.day}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {slot.hours.map((hour, hourIndex) => (
                        <span
                          key={hourIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                        >
                          {hour}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Contactar</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}