import {Router} from 'express';
import StatisticController from '../controllers/Statistic';
const router = Router();


router.route('/topTen')
    .get(StatisticController.getTopTen);

export default router;