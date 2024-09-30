import { baseAxios } from '../../config'
import { createUrlParam } from '../../function'
import { CustomerFilter } from '../../model/customer'

const customers = {
  getCustomers: async (r?: CustomerFilter) => {
    const req = createUrlParam(r)
    const response = await baseAxios.get(`customers${req}`)

    return response.data
  },

  getPurchaseInfo: async (id: number) => {
    const response = await baseAxios.get(`customers/${id}/purchases`)

    return response.data
  },
}

export default customers
