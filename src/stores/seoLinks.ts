import { defineStore } from 'pinia'
// TODO: add actions to store and config urls

export const useSeoLinksStore = defineStore('seoLinks', {
    state: () => ({
        // This data will be retrieved from BE
        sections: [
            {
                name: 'Section 1',
                url: '####',
            },
            {
                name: 'Section 2',
                url: '',
            },
            {
                name: 'Section 3',
                url: '',
            },
        ],
        popularRequests: [
            {
                name: 'Request 1',
                url: '',
            },
            {
                name: 'Request 2',
                url: '',
            },
            {
                name: 'Request 3',
                url: '',
            },
        ],
    }),
})
