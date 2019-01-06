import axios from 'axios';
import StatisticModel from '../models/Statistic';


class SearchController {

    static getITunes(req, res) {
        const {search}  = req.params;
        const urlReq = `https://itunes.apple.com/search?term=${search}&limit=25&kind=song,musicVideo`;
        axios.get(urlReq)
            .then(function (response) {
                StatisticModel.updateOne({ search : search }, { $inc: { count: 1 } }, {upsert: true},function(err) {
                    if (err) {
                        console.log(err)
                    }
                    return res.json(response.data)
                })
            }).catch(function(err) {
                return res.json({'error': err})
            }
        )
    }

    static getTrack(req,res){
        const {trackId}  = req.params;
        const urlReq = `https://itunes.apple.com/lookup?id=${trackId}`;
        axios.get(urlReq)
            .then(function (response) {
                return res.json(response.data)
            }).catch(function(err) {
                return res.json({'error': err})
            }
        )
    }
}

export default SearchController;