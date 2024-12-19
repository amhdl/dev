export interface Professional {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image: string;
  rating: number;
  location: string;
  online: boolean;
  experience: string[];
  education: string[];
  specializations: string[];
  languages: string[];
  consultationTypes: {
    type: string;
    price: number;
  }[];
  availability: {
    day: string;
    hours: string[];
  }[];
}