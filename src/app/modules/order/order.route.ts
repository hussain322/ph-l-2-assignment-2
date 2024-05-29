import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

//for create order
router.post('/', OrderController.createOrder);
