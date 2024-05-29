import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', ProductRoutes);

const getAController = async (req: Request, res: Response) => {
  const a = 'server is running';
  res.send(a);
};

app.get('/', getAController);

export default app;
