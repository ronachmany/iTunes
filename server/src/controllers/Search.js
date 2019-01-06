import axios from 'axios';
import StatisticModel from '../models/Statistic';


class SearchController {

    static async getITunes(req, res) {
        const {search}  = req.params;
        const urlReq = `https://itunes.apple.com/search?term=${search}&limit=25&kind=song,musicVideo`;
        const response = await axios.get(urlReq);
        StatisticModel.updateOne({ search : search }, { $inc: { count: 1 } }, {upsert: true},() =>{
            return res.json(response.data)
        });
    }

    static async getTrack(req,res){
        const {trackId}  = req.params;
        const urlReq = `https://itunes.apple.com/lookup?id=${trackId}`;
        const response = await axios.get(urlReq);
        return res.json(response.data);
    }
}

export default SearchController;