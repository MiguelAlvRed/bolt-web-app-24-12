export interface FilterState {
  search: string;
  priceRange: number[];
  cuisineTypes: string[];
  dietaryOptions: string[];
  atmosphere: string[];
  radius: number;
  rating: number;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface MapState {
  center: Location;
  zoom: number;
}

export type Atmosphere = 'informal' | 'familiar' | 'romántico' | 'elegante' | 'moderno';