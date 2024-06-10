export interface Event {
    id:string
    title: string
    start: Date
    end: Date
    isPay:boolean
    status: EventStatus
}

export enum EventStatus {
    Planned = 'запланировано',
    Conducted = 'проведено',
    Cancellation = 'отменено',
    Skip = 'пропущено',
    Available = 'доступно',
    Busy = 'занято'
}