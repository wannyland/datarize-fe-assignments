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

export interface ResponseCustomerPurChaseInfo {
  date: string
  price: number
  imgSrc: string
  product: string
  quantity: number
}
