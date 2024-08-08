import { Router } from "express";
import { UserRoutes } from "../module/User/user.route";
import { CategoryRoutes } from "../module/Category/category.route";
import { ProductRoutes } from "../module/Product/product.route";
import { OfferRoutes } from "../module/Offer/offer.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/offer",
    route: OfferRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
