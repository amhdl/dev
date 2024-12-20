import { Search, MapPin, Calendar, Users } from "lucide-react";

export function SearchFilters() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Buscar especialista */}
        <div className="relative">
          <label htmlFor="search" className="sr-only">
            Buscar especialista
          </label>
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            id="search"
            type="text"
            placeholder="Buscar especialista..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Ubicación */}
        <div className="relative">
          <label htmlFor="location" className="sr-only">
            Ubicación
          </label>
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            id="location"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Ubicación</option>
            <option value="santiago">Santiago</option>
            <option value="valparaiso">Valparaíso</option>
            <option value="concepcion">Concepción</option>
          </select>
        </div>

        {/* Tipo de profesional */}
        <div className="relative">
          <label htmlFor="type" className="sr-only">
            Tipo de profesional
          </label>
          <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            id="type"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Tipo de profesional</option>
            <option value="psicologo">Psicólogo</option>
            <option value="terapeuta">Terapeuta</option>
            <option value="fonoaudiologo">Fonoaudiólogo</option>
          </select>
        </div>

        {/* Disponibilidad */}
        <div className="relative">
          <label htmlFor="availability" className="sr-only">
            Disponibilidad
          </label>
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            id="availability"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Disponibilidad</option>
            <option value="manana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="noche">Noche</option>
          </select>
        </div>
      </div>
    </div>
  );
}