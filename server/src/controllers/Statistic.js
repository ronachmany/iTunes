import StatisticModel from '../models/Statistic';


class StatisticController {

    static getTopTen(req, res){
        StatisticModel.find({}).limit(10).sort({count:-1}).then((topTen, err)=>{
            if(err){
                console.log(err)
            }
            return res.json(topTen);
        });
    }
}

export default StatisticController;