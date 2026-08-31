import { z } from "zod/v3";


export const pingSchema = z.object({
    message : z.string(),
})

