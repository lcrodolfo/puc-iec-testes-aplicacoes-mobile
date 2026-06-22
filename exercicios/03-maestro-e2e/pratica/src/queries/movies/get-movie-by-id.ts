// src/queries/movies/get-movie-by-id.ts
//
// CAMADA QUERIES — detalhe de 1 filme. Mock (sem rede).

import { useQuery } from '@tanstack/react-query';
import { getMovieByIdMock } from '@/mocks/movies';
import type { Movie } from '@/types/movie';

export const useMovieById = (id: number) =>
  useQuery<Movie | undefined>({
    queryKey: ['movie', id],
    queryFn: () => getMovieByIdMock(id),
    enabled: Number.isFinite(id),
  });
