import { Router } from 'express';

import swaggerSpec from './utils/swagger';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import articleRoutes from './routes/articleRoutes';
import * as verification from './middlewares/verification';

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api/swagger.json
 */
router.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

/**
 * GET /api
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/auth', authRoutes);
router.use('/users', verification.verifyToken, userRoutes);
router.use('/articles', articleRoutes);

export default router;
