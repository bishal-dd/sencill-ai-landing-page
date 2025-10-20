'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from 'sonner'
import { Loader2, CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
})

type FormData = z.infer<typeof formSchema>

export function EarlyAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(data: FormData) {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      setIsSuccess(true)
      toast.success('Welcome aboard!', {
        description: 'Check your email for next steps.',
      })
      form.reset()
    } catch (error) {
      toast.error('Something went wrong', {
        description: 'Please try again later.',
      })
      throw error
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-lg border-2 border-primary/20 bg-card p-8 text-center">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">You&apos;re on the list!</h3>
        <p className="text-muted-foreground">
          We&apos;ll send you an email with early access details soon. Keep an eye on your inbox!
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border-2 border-primary/20 bg-card p-8 shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    type="email"
                    className="h-12 text-base"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Request Early Access'
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By signing up, you agree to receive updates about sencill AI. Unsubscribe anytime.
          </p>
        </form>
      </Form>
    </div>
  )
}
