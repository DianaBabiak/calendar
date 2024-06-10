import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarToolbar } from '../calendarToolbar';
import { InfoEventModal } from '../infoEventModal';
import styles from './myCalendar.module.scss';
import { PreLoader } from "@/components/ui/preloader";
import { localizer } from "@/components/myCalendar/constants.ts";
import { CustomizedSnackbars } from "../customizedSnackbars";
import './myCalendare.css'
import { EventComponent } from "@/components/myCalendar/eventComponent";
import {useCalendarLogic} from "@/components/myCalendar/hooks/useCalendarLogic.ts";
import {AddEditEventModal} from "@/components/addEditEventModal";

export const MyCalendar = () => {
    const {
        events,
        loading,
        error,
        isOpenAddEditEvent,
        isOpenInfoEvent,
        selectedEvent,
        addEditModalTitle,
        setIsOpenAddEditEvent,
        setIsOpenInfoEvent,
        handleSelect,
        handleSelectEvent,
        handleAddEvent,
        handleDeleteEvent,
        handleCloseInfoEventModal,
        handleOpenEditModal,
        handleEditEvent
    } = useCalendarLogic()

    if (loading) {
        return <PreLoader />
    }

    return (
        <div className={styles.container}>
            <CustomizedSnackbars isOpen={!!error} error={error} />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
                culture="ru"
                selectable
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelect}
                components={{
                    toolbar: CalendarToolbar,
                    event: EventComponent,
                }}
            />
            {isOpenAddEditEvent && (
                <AddEditEventModal
                    open={isOpenAddEditEvent}
                    setOpen={setIsOpenAddEditEvent}
                    modalTitle={addEditModalTitle}
                    handleEvent={selectedEvent ? handleEditEvent : handleAddEvent}
                    selectedEvent={selectedEvent}
                />
            )}
            {isOpenInfoEvent && (
                <InfoEventModal
                    open={isOpenInfoEvent}
                    setOpen={setIsOpenInfoEvent}
                    event={selectedEvent}
                    handleDeleteEvent={handleDeleteEvent}
                    handleOpenEditModal={handleOpenEditModal}
                    handleClose={handleCloseInfoEventModal}
                />
            )}
        </div>
    )
}
