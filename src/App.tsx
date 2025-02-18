const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-4">
        <h1 className="text-5xl font-bold">Mike's Sandbox</h1>
      </header>

      <div className="text-center w-full max-w-lg p-4">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RhaXNveDh0Z2x0ODdncGMzMXAzMG5rZnVza2kwajhsbWFrNnBxbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9qqKRsdsLxXnMrMwM1/giphy.gif" 
          alt="Rugrats" 
          className="w-64 h-auto mx-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default App;
