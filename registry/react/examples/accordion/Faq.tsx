import { Accordion } from '@/react/components/ui/Accordion'
import { AccordionItem } from '@/react/components/ui/AccordionItem'
// Questions on the contact page, one open at a time; the first opens with the page.

export default function Faq() {
  return (
    <Accordion defaultValue="what" className="w-160 max-w-full">
      <AccordionItem value="what" title="What is Agencidev?">A distributed product design and development studio: product design, branding, strategy and full-stack development, as ongoing monthly partnerships.</AccordionItem>
      <AccordionItem value="price" title="How does a partnership work?">A monthly partnership with one team, cancellable at any time.</AccordionItem>
      <AccordionItem value="team" title="Who will I work with?">The designers and engineers who do the work, on a shared channel with your team.</AccordionItem>
    </Accordion>
  )
}
