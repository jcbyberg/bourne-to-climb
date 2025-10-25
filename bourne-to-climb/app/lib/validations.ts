import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z.string().email('Please provide a valid email address'),
  phone: z
    .string()
    .regex(/^[\d\s+\-()]*$/, 'Please provide a valid phone number')
    .optional()
    .or(z.literal('')),
  service: z.enum(['removal', 'pruning', 'grinding', 'emergency', 'other'], {
    required_error: 'Please select a service',
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be under 1000 characters'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
