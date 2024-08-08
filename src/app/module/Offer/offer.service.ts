import { TOffer } from "./offer.interface"
import { Offer } from "./offer.model"

const createOffer= async(payload:Partial<TOffer>)=>{
const result = await Offer.create(payload)
return result
}





export const OfferServices={
    createOffer
}