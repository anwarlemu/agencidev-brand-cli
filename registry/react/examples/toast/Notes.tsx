'use client'
import { Toast } from '@/react/components/ui/Toast'
// Two notes as they read on their own: one with something to do, one that only says what happened.

export default function Notes() {
  return (
    <div className="flex w-90 max-w-full flex-col gap-3">
      <Toast title="Shared" description="Acme onboarding is open to 24 people." action={{ label: 'Undo' }} onDismiss={() => {}} />
      <Toast title="Enquiry sent" description="We reply within a day." onDismiss={() => {}} />
    </div>
  )
}
