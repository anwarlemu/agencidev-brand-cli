import { Accordion } from '@/react/components/ui/Accordion'
import { AccordionItem } from '@/react/components/ui/AccordionItem'
// Several rows open at once, for services a person compares side by side; the last is not available yet.

export default function Multiple() {
  return (
    <Accordion multiple defaultValue={['design', 'engineering']} className="w-120 max-w-full">
      <AccordionItem value="design" title="Design">Product design, branding, design systems.</AccordionItem>
      <AccordionItem value="engineering" title="Engineering">Web, iOS, Android.</AccordionItem>
      <AccordionItem value="hardware" title="Hardware" disabled>Coming soon.</AccordionItem>
    </Accordion>
  )
}
