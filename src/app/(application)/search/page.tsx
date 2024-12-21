'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import UsersApi from '@/app/api/users/users-api';
import { Loader } from '@/components/common/components/Loader';
import { GenresDropdown } from '@/components/pages/search/GenresDropdown';
import { Switch } from '@/components/pages/search/Switch';
import { PerformerCard } from '@/components/pages/main/PerformerCard';
import { ProducerCard } from '@/components/pages/main/ProducerCard';
import { MoveLeft, MoveRight } from 'lucide-react';
import { Performer } from '@/app/api/performers/performers-api-types';
import { Producer } from '@/app/api/producers/producers-api-types';
import { producersApi } from '@/app/api/producers/producers-api';
import { performersApi } from '@/app/api/performers/performers-api';

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for genreIds, userType, pagination
  const [genreIds, setGenreIds] = useState<string[]>([]);
  const [userType, setUserType] = useState<'performer' | 'producer'>(
    'performer'
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch available genres from API
  const { data: genres, isLoading: genresLoading } = useQuery({
    queryKey: ['genres'],
    queryFn: async () => UsersApi.getgenres(),
    select: (data) => data,
  });

  // Synchronize URL params with state
  useEffect(() => {
    const queryGenreIds =
      searchParams
        .get('genreIds')
        ?.split(',')
        .filter((id) => id.trim() !== '') || [];
    const queryUserType = searchParams.get('userType') || 'performer';
    const queryPageNumber = Number(searchParams.get('pageNumber')) || 1;
    setGenreIds(queryGenreIds);
    setUserType(queryUserType as 'performer' | 'producer');
    setCurrentPage(queryPageNumber);
  }, [searchParams]);

  // Fetch filtered users with pagination
  const {
    data: users,
    isLoading: usersLoading,
    isError,
  } = useQuery({
    queryKey: ['users', { genreIds, userType, currentPage }],
    queryFn: async () => {
      const apiMap = {
        performer: performersApi.getAll,
        producer: producersApi.getAll,
      };

      const response = await apiMap[userType]({
        genreIds,
        pageSize: 10,
        pageNumber: currentPage,
      });

      setTotalPages(response.totalPages); // Set total pages from response
      return response;
    },
    select: (data) => data.data,
  });

  const handleGenreChange = (selectedGenres: string[]) => {
    const filteredGenres = selectedGenres.filter(
      (genreId) => genreId.trim() !== ''
    );

    setGenreIds(filteredGenres);

    const params = new URLSearchParams();
    if (filteredGenres.length > 0)
      params.set('genreIds', filteredGenres.join(','));
    params.set('userType', userType);

    router.push(`?${params.toString()}`);
  };

  const handleUserTypeToggle = (type: 'performer' | 'producer') => {
    const cleanedGenreIds = genreIds.filter((id) => id.trim() !== '');

    setUserType(type);
    router.push(`?genreIds=${cleanedGenreIds.join(',')}&userType=${type}`);
  };

  // Page change handlers
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      updateUrlPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      updateUrlPage(currentPage + 1);
    }
  };

  const updateUrlPage = (page: number) => {
    const params = new URLSearchParams();
    params.set('pageNumber', page.toString());
    params.set('genreIds', genreIds.join(','));
    params.set('userType', userType);
    router.push(`?${params.toString()}`);
  };

  if (genresLoading || usersLoading) return <Loader />;
  if (isError) return <div className='text-red-500'>Error loading data!</div>;

  return (
    <div className='w-full mt-2'>
      {/* Filter Row */}
      <div className='flex justify-between py-3 mx-[5%]'>
        {/* Genre Filter */}
        <GenresDropdown
          genres={genres || []}
          selected={genreIds}
          onChange={handleGenreChange}
        />

        {/* UserType Switch */}
        <Switch
          onLabel='Виконавці'
          offLabel='Продюсери'
          isOn={userType === 'performer'}
          onToggle={() =>
            handleUserTypeToggle(
              userType === 'performer' ? 'producer' : 'performer'
            )
          }
        />
      </div>

      {/* User Grid */}
      <div className='flex flex-wrap gap-[10px] mt-[2%] mx-[5%]'>
        {users?.map((user: Performer | Producer) => {
          if (userType === 'performer') {
            return (
              <div
                className='flex-grow basis-[calc(50%-1%)] sm:basis-[calc(50%-1%)]'
                key={user.id}
              >
                <PerformerCard performer={user} />
              </div>
            );
          } else {
            return (
              <div
                className='flex-grow basis-[calc(50%-10px)] sm:basis-[calc(50%-10px)]'
                key={user.id}
              >
                <ProducerCard producer={user} />
              </div>
            );
          }
        })}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center gap-[40%] my-10'>
        <button
          className='text-blue'
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <MoveLeft size={35} />
        </button>
        <button
          className='text-blue'
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <MoveRight size={35} />
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
