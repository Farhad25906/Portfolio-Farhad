'use client'

import { useState } from 'react'
import { createMeeting } from '@/app/actions/meeting'
import { Calendar, Clock, Mail, X } from 'lucide-react'
import { useActionState } from 'react' // Next.js 15+ hook, check compat or use useFormState

// Fallback for older Next.js versions if useActionState is not available or behaves differently
// We can use a simple onSubmit handler for now to ensure compatibility
import { FormEvent } from 'react'

export function MeetingDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string; link?: string } | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    
    // Call server action
    const res = await createMeeting(null, formData)
    setResult(res)
    setLoading(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-card border border-border rounded-3xl p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        <h2 className="text-2xl font-bold font-display mb-2">Schedule a Meeting</h2>
        <p className="text-muted-foreground mb-6">
          Pick a time and I'll send you an invite.
        </p>

        {result?.success ? (
          <div className="flex flex-col gap-4 text-center py-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-2">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Invite Sent!</h3>
            <p className="text-muted-foreground">
              Check your email for the meeting link.
            </p>
            <button
              onClick={onClose}
              className="mt-4 py-3 px-6 bg-primary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  required
                  name="date"
                  type="date"
                  className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Time</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  required
                  name="time"
                  type="time"
                  className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Your Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="mt-4 py-4 px-8 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating...' : 'Send Invite'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
