import {Request, Response, NextFunction } from "express";
import Task from '../models/task.model';

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description } = req.body;
        const task = await Task.create( { title, description }); 
        res.status(201).json(task);
    } catch (err) {
        next(err);
    }
} 

export const getTasks = async ( req: Request, res: Response, next:NextFunction) => {
    try {
        const tasks = await Task.find().sort({createdAt: -1});
        res.json(tasks);
    } catch (err) {
        next(err);
    }
}

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const updated = await Task.findByIdAndUpdate(id, req.body, {new: true});
        if (!updated) return res.status(404).json({message: 'Task not found'});
        res.json(updated);
    } catch (err) {
        next(err);
    }
}

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deleted = await Task.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({message: 'Task not found'});
        res.json(deleted);
    } catch (err){
        next(err);
    }
}