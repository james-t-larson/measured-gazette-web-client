export interface ApiResponse<T> {
  message: string
  code: number
  data: T
}
