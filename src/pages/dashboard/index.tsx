import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <h1 className='text-5xl font-bold mb-6'>Mike's Sandbox</h1>
      <img
        src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RhaXNveDh0Z2x0ODdncGMzMXAzMG5rZnVza2kwajhsbWFrNnBxbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9qqKRsdsLxXnMrMwM1/giphy.gif'
        alt='Rugrats'
        className='h-auto mx-auto rounded-lg mb-6'
      />
      <Link
        to='/champions'
        className='mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-blue-600'
      >
        View Champions
      </Link>
    </div>
  );
};
