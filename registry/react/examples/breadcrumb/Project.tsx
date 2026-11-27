import { Breadcrumb } from '@/react/components/ui/Breadcrumb'
// A screen inside a project, with the way back.

export default function Project() {
  return (
    <Breadcrumb
      className="max-w-full"
      items={[
        { label: 'Projects', href: '#projects' },
        { label: 'Acme onboarding', href: '#acme-onboarding' },
        { label: 'Signup, second step' },
      ]}
    />
  )
}
