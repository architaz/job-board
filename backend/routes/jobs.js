import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

// Get all jobs (with filters)
router.get('/', async (req, res) => {
  const { location, tag } = req.query;
  const filters = {};
  
  if (location) filters.location = new RegExp(location, 'i');
  if (tag) filters.tags = tag;
  
  const jobs = await Job.find(filters);
  res.json(jobs);
});

// Post a new job
router.post('/', async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.status(201).json(newJob);
});