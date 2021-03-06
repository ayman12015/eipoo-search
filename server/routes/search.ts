import * as express from 'express';
const { Router } = require('express');
const path = require('path');
const { get } = require('axios');

const router: express.Router = Router();

router.get('*', (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  res.sendFile(path.resolve('../', 'build/index.html'));
});

router.post('/:query/:start?', async (req: express.Request, res: express.Response) => {
  const { query, start } = req.params;
  try {
    // get google api
    const { data: { items } } = await get(`
    https://www.googleapis.com/customsearch/v1?key=AIzaSyBexWro6lOuVcfmR5uSFvd-jVY8uee45OA&cx=000950167190857528722:vf0rypkbf0w&start=${start
      ? start
      : 10}&q=${encodeURI(query)}`);
     
    
    res.send(items);

    // get google api

    

  } catch (error) {
    console.error(error);
  }
});


export const SearchController = router;