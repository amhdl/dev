import { Professional } from '../types/professional';

export const SAMPLE_PROFESSIONALS: Professional[] = [
  {
    id: '1',
    name: 'Dra. Ana Martínez',
    specialty: 'Psicóloga Clínica',
    description: 'Especialista en terapia cognitivo-conductual con más de 10 años de experiencia en tratamiento de ansiedad y depresión.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    location: 'Santiago Centro',
    online: true,
    experience: [
      'Directora de Clínica Psicológica Bienestar (2018-presente)',
      'Psicóloga Senior en Hospital San José (2012-2018)',
      'Investigadora asociada en Universidad de Chile (2010-2012)'
    ],
    education: [
      'Doctorado en Psicología Clínica, Universidad de Chile',
      'Máster en Terapia Cognitivo-Conductual, Universidad Católica',
      'Licenciatura en Psicología, Universidad de Chile'
    ],
    specializations: [
      'Terapia Cognitivo-Conductual',
      'Tratamiento de Ansiedad y Depresión',
      'Terapia de Pareja',
      'Manejo del Estrés'
    ],
    languages: ['Español', 'Inglés'],
    consultationTypes: [
      { type: 'Consulta Online', price: 45000 },
      { type: 'Consulta Presencial', price: 50000 }
    ],
    availability: [
      { day: 'Lunes', hours: ['09:00', '11:00', '15:00', '17:00'] },
      { day: 'Miércoles', hours: ['10:00', '14:00', '16:00'] },
      { day: 'Viernes', hours: ['09:00', '11:00', '15:00'] }
    ]
  },
  {
    id: '2',
    name: 'Dr. Carlos Ruiz',
    specialty: 'Terapeuta Ocupacional',
    description: 'Experto en rehabilitación física y neurológica. Enfoque en recuperación funcional y adaptación del entorno.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    location: 'Providencia',
    online: true,
    experience: [
      'Director de Rehabilitación en Centro Médico Providencia (2015-presente)',
      'Terapeuta Senior en Clínica Las Condes (2010-2015)'
    ],
    education: [
      'Máster en Neurorehabilitación, Universidad de Barcelona',
      'Licenciatura en Terapia Ocupacional, Universidad de Chile'
    ],
    specializations: [
      'Rehabilitación Neurológica',
      'Terapia de Mano',
      'Rehabilitación Vestibular',
      'Ergonomía Laboral'
    ],
    languages: ['Español'],
    consultationTypes: [
      { type: 'Evaluación Inicial', price: 55000 },
      { type: 'Sesión de Terapia', price: 45000 }
    ],
    availability: [
      { day: 'Martes', hours: ['08:00', '10:00', '14:00', '16:00'] },
      { day: 'Jueves', hours: ['09:00', '11:00', '15:00'] }
    ]
  }
];