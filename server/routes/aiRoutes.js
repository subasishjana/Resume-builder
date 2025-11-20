import express from 'express'
import protect from '../middlewares/authMiddleware.js';
import { enhanceJobDescription, enhanceProsessionSummary, upLoadResume } from '../controllers/aiController.js';



const aiRouter = express.Router();

aiRouter.post('/enhance-pro-sum', protect, enhanceProsessionSummary)

aiRouter.post('/enhance-job-desc', protect, enhanceJobDescription)

aiRouter.post('/upload-resume', protect, upLoadResume)

export default aiRouter