import Navbar from './components/navbar/navbar.jsx';
import Analytics from './components/analytics/Analytics.jsx';
import { useState } from 'react';

function App() {
  const [viewQuality, setViewQuality] = useState(false);

  const handleClick = () => {
    setViewQuality(!viewQuality);
  };

  return (

      <div className="min-h-screen">
      <Navbar />
      <div className='flex flex-col sm:flex-row justify-around items-center border-b'>
        <div className='flex flex-col items-center sm:items-center py-5'>
          <h2 className='text-xl font-bold mb-2 sm:mb-0 sm:mr-2'>Freight ID 1</h2>
          <p className='text-[#7B7B7B]'>ABC  6516154854</p>
        </div>
        <button className='bg-[#4F80E1] text-white rounded-md p-2 h-10 mb-4 sm:mb-0' onClick={handleClick}>Check Quality</button>
      </div>
      
      {viewQuality && (
        <div className='flex flex-col md:flex-row gap-4 m-4 justify-center items-center'>
          <Analytics title={"Present Quality Level"} />
          <Analytics title={"Expected Quality Level"} />
        </div>
      )}

      {viewQuality && (
        <div className="mb-4">
          <h2 className="text-center text-2xl font-bold">Acceptable Quality Level 63-68%</h2>
        </div>
      )}
    </div>
  );
}

export default App;
