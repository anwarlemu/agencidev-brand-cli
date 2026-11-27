'use client'
import { useState } from 'react'
import { Button } from '@/react/components/ui/Button'
import { Field } from '@/react/components/ui/Field'
import { Form } from '@/react/components/ui/Form'
import { Input } from '@/react/components/ui/Input'
import { NativeSelect } from '@/react/components/ui/NativeSelect'
import { useForm } from '@/react/hooks/useForm'
// A new enquiry: the company, its site and what it needs. Send it empty to see the errors; a name of "Acme"
// shows the server's answer.

export default function Enquiry() {
  const [added, setAdded] = useState('')
  const { values, set, errors, sending, failure, touch, submit, reset } = useForm(
    { company: '', site: '', needs: 'product' },
    {
      company: v => (!String(v).trim() ? 'Name the company.' : undefined),
      site: v => (!String(v).trim() ? 'Add the company\'s site.' : !/^[\w-]+(\.[\w-]+)+$/.test(String(v).trim()) ? 'Use a domain, such as acme.com.' : undefined),
    },
  )
  function send() {
    void submit(async (v) => {
      await new Promise(resolve => setTimeout(resolve, 600))
      if (v.company.trim().toLowerCase() === 'acme') throw new Error('Acme already has an enquiry open.')
      setAdded(v.company.trim())
    })
  }
  return (
    <div className="w-100 max-w-full">
      {!added
        ? (
            <Form
              label="Start a project"
              failure={failure}
              onSubmit={send}
              actions={(
                <>
                  <Button variant="ghost" onClick={reset}>Clear</Button>
                  <Button type="submit" disabled={sending}>{sending ? 'Sending' : 'Send enquiry'}</Button>
                </>
              )}
            >
              <Field label="Company" description="The name as it shows on the site." error={errors.company}>
                {({ id, describedBy, invalid }) => <Input id={id} value={values.company} onChange={e => set('company', e.target.value)} invalid={invalid} aria-describedby={describedBy} autoComplete="off" placeholder="Acme Studio" onBlur={() => touch('company')} />}
              </Field>
              <Field label="Site" error={errors.site}>
                {({ id, describedBy, invalid }) => <Input id={id} value={values.site} onChange={e => set('site', e.target.value)} invalid={invalid} aria-describedby={describedBy} autoComplete="off" placeholder="acme.com" onBlur={() => touch('site')} />}
              </Field>
              <Field label="Needs">
                {({ id }) => (
                  <NativeSelect id={id} value={values.needs} onChange={e => set('needs', e.target.value)}>
                    <option value="product">Product design</option><option value="brand">Branding</option><option value="all">Both, and the build</option>
                  </NativeSelect>
                )}
              </Field>
            </Form>
          )
        : (
            <div className="flex flex-col items-start gap-4 rounded-container bg-surface-raised p-6" role="status">
              <p className="type-ui text-fg">Thanks, {added}. We reply within a day.</p>
              <Button variant="secondary" onClick={() => { setAdded(''); reset() }}>Send another</Button>
            </div>
          )}
    </div>
  )
}
