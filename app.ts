import express from 'express';
import userRoutes from './app/src/routes/user.routes.js';
import { config } from './app/src/utils/config.js';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
