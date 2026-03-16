import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export default function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-2"></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    
    const isPast = date < today;
    const isClosed = date.getDay() === 0; // Sunday
    const isDisabled = isPast || isClosed;
    const isSelected = selectedDate === dateString;

    days.push(
      <button
        key={i}
        disabled={isDisabled}
        onClick={() => onSelectDate(dateString)}
        type="button"
        className={`p-2 w-10 h-10 flex items-center justify-center rounded-sm text-sm transition-colors ${
          isSelected
            ? 'bg-obsidian text-canvas'
            : isDisabled
            ? 'text-obsidian/20 cursor-not-allowed'
            : 'hover:bg-obsidian/10 text-obsidian'
        }`}
      >
        {i}
      </button>
    );
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="w-full border border-obsidian/20 p-6 bg-transparent">
      <div className="flex justify-between items-center mb-6">
        <button type="button" onClick={prevMonth} className="p-2 hover:bg-obsidian/10 rounded-sm transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="font-semibold uppercase tracking-widest text-sm">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        <button type="button" onClick={nextMonth} className="p-2 hover:bg-obsidian/10 rounded-sm transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-4">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-xs font-semibold text-obsidian/50 uppercase tracking-wider">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 justify-items-center">
        {days}
      </div>
    </div>
  );
}
