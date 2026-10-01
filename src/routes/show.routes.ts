import { Router} from 'express'
import {listShows, deleteShows } from '../controllers/show.controller'


const router = Router()


router.get('/shows', listShows)
router.delete('/shows/:id', deleteShows)


export default router;