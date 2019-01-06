import axios from 'axios';

class TrackService {
    static async search(search){
        return axios.get(`http://localhost:5000/search/${search}`);
    };

    static async getTrack(trackId){
        return await axios.get(`http://localhost:5000/getTrack/${trackId}`);
    }
}

export default TrackService;
