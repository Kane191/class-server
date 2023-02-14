import express from 'express';
import data from './data.js';
import singleData from './business.js';

const router = express.Router();

router.get('/', async (req, res)=> {
    res.send(data);
});
router.get('/:id', async (req, res)=> {
    // console.log(req.params.id)
    res.send(singleData[req.params.id]? singleData[req.params.id] : {message: 'No restaurant found'});
});

export default router;