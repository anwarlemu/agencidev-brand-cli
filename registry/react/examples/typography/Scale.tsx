import { Text } from '@/react/components/ui/Text'
// Every step of the brand's type scale, with the face, size and line height it takes from the tokens.

export default function Scale() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Display</Text><Text variant="caption">Agencidev Sans 36px at 1.14</Text></div>
        <Text variant="display">Product design thinking and implementation.</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Hero</Text><Text variant="caption">Agencidev Sans 36px at 1.14</Text></div>
        <Text variant="hero">We design the brand, the product and the site.</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Heading 1</Text><Text variant="caption">Agencidev Sans 36px at 1.14</Text></div>
        <Text variant="h1">Ongoing monthly partnerships.</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Heading 2</Text><Text variant="caption">Agencidev Sans 28px at 1.14</Text></div>
        <Text variant="h2">Monthly partnership</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Heading 3</Text><Text variant="caption">Agencidev Sans 20px at 1.2</Text></div>
        <Text variant="h3">How we work</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Heading 4</Text><Text variant="caption">Agencidev Sans 16px at 1.25</Text></div>
        <Text variant="h4">Product design</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Lead</Text><Text variant="caption">ABC Diatype 20px at 1.4, muted</Text></div>
        <Text variant="lead">One team from the first sketch to the shipped product.</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Paragraph</Text><Text variant="caption">ABC Diatype 16px at 1.625</Text></div>
        <Text variant="p">We map every screen before we draw a new one, then build it from a system your engineers keep.</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Interface</Text><Text variant="caption">ABC Diatype 14px at 1.5</Text></div>
        <Text variant="ui">Shared with the Acme team.</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Small</Text><Text variant="caption">ABC Diatype Medium 14px at 1.5</Text></div>
        <Text variant="small">12 new screens</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Muted</Text><Text variant="caption">ABC Diatype 14px, muted</Text></div>
        <Text variant="muted">Updated 4 minutes ago.</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Caption</Text><Text variant="caption">ABC Diatype 12px at 1.5, muted</Text></div>
        <Text variant="caption">Cancellable at any time.</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Label</Text><Text variant="caption">ABC Diatype 12px, capitals, not tracked</Text></div>
        <Text variant="label">Open roles</Text>
      </div>
      <div className="flex flex-col gap-2 border-b border-edge py-6 md:flex-row md:items-baseline md:gap-8">
        <div className="flex shrink-0 flex-col gap-1 md:w-56"><Text variant="label">Code</Text><Text variant="caption">System mono 14px at 1.5</Text></div>
        <Text variant="code">acme-ds</Text>
      </div>
    </div>
  )
}
