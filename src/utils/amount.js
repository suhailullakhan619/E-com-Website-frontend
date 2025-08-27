export function amount(indianrupee){
  let num=Number(indianrupee)
  return `₹${Math.floor((num/100)*87)}`
}