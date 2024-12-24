import { useState } from 'react';
import { RestaurantFilters } from './RestaurantFilters';
import { RestaurantList } from './RestaurantList';
import { useGeolocation } from '../../lib/hooks/useGeolocation';
import { useFavorites } from '../../hooks/useFavorites';
import { useRestaurants } from '../../lib/hooks/useRestaurants';
import type { FilterState } from '../../lib/types';

const initialFilters: FilterState = {
  search: '',
  priceRange: [],
  cuisineTypes: [],
  dietaryOptions: [],
  atmosphere: [],
  radius: 5,
  rating: 0
};

export function RestaurantSearch() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const { location, loading: isLocating, requestLocation } = useGeolocation();
  const { favorites, toggleFavorite } = useFavorites();
  const { restaurants, loading, error } = useRestaurants(filters, location);

  return (
    <div className="space-y-6">
      <RestaurantFilters
        filters={filters}
        onFilterChange={setFilters}
        onLocationRequest={requestLocation}
        isLocating={isLocating}
      />

      {error ? (
        <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
          {error}
        </div>
      ) : (
        <RestaurantList
          restaurants={restaurants}
          favorites={favorites}
          onFavoriteToggle={toggleFavorite}
        />
      )}
    </div>
  );
}