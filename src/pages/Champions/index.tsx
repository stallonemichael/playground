import React from 'react';
import { Link } from 'react-router-dom';
import { ChampionCard } from '../../components/ChampionCard';
import { champions } from '../../data/champions';

const SerieAChampionsGrid: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold text-center mb-6'>
        🇮🇹 Serie A Champions (Last 9 Seasons) 🇮🇹
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6'>
        {champions.map((champ, index) => (
          <ChampionCard
            key={champ.year}
            champion={champ}
            isLatest={index === 0}
          />
        ))}
      </div>

      {/* <div className='flex flex-wrap justify-center gap-y-6 mb-6 w-full'>
        {champions.map((champ, index) => (
          <div
            key={champ.year}
            className='flex justify-center items-center w-full sm:w-1/2 md:w-1/3'
          >
            <ChampionCard champion={champ} isLatest={index === 0} />
          </div>
        ))}
      </div> */}

      <div className='text-center'>
        <Link
          to='/'
          className='inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-blue-600'
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default SerieAChampionsGrid;
