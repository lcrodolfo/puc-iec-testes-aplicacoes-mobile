// src/queries/movies/get-popular-movies.ts
//
// CAMADA QUERIES — lista de filmes populares.
// Atividade 3: dados MOCKADOS (sem rede, sem token) pra E2E determinístico.

import { useQuery } from '@tanstack/react-query';
import { getPopularMoviesMock } from '@/mocks/movies';
import type { Movie } from '@/types/movie';

export const usePopularMovies = () =>
  useQuery<Movie[]>({
    queryKey: ['movies', 'popular'],
    queryFn: () => getPopularMoviesMock(),
    staleTime: 1000 * 60 * 5,
  });
