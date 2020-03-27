import places from 'places.js';

const placesAutocomplete = places({
        appId: 'pl28GZ43HAHB',
        apiKey: '5ccc6a9ecd155eff0707f0977fd12564',
        container: document.querySelector('#address-input'),
        templates: {
                value(suggestion) {
                        return suggestion.name;
                },
        },
}).configure({
        type: 'city',
});

export default placesAutocomplete;
