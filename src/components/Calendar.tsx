import React, { useState } from 'react';
import { format, startOfWeek, addDays, startOfDay, addHours, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const timeSlots = Array.from({ length: 9 }, (_, i) => addHours(startOfDay(new Date()), i + 9));

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);

  const startDate = startOfWeek(currentDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

  const handlePreviousWeek = () => {
    setCurrentDate(addDays(currentDate, -7));
  };

  const handleNextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const handleSlotSelect = (date: Date, time: Date) => {
    const slot = addHours(date, time.getHours());
    setSelectedSlot(slot);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Schedule Appointment</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePreviousWeek}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <span className="text-lg font-medium text-gray-900">
            {format(weekDays[0], 'MMM d')} - {format(weekDays[6], 'MMM d, yyyy')}
          </span>
          <button
            onClick={handleNextWeek}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-1"></div>
        {weekDays.map((day) => (
          <div key={day.toString()} className="text-center">
            <div className="font-medium text-gray-900">{format(day, 'EEE')}</div>
            <div className="text-sm text-gray-500">{format(day, 'd')}</div>
          </div>
        ))}

        {timeSlots.map((time) => (
          <React.Fragment key={time.toString()}>
            <div className="flex items-center justify-end pr-4">
              <span className="text-sm text-gray-500">{format(time, 'h:mm a')}</span>
            </div>
            {weekDays.map((day) => {
              const isSelected = selectedSlot && isSameDay(day, selectedSlot) && time.getHours() === selectedSlot.getHours();
              return (
                <button
                  key={`${day}-${time}`}
                  onClick={() => handleSlotSelect(day, time)}
                  className={`
                    p-4 rounded-lg border transition-colors
                    ${isSelected
                      ? 'bg-[#4567b7] text-white border-[#4567b7]'
                      : 'hover:bg-gray-50 border-gray-200'
                    }
                  `}
                >
                  {isSelected && (
                    <Clock className="h-5 w-5 mx-auto" />
                  )}
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {selectedSlot && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Selected Time Slot</h3>
          <p className="text-gray-600">
            {format(selectedSlot, 'EEEE, MMMM d, yyyy')} at {format(selectedSlot, 'h:mm a')}
          </p>
          <button
            className="mt-4 w-full bg-[#4567b7] text-white py-2 px-4 rounded-lg hover:bg-[#3a569e] transition-colors"
            onClick={() => {
              // Add booking logic here
              alert('Appointment booked successfully!');
              setSelectedSlot(null);
            }}
          >
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default Calendar;