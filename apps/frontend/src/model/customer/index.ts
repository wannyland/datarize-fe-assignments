export interface ResponseCustomers {
  count: number
  id: number
  name: string
  totalAmount: number
}

export interface CustomerFilter {
  sortBy: 'asc' | 'desc'
  name: string | undefined
}
