import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidation } from './category.validation';
import { CategoryControllers } from './category.controller';
const router =express.Router()

router.post('/create-category',validateRequest(CategoryValidation.createCategoryValidation),CategoryControllers.createCategory)


export const CategoryRoutes=router