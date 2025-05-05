import { useState } from "react";
import { Search, Star, Bell, ChevronRight, ChevronDown } from "lucide-react";

export default function CineMaxApp() {
  const [darkMode, setDarkMode] = useState(true);
  
  const topRatedMovies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      genre: "Drama",
      rating: "9.2",
      poster: "/api/placeholder/200/300",
      pg: "PG-13"
    },
    {
      id: 2,
      title: "The Godfather",
      genre: "Crime • Drama",
      rating: "9.2",
      poster: "/api/placeholder/200/300",
      pg: "PG-13"
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action • Crime",
      rating: "9.0",
      poster: "/api/placeholder/200/300",
      pg: "PG-13"
    },
    {
      id: 4,
      title: "Next Movie",
      genre: "",
      rating: "",
      poster: "",
      pg: ""
    }
  ];
  
  const actionMovies = [
    {
      id: 1,
      title: "The Man from Toronto",
      genre: "Action • Movie",
      rating: "4.8",
      poster: "/api/placeholder/220/130"
    },
    {
      id: 2,
      title: "Extraction",
      genre: "Action • Movie",
      rating: "4.6",
      poster: "/api/placeholder/220/130"
    },
    {
      id: 3,
      title: "Godzilla: King of the Monsters",
      genre: "Action • Movie",
      rating: "4.5",
      poster: "/api/placeholder/220/130"
    },
    {
      id: 4,
      title: "Jumanji: The Next Level",
      genre: "Action • Movie",
      rating: "4.8",
      poster: "/api/placeholder/220/130"
    }
  ];
  
  const moreActionMovies = [
    {
      id: 5,
      title: "Yaksha: Ruthless Operations",
      genre: "Action • Movie",
      rating: "4.8",
      poster: "/api/placeholder/220/130"
    },
    {
      id: 6,
      title: "Mechanic: Resurrection",
      genre: "Action • Movie",
      rating: "4.6",
      poster: "/api/placeholder/220/130"
    },
    {
      id: 7,
      title: "The Pirates: The Last Royal Treasure",
      genre: "Action • Movie",
      rating: "4.5",
      poster: "/api/placeholder/220/130"
    },
    {
      id: 8,
      title: "Underground",
      genre: "Action • Movie",
      rating: "4.6",
      poster: "/api/placeholder/220/130"
    }
  ];

  return (
    <div className="flex bg-black text-white min-h-screen">
      {/* Sidebar */}
      <div className="w-36 bg-black bg-opacity-50 flex-shrink-0 border-r border-gray-800">
        <div className="p-4">
          <h1 className="text-xl font-bold">CineMax</h1>
        </div>
        
        <div className="mt-8">
          <p className="text-xs text-gray-400 px-4 mb-2">MENU</p>
          <div className="space-y-2">
            <SidebarItem icon={<Search size={16} />} label="Discovery" />
            <SidebarItem icon={<Star size={16} fill="red" stroke="red" />} label="Top Rated" active />
            <SidebarItem icon={<Bell size={16} />} label="Coming Soon" />
          </div>
        </div>
        
        <div className="mt-8">
          <p className="text-xs text-gray-400 px-4 mb-2">LIBRARY</p>
          <div className="space-y-2">
            <SidebarItem icon={<Star size={16} />} label="Recent Played" />
            <SidebarItem icon={<Search size={16} />} label="Download" />
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center">
                <div className="w-4 h-4 mr-3 flex-shrink-0">
                  <Search size={16} />
                </div>
                <span className="text-sm">Dark Mode</span>
              </div>
              <ToggleSwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            </div>
            <SidebarItem icon={<Search size={16} />} label="Setting" />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <div className="flex space-x-8">
            <HeaderLink label="Movies" active />
            <HeaderLink label="Series" />
            <HeaderLink label="Animation" />
            <HeaderLink label="Genres" />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-gray-800 rounded-full p-2">
              <Search size={18} />
            </div>
            <button className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Subscribe
            </button>
            <div className="relative">
              <div className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 -right-1 text-xs">
                3
              </div>
              <Bell size={20} />
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-400 rounded-full overflow-hidden">
                <img src="/api/placeholder/32/32" alt="User Profile" className="w-full h-full object-cover" />
              </div>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
        </div>
        
        {/* Top Rated */}
        <div className="px-4 py-2">
          <h2 className="text-xl font-semibold mb-4">Top Rated</h2>
          <div className="relative">
            <div className="flex space-x-4 overflow-x-hidden">
              {topRatedMovies.map((movie, index) => (
                <div key={movie.id} className="relative flex-shrink-0">
                  {index < 3 && (
                    <div className="flex mb-4">
                      <div className="relative w-48 h-28 rounded-lg overflow-hidden">
                        <img 
                          src={movie.poster} 
                          alt={movie.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute top-2 left-2 text-5xl font-bold text-white opacity-60">
                          {movie.id}
                        </div>
                        {movie.pg && (
                          <div className="absolute top-2 right-2 text-xs px-1 bg-gray-800 bg-opacity-80 rounded">
                            {movie.pg}
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">{movie.title}</h3>
                        <p className="text-xs text-gray-400 mt-1">{movie.genre}</p>
                        <div className="flex items-center mt-1">
                          <Star size={14} fill="yellow" stroke="none" />
                          <span className="text-xs ml-1">{movie.rating}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Best of Action */}
        <div className="px-4 py-4">
          <h2 className="text-xl font-semibold mb-4">Best of Action</h2>
          <div className="relative">
            <div className="grid grid-cols-4 gap-4">
              {actionMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* More Action Movies */}
        <div className="px-4 py-2">
          <div className="relative">
            <div className="grid grid-cols-4 gap-4">
              {moreActionMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center px-4 py-2 ${active ? 'text-white' : 'text-gray-400'}`}>
      <div className="w-4 h-4 mr-3 flex-shrink-0">
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function HeaderLink({ label, active = false }) {
  return (
    <span className={`${active ? 'text-white' : 'text-gray-400'} cursor-pointer`}>
      {label}
    </span>
  );
}

function ToggleSwitch({ checked, onChange }) {
  return (
    <div 
      className={`w-10 h-5 rounded-full relative ${checked ? 'bg-red-600' : 'bg-gray-600'} cursor-pointer`}
      onClick={onChange}
    >
      <div 
        className={`w-4 h-4 rounded-full absolute top-0.5 transform transition-transform bg-white ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </div>
  );
}

function MovieCard({ movie }) {
  return (
    <div className="flex flex-col">
      <div className="w-full h-32 rounded-lg overflow-hidden mb-2">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-medium text-sm">{movie.title}</h3>
      <div className="flex items-center mt-1">
        <Star size={14} fill="yellow" stroke="none" />
        <span className="text-xs ml-1">{movie.rating}</span>
        <span className="text-xs text-gray-400 ml-2">{movie.genre}</span>
      </div>
    </div>
  );
}