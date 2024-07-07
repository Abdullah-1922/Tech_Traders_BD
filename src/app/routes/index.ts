import { Router } from 'express';
import { UserRoutes } from '../module/User/user.route';
import { CategoryRoutes } from '../module/Category/category.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  }, {
    path:'/categories',
    route:CategoryRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));  

export default router;