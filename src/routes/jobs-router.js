import { Router } from 'express';
import { getReactDevelopers } from '../controllers/get-developers.js';

const router = Router();

router.get("/", async (req, res) => {
  const jobs = await getReactDevelopers(req.query.query);
  if (jobs) res.send(jobs);
  else res.status(404).end();
});

export default router;