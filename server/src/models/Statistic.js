import mongoose from 'mongoose';

const StatisticSchema = new mongoose.Schema({
    search: String,
    count:{type:Number,default:0}
});

export default mongoose.model('Statistic', StatisticSchema);