import { Router } from 'express';
import { getDevelopersById } from '../controllers/get-developers.js';

const router = Router();

router.get("/", async (req, res) => {
  const jobs = await getDevelopersById(req.query.job_id);
  if (jobs) res.send(jobs);
  else res.status(404).end();
});

export default router;