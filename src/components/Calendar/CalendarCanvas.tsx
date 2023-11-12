import React from 'react';
import Calendar from 'react-calendar';
type CalendarCanvasProps = {};

const CalendarCanvas: React.FC<CalendarCanvasProps> = () => {
  return (
    <div className='flex min-w-0 justify-center w-96 h-full shrink-1'>
      <Calendar className='flex flex-col justify-center border-solid border-dark-layer-2 border-2' />
    </div>
  );
};
export default CalendarCanvas;
