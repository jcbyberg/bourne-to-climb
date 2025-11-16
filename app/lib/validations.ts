import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (value) =>
        !value ||
        /^(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/.test(value),
      "Please provide a valid phone number",
    ),
  service: z.enum(["removal", "pruning", "grinding", "storm", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

