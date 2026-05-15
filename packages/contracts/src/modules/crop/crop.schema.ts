import { z } from "zod"

export const cropSchema = z.object({
  id: z.number(),
  farmerID: z.string(),
  parcelID: z.string(),
  cropType: z.string(),
  variety: z.string(),
  plantingDate: z.date(),
  expectedHarvestDate: z.date().optional(),
  plantedArea: z.number(),
  expectedYield: z.number().optional(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Crop = z.infer<typeof cropSchema>