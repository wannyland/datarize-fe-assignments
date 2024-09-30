export interface ResponsePurchaseFrequency {
  count: number
  range: string
}

export interface RefinedChartData {
  labels: string[]
  data: number[]
}

export interface PeriodPurchaseFrequency {
  from: string | null
  to: string | null
}
