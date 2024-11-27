import React, { useState } from "react";
import { ChevronUp } from 'lucide-react';

interface Genre {
  id: string;
  name: string;
}

interface GenresDropdownProps {
  genres: Genre[];
  selected: string[];
  onChange: (selectedGenreIds: string[]) => void;
}

export const GenresDropdown: React.FC<GenresDropdownProps> = ({
    genres,
    selected,
    onChange,
  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleGenre = (genreId: string) => {
    const newSelected = selected.includes(genreId)
      ? selected.filter((id) => id !== genreId)
      : [...selected, genreId];
    onChange(newSelected);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Label */}
      <span className="block text-white text-sm mb-1">Фільтрувати за:</span>

      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="bg-orange text-white px-4 py-2 rounded-xl flex items-center gap-7"
      >
        Жанр
        <span className={`transform ${isOpen ? "rotate-180" : ""}`}>
          <ChevronUp />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10">
          <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-700">
            {genres.map((genre) => (
              <div
                key={genre.id}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-700"
              >
                <input
                  type="checkbox"
                  id={`genre-${genre.id}`}
                  checked={selected.includes(genre.id)}
                  onChange={() => toggleGenre(genre.id)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor={`genre-${genre.id}`}
                  className="ml-2 cursor-pointer"
                >
                  {genre.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};