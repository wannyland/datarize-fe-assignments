import { baseAxios } from '../../config'
import { createUrlParam } from '../../function'
import { PeriodPurchaseFrequency } from '../../model/purchase'

const purchase = {
  getFrequency: async (r?: PeriodPurchaseFrequency) => {
    const req = createUrlParam(r)
    const response = await baseAxios.get(`purchase-frequency${req}`)

    return response.data
  },
}

export default purchase
