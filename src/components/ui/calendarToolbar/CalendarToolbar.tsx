import { ToolbarProps } from 'react-big-calendar';

export const CalendarToolbar = ({ label, onNavigate }:ToolbarProps) => {
    return (
        <div>
      <span >
        <button type="button" onClick={() => onNavigate('PREV')}>
          Назад
        </button>
          <span>{label}</span>
        <button type="button" onClick={() => onNavigate('NEXT')}>
          Вперед
        </button>
      </span>
            <span>
                <button type="button" onClick={() => onNavigate('TODAY')}>
                Сегодня
                </button>
                <button type="button" onClick={() => onNavigate('TODAY')}>
                ?
                </button>
            </span>
        </div>
    );
};
