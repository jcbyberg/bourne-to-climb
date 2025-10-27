"use client"

import { useCallback, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Paperclip } from "lucide-react"
import { toast } from "sonner"

import { contactServiceOptions } from "@/data/contact"
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

type Attachment = {
  name: string
  type: string
  content: string
}

export function ContactFormSection() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "removal",
      message: "",
    },
  })

  const [attachments, setAttachments] = useState<Attachment[]>([])

  const handleFilesChange = useCallback(async (files: FileList | null) => {
    if (!files) return
    const selected = Array.from(files).slice(0, 3)
    const converted = await Promise.all(
      selected.map(
        (file) =>
          new Promise<Attachment>((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
              const result = reader.result
              if (typeof result === "string") {
                const base64 = result.split(",").pop() ?? ""
                resolve({
                  name: file.name,
                  type: file.type,
                  content: base64,
                })
              } else {
                reject(new Error("Failed to read file"))
              }
            }
            reader.onerror = () => reject(reader.error ?? new Error("File error"))
            reader.readAsDataURL(file)
          }),
      ),
    ).catch((error) => {
      console.error(error)
      toast.error("We couldn't process one of your attachments.")
      return [] as Attachment[]
    })

    setAttachments(converted ?? [])
  }, [])

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          attachments,
        }),
      })

      if (!response.ok) {
        const message = await response.text()
        throw new Error(message || "Failed to send message")
      }

      toast.success("Thanks! We received your message and will reply within 24 hours.")
      reset()
      setAttachments([])
    } catch (error) {
      console.error(error)
      toast.error(
        "Something went wrong sending your request. Please call us at 905-449-9019.",
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            placeholder="Your full name"
            autoComplete="name"
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@email.com"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="905-449-9019"
            autoComplete="tel"
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service *</Label>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {contactServiceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service ? (
            <p className="text-sm text-destructive">{errors.service.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">How can we help? *</Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell us about the tree, access, timeline, and anything else we should know."
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="photos">Attach photos (optional)</Label>
        <div className="flex flex-col gap-2 rounded-xl border border-dashed border-border/70 p-4 text-sm text-muted-foreground">
          <input
            id="photos"
            type="file"
            accept="image/*"
            multiple
            onChange={(event) => handleFilesChange(event.target.files)}
          />
          <p className="text-xs">
            Upload up to 3 images (JPG or PNG). We&apos;ll review them before our site
            visit.
          </p>
          {attachments.length > 0 ? (
            <ul className="divide-y divide-border/60 rounded-lg border border-border/60 bg-surface/70">
              {attachments.map((file) => (
                <li key={file.name} className="flex items-center gap-2 px-3 py-2 text-sm">
                  <Paperclip className="size-4 text-primary" />
                  <span className="truncate">{file.name}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          We&apos;ll respond within 24 hours. For emergencies, call{" "}
          <a
            className="font-semibold text-primary underline-offset-4 hover:underline"
            href="tel:19054499019"
          >
            905-449-9019
          </a>
          .
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send request"
          )}
        </Button>
      </div>
    </form>
  )
}
