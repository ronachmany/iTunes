import {Router} from 'express';
import SearchController from '../controllers/Search';
const router = Router();

router.route('/search/:search')
    .get(SearchController.getITunes);

router.route('/getTrack/:trackId')
    .get(SearchController.getTrack);

export default router;