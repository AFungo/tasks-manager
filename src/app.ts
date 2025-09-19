import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import tasksRouter from './routes/task.routes';


const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.get('/', (req, res) => res.json({ ok:true, message: 'API running'}));

app.use('/api/tasks', tasksRouter);

export default app;