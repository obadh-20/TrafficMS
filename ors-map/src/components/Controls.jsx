//src/components/Controls.jsx
'use client';
import { Button } from '@/components/ui/button';

const Controls = ({ onStart, toggleShowTimes, showTimes }) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 p-4">
      <Button onClick={onStart} className="bg-blue-600 text-white hover:bg-blue-700">
        Select Route
      </Button>
      <Button
        variant="outline"
        onClick={toggleShowTimes}
        className="border border-gray-300 text-gray-700 hover:bg-gray-100"
      >
        {showTimes ? 'Hide Estimated Times' : 'Show Estimated Times'}
      </Button>
    </div>
  );
};

export default Controls;
