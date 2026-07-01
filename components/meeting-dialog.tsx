'use client'

import { useEffect, useState } from 'react'
import { createMeeting, getAvailableMeetingSlots } from '@/app/actions/meeting'
import { Calendar, Clock, Mail, Link as LinkIcon, X } from 'lucide-react'
import { FormEvent } from 'react'

type SlotOption = {
  value: string
  label: string
}

function getDhakaToday() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Dhaka',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date())

  const year = parts.find((part) => part.type === 'year')?.value
  const month = parts.find((part) => part.type === 'month')?.value
  const day = parts.find((part) => part.type === 'day')?.value

  return `${year}-${month}-${day}`
}

export function MeetingDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [loading, setLoading] = useState(false)
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [selectedDate, setSelectedDate] = useState(() => getDhakaToday())
  const [selectedTime, setSelectedTime] = useState('')
  const [slots, setSlots] = useState<SlotOption[]>([])
  const [slotMessage, setSlotMessage] = useState('Choose a date to see free times.')
  const [result, setResult] = useState<{
    success: boolean
    message: string
    link?: string
  } | null>(null)
//New Useffeect
  useEffect(() => {
    if (!isOpen || !selectedDate) {
      return
    }

    let active = true

    async function loadSlots() {
      setLoadingSlots(true)
      setSlotMessage('Checking available times...')

      const response = await getAvailableMeetingSlots(selectedDate)

      if (!active) {
        return
      }

      if (response.success && response.slots.length > 0) {
        setSlots(response.slots)
        setSelectedTime((current) =>
          response.slots.some((slot) => slot.value === current) ? current : response.slots[0].value
        )
        setSlotMessage('Pick one of the open 1-hour slots below.')
      } else {
        setSlots([])
        setSelectedTime('')
        setSlotMessage(response.message)
      }

      setLoadingSlots(false)
    }

    loadSlots()

    return () => {
      active = false
    }
  }, [isOpen, selectedDate])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const response = await createMeeting(null, formData)

    setResult(response)
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

        <h2 className="text-2xl font-bold font-display mb-2">Book a Meeting</h2>
        <p className="text-muted-foreground mb-4">
          Pick a free slot and I’ll create the Google Meet link, then send the invite to both email addresses.
        </p>

        <div className="mb-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-sm text-muted-foreground">
          Time zone: <span className="font-semibold text-foreground">Asia/Dhaka (GMT+6)</span>
        </div>

        {result?.success ? (
          <div className="flex flex-col gap-4 text-center py-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-2">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">Invite Sent!</h3>
            <p className="text-muted-foreground">
              The Google Meet link was created and emailed to you and me.
            </p>

            {result.link && (
              <a
                href={result.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <LinkIcon className="w-4 h-4" />
                Open Meeting
              </a>
            )}

            <button
              onClick={onClose}
              className="mt-2 py-3 px-6 bg-primary text-white rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
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
                  min={getDhakaToday()}
                  value={selectedDate}
                  onChange={(event) => setSelectedDate(event.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold ml-1">Free Time Slot</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <select
                  required
                  name="time"
                  value={selectedTime}
                  onChange={(event) => setSelectedTime(event.target.value)}
                  className="w-full appearance-none pl-12 pr-4 py-3 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  disabled={loadingSlots || slots.length === 0}
                >
                  <option value="">
                    {loadingSlots ? 'Loading free slots...' : 'Select a free slot'}
                  </option>
                  {slots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-muted-foreground">{slotMessage}</p>
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

            {result?.message && !result.success && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 rounded-xl">
                <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                  {result.message}
                </p>
              </div>
            )}

            <button
              disabled={loading || loadingSlots || slots.length === 0}
              className="mt-4 py-4 px-8 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating Meet Link...' : 'Book Meeting'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
