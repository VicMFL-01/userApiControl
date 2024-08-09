import { User } from "./user.interface";

export interface Pagination {
  page: number;
  per_page: number;
  results: User[];
  total: number;
  total_pages: number;
}
