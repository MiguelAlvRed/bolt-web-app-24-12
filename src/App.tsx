import { RestaurantSearch } from './components/restaurants/RestaurantSearch';
import { RestaurantMap } from './components/map/RestaurantMap';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="p-4 overflow-auto">
          <h1 className="text-4xl font-bold mb-8">
            Encuentra tu restaurante ideal en Madrid
          </h1>
          <RestaurantSearch />
        </div>
        <div className="relative">
          <RestaurantMap restaurants={[]} />
        </div>
      </main>
    </div>
  );
}

export default App;