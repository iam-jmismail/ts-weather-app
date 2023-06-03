export interface AxiosError {
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: AxiosError | null;
}

export type ApiResponseData = {
  status: "SUCCESS" | "ERROR" | "NOT_FOUND" | "UNAUTHORIZED" | "FORBIDDEN";
  message?: string | null;
  data?: any;
};

export interface JPH_Posts {
  title: string;
  body: string;
  user_id: number;
  id: number;
}
