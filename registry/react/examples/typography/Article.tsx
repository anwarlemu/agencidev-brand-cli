import { Text } from '@/react/components/ui/Text'
// shadcn's typography page in the brand: headings, a lead, paragraphs, a quote, a list and inline code, each a step of
// the scale.

export default function Article() {
  return (
    <article className="flex max-w-2xl flex-col">
      <Text variant="label">Field notes</Text>
      <Text variant="h1" className="mt-4">How Acme shipped its onboarding.</Text>
      <Text variant="lead" className="mt-4">Six weeks, one team and every screen in the flow.</Text>
      <Text variant="p" className="mt-6">Acme came to us with a signup that lost half its people on the second step. We mapped every screen before we drew a new one.</Text>
      <Text variant="h2" className="mt-10">What the map showed</Text>
      <Text variant="p" className="mt-4">The people who stayed saw the product before the form. The ones who left were asked for a card first.</Text>
      <Text variant="blockquote" className="mt-6">Show the product before you ask for anything.</Text>
      <Text variant="h3" className="mt-10">What we changed</Text>
      <ul className="mt-4 flex list-disc flex-col gap-2 pl-6 type-body text-fg">
        <li>Open on the product, in use.</li>
        <li>Ask for the card after the first project.</li>
        <li>Cut the form to three fields.</li>
      </ul>
      <Text variant="h4" className="mt-10">Build it from the system</Text>
      <Text variant="p" className="mt-4">Every screen uses the components in <Text variant="code" as="code">acme-ds</Text> , so the next flow ships faster.</Text>
      <Text variant="large" className="mt-6">Ongoing monthly partnerships.</Text>
      <Text variant="small" className="mt-2">Cancellable at any time</Text>
      <Text variant="muted" className="mt-1">No retainer minimums.</Text>
    </article>
  )
}
