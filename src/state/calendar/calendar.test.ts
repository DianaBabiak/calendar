import {Event, EventStatus} from "@/types/calendar.ts";
import {expect} from "@jest/globals";

describe('Event and EventStatus', () => {
    it('should have correct properties', () => {
        const event: Event = {
            id: '1',
            title: 'Meeting',
            start: new Date(),
            end: new Date(),
            isPay: false,
            status: EventStatus.Planned
        }
        expect(event.id).toEqual('1')
        expect(event.title).toEqual('Meeting')
    })

    it('should have correct values for EventStatus', () => {
        expect(EventStatus.Planned).toEqual('запланировано')
        expect(EventStatus.Conducted).toEqual('проведено')
    })
})