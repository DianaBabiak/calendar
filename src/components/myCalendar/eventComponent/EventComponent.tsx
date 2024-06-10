import styles from "./eventComponent.module.scss";
import { Event, EventStatus } from "@/types/calendar.ts";
import { Icon } from "@/components/ui/icon";
import classNames from "classnames";

interface EventComponentProps {
    event: Event
}

export const EventComponent = ({ event }: EventComponentProps) => {
    const formattedStart = new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const formattedEnd = new Date(event.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const eventStatusClass = classNames(styles.customEvent, {
        [styles.planned]: event.status === EventStatus.Planned,
        [styles.conducted]: event.status === EventStatus.Conducted,
        [styles.cancellation]: event.status === EventStatus.Cancellation,
        [styles.skip]: event.status === EventStatus.Skip,
        [styles.available]: event.status === EventStatus.Available,
        [styles.busy]: event.status === EventStatus.Busy,
    });

    return (
        <div className={eventStatusClass}>
            <div className={styles.container}>
                <span className={styles.time}>{formattedStart} - {formattedEnd}</span>
                {!event.isPay && <Icon iconId={'redWallet'} width={'16'} height={'16'} />}
            </div>
            <span className={styles.title}>{event.title}</span>
        </div>
    )
}
