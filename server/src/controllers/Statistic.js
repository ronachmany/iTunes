import StatisticModel from '../models/Statistic';


class StatisticController {

    static async getTopTen(req, res){
        const topTen = await StatisticModel.find({}).limit(10).sort({count:-1});
        return res.json(topTen);
    }
}

export default StatisticController;