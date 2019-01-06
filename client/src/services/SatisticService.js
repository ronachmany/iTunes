import axios from 'axios';

class StatisticService {
    static async topTen(){
        return axios.get('http://localhost:5000/topTen');
    };
}

export default StatisticService;
