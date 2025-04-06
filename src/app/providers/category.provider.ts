
import {CategoryRepository} from "@domain/repositories/category.repository";
import {CategoryRepositoryImpl} from "@data/category/category.repository.impl";

export const categoryProvider  ={
  provide : CategoryRepository,
  useClass: CategoryRepositoryImpl
}
