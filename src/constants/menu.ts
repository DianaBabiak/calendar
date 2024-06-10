import { MenuItem } from "@/types/menu";

export const MENU_ITEMS: MenuItem[] = [
    {
        name: 'menu.home',
        iconId: 'home',
        url: '/',
        isDisabled: false
    },
    {
        name: 'menu.calendar',
        iconId: 'calendar',
        url: '/calendar',
        isDisabled: false
    },
    {
        name: 'menu.payments',
        iconId: 'wallet',
        url: '/*',
        isDisabled: true
    },
    {
        name: 'menu.achievements',
        iconId: 'cup',
        url: '/*',
        isDisabled: true
    },
    {
        name: 'menu.simulators',
        iconId: 'simulators',
        url: '/*',
        isDisabled: true
    },
    {
        name: 'menu.library',
        iconId: 'folder',
        url: '/*',
        isDisabled: true
    },
    {
        name: 'menu.connectivity_check',
        iconId: 'customer',
        url: '/*',
        isDisabled: true
    },
    {
        name: 'menu.settings',
        iconId: 'settings',
        url: '/*',
        isDisabled: true
    },
    {
        name: 'menu.questions',
        iconId: 'question',
        url: '/*',
        isDisabled: true
    }
];