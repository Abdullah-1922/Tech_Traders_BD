import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OfferServices } from "./offer.service";

const createOffer=catchAsync(
    async(req,res)=>{
        const result =await OfferServices.createOffer(req.body)


        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Offer created successfully",
            data: result,
          });


    }
)



export const OfferControllers={
    createOffer
}