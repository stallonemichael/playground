import React from 'react';
import { clsx } from 'clsx';

import { champions } from '../../data/champions';

export const ChampionCard: React.FC<{
  champion: (typeof champions)[0];
  isLatest?: boolean;
}> = ({ champion, isLatest }) => {
  return (
    <div
      className={clsx(
        'bg-gray-100 shadow-lg rounded-2xl p-4 flex flex-col items-center text-center',
        'transition-transform duration-300 hover:scale-105',
        isLatest
          ? 'border-8 border-transparent border-l-green-500 border-t-white border-b-white border-r-red-500'
          : 'border-8 border-gray-100',
      )}
    >
      <img src={champion.logo} alt={champion.team} className='w-22 h-22 mb-3' />
      <h2 className='text-xl font-semibold'>{champion.team}</h2>
      <p className='text-gray-500'>{champion.year}</p>
      <div className='mt-2 text-sm text-gray-600'>
        <p>Points: {champion.stats.points}</p>
        <p>
          Wins: {champion.stats.wins} | Draws: {champion.stats.draws} | Losses:{' '}
          {champion.stats.losses}
        </p>
      </div>
    </div>
  );
};
