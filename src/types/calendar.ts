export interface Event {
    id: string
    title: string
    start: Date
    end: Date
    isPay: boolean
    status: EventStatus
}

export enum EventStatus {
    Planned = 'Planned',
    Conducted = 'Conducted',
    Cancellation = 'Cancellation',
    Skip = 'Skip',
    Available = 'Available',
    Busy = 'Busy'
}

export const EVENT_STATUS: Record<EventStatus, string> = {
    [EventStatus.Planned]: 'запланировано',
    [EventStatus.Conducted]: 'проведено',
    [EventStatus.Cancellation]: 'отменено',
    [EventStatus.Skip]: 'пропущено',
    [EventStatus.Available]: 'доступно',
    [EventStatus.Busy]: 'занято'
}