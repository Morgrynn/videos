import axios from 'axios';

const KEY = 'AIzaSyDZQU3hKl9A_qjAi0H0e2p_ylP9tWbbMTY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})