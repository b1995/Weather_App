import places from 'places.js';
require('dotenv').config();

const placesAutocomplete = places({
        
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
