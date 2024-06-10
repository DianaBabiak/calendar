import {fetchEvents} from "@/state/calendar/calendarSlice.ts";
import { expect } from '@jest/globals'
import {appReducer, clearError, setError, setLanguage, setLoading} from "@/state/app/appSlice.ts";

describe('appReducer', () => {

    it('should handle setLoading', () => {
        expect(
            appReducer(undefined, {
                type: setLoading.type,
                payload: true
            })
        ).toEqual({
            loading: true,
            error: null,
            language: 'ru'
        })
    })

    it('should handle setError', () => {
        expect(
            appReducer(undefined, {
                type: setError.type,
                payload: 'Test error message'
            })
        ).toEqual({
            loading: false,
            error: 'Test error message',
            language: 'ru'
        })
    })

    it('should handle clearError', () => {
        expect(
            appReducer(
                {
                    loading: false,
                    error: 'Test error message',
                    language: 'ru'
                },
                {
                    type: clearError.type
                }
            )
        ).toEqual({
            loading: false,
            error: null,
            language: 'ru'
        })
    })

    it('should handle setLanguage', () => {
        expect(
            appReducer(undefined, {
                type: setLanguage.type,
                payload: 'en'
            })
        ).toEqual({
            loading: false,
            error: null,
            language: 'en'
        })
    })

    it('should handle pending actions', () => {
        expect(
            appReducer(undefined, {
                type: fetchEvents.pending.type
            })
        ).toEqual({
            loading: true,
            error: null,
            language: 'ru'
        })
    })

    it('should handle rejected actions', () => {
        expect(
            appReducer(undefined, {
                type: fetchEvents.rejected.type,
                error: {
                    message: 'Test error'
                }
            })
        ).toEqual({
            loading: false,
            error: 'Test error',
            language: 'ru'
        })
    })

    it('should handle fulfilled actions', () => {
        expect(
            appReducer(undefined, {
                type: fetchEvents.fulfilled.type
            })
        ).toEqual({
            loading: false,
            error: null,
            language: 'ru'
        })
    })
})
