import { z } from "zod";
import { isStartDateBeforeOrEqualToEndDate, validateAndParseDate } from "./offer.utils";


const createOfferValidation = z.object({
  body: z.object({
    offerStartDate: z.string().refine((val) => {
      try {
        validateAndParseDate(val);
        return true;
      } catch (e) {
        return false;
      }
    }, {
      message: "Invalid offerStartDate format or value",
    }),
    offerEndDate: z.string().refine((val) => {
      try {
        validateAndParseDate(val);
        return true;
      } catch (e) {
        return false;
      }
    }, {
      message: "Invalid offerEndDate format or value",
    }),
    offerTitle: z.string(),
    offerDescription: z.string(),
    extraMessage: z.string(),
    offerBannerImage: z.string(),
  }).refine((data) => {
    try {
      return isStartDateBeforeOrEqualToEndDate(data.offerStartDate, data.offerEndDate);
    } catch {
      return false;
    }
  }, {
    message: "offerStartDate must be before or equal to offerEndDate",
    path: ["offerStartDate", "offerEndDate"],
  }),
});
export const offerValidation={
  createOfferValidation
}
