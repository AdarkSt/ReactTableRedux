export const createUrl = (params={}) => {

   const obj = {
       page: params.page,
       sort: params.sort.field,
       order: params.sort.order,
       [params.search.field]:params.search.value
   }

   const queryParametrs = Object.keys(obj).map(key => `${key}=${obj[key]}`)
   const stringQuery = queryParametrs.join("&")
   return stringQuery
}