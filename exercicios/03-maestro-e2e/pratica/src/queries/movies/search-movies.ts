// src/queries/movies/search-movies.ts
//
// CAMADA QUERIES — busca de filmes. Mock (filtra MOCK_MOVIES por título).

import { useQuery } from '@tanstack/react-query';
import { searchMoviesMock } from '@/mocks/movies';
import type { Movie } from '@/types/movie';

export const useSearchMovies = (query: string) =>
  useQuery<Movie[]>({
    queryKey: ['movies', 'search', query],
    queryFn: () => searchMoviesMock(query),
    enabled: query.trim().length >= 2,
    staleTime: 1000 * 30,
  });
