'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Paperclip } from 'lucide-react'
import { contactFormSchema, type ContactFormValues } from '@/app/lib/validations'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Textarea } from '@/app/components/ui/textarea'
import { Select } from '@/app/components/ui/select'
import { Button } from '@/app/components/ui/button'
import { useToast } from '@/app/components/ui/toast'

const serviceOptions = [
  { label: 'Tree Removal', value: 'removal' },
  { label: 'Pruning & Trimming', value: 'pruning' },
  { label: 'Stump Grinding', value: 'grinding' },
  { label: 'Emergency Service', value: 'emergency' },
  { label: 'Other', value: 'other' },
]

export function ContactForm() {
  const { notify } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: undefined,
      message: '',
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      notify({
        title: 'Message sent! 🎉',
        description: 'Dustin will reach out within one business day.',
        variant: 'success',
      })
      reset()
    } catch (error) {
      console.error(error)
      notify({
        title: 'Something went wrong',
        description: 'Please call 905-449-9019 or try again shortly.',
        variant: 'error',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="name" requiredIndicator>
          Full name
        </Label>
        <Input id="name" placeholder="Your name" {...register('name')} />
        {errors.name && <p className="mt-2 text-sm text-rose-500">{errors.name.message}</p>}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email" requiredIndicator>
            Email
          </Label>
          <Input id="email" type="email" placeholder="you@email.com" {...register('email')} />
          {errors.email && <p className="mt-2 text-sm text-rose-500">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" placeholder="905-449-9019" {...register('phone')} />
          {errors.phone && <p className="mt-2 text-sm text-rose-500">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="service" requiredIndicator>
          What service do you need?
        </Label>
        <Select
          id="service"
          placeholder="Select a service"
          options={serviceOptions}
          {...register('service')}
        />
        {errors.service && <p className="mt-2 text-sm text-rose-500">{errors.service.message}</p>}
      </div>
      <div>
        <Label htmlFor="message" requiredIndicator>
          Tell us about your project
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Describe the trees, access, or concerns you have..."
          {...register('message')}
        />
        {errors.message && <p className="mt-2 text-sm text-rose-500">{errors.message.message}</p>}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <Paperclip className="h-4 w-4" />
          Optional: attach photos when replying to our confirmation email.
        </div>
        <span className="font-semibold text-slate-800">Average response time: under 24 hours</span>
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
