const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.post('/', async (req, res) => {
  const job = new Job(req.body);
  const saved = await job.save();
  res.json(saved);
});

router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.put('/:id', async (req, res) => {
  const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
