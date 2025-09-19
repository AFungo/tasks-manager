import { Router } from 'express';
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/task.controller';

const router = Router();

router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
