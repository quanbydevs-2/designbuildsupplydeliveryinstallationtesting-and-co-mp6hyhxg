import { z } from "zod"

export const landparcelSchema = z.object({
  id: z.number(),
  farmerID: z.string(),
  parcelName: z.string(),
  area: z.number(),
  gpsCoordinates: z.string().optional(),
  soilType: z.string(),
  waterSource: z.string().optional(),
  landUse: z.string(),
  tenureType: z.string(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type LandParcel = z.infer<typeof landparcelSchema>