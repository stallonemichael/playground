const App = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800 p-4'>
      <div className='size-96 grid grid-cols-2 sm:grid-cols-3 gap-2'>
        {/* <header className='text-center mb-4'>
        <h1 className='text-5xl font-bold'>Mike's Sandbox</h1>
      </header>

      <div className='text-center w-full max-w-lg p-4'>
        <img
          src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RhaXNveDh0Z2x0ODdncGMzMXAzMG5rZnVza2kwajhsbWFrNnBxbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9qqKRsdsLxXnMrMwM1/giphy.gif'
          alt='Rugrats'
          className='h-auto mx-auto rounded-lg'
        /> */}
        <div className='bg-green-300 rounded-md col-span-2'></div>
        <div className='bg-red-300 rounded-md'></div>
        <div className='bg-blue-300 rounded-md row-span-2'></div>
        <div className='bg-pink-300 rounded-md'></div>
        <div className='bg-yellow-300 rounded-md'></div>
        <div className='bg-purple-300 rounded-md'></div>
        <div className='bg-emerald-300 rounded-md'></div>
        <div className='bg-orange-300 rounded-md'></div>
        <div className='bg-cyan-300 rounded-md'></div>
        <div className='bg-lime-300 rounded-md'></div>
      </div>
    </div>
  );
};

export default App;
