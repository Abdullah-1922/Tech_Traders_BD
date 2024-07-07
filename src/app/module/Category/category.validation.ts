import { z } from "zod";

const createCategoryValidation =z.object({
    body:z.object({
        name:z.string({required_error:'Category name required'}),
        subcategories:z.array(z.string({required_error:'subcategory is required'}))
    })
})
export const CategoryValidation={
    createCategoryValidation
}