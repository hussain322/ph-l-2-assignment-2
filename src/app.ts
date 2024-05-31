import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/order/order.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

// main route
app.get('/', (req: Request, res: Response) => {
  res.send('server is running.......');
});
// Not found route
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route Not Found',
  });
});

export default app;
