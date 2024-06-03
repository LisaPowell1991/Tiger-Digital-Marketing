import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'Sc8EF-Nlvo9teTJ29GHah1sEu09DHz-rsy5sOGvhus4';

const unsplashApi = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
});

export const searchPhotos = async (query) => {
    try {
        const response = await unsplashApi.get('search/photos', {
            params: { query, per_page: 10 },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data from Unsplash API', error);
        return [];
    }
};
