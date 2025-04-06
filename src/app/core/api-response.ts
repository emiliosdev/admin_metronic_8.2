export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  errors?: string[];
  timestamp?: string;
  code: "0" | "1" | "2"
  message: string
  payload: T
  titleSms?: string
}


export function isApiResponse(object: unknown | object): object is ApiResponse {
  if (object !== null && typeof object === 'object') {
    return 'code'! in object;
  }
  return false;
}


export interface PaginatedResponse<T> extends ApiResponse {
  data: {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}
