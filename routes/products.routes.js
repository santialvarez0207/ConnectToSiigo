import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../services/products.service.js';

const router = Router();

/* Listar todos */
router.get('/', async (req, res, next) => {
  try {
    const data = await getAllProducts();
    res.json(data);
  } catch (err) { next(err); }
});

/* Obtener uno */
router.get('/:id', async (req, res, next) => {
  try {
    const data = await getProductById(req.params.id);
    res.json(data);
  } catch (err) { next(err); }
});

/* Crear */
router.post('/', async (req, res, next) => {
  try {
    const data = await createProduct(req.body);
    res.status(201).json(data);
  } catch (err) { next(err); }
});

/* Actualizar */
router.put('/:id', async (req, res, next) => {
  try {
    const data = await updateProduct(req.params.id, req.body);
    res.json(data);
  } catch (err) { next(err); }
});

/* Eliminar */
router.delete('/:id', async (req, res, next) => {
  try {
    const data = await deleteProduct(req.params.id);
    res.json(data);
  } catch (err) { next(err); }
});

export default router;