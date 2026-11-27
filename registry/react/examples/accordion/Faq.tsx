import { Accordion } from '@/react/components/ui/Accordion'
import { AccordionItem } from '@/react/components/ui/AccordionItem'
// Questions on a pricing page, one open at a time; the first opens with the page.

export default function Faq() {
  return (
    <Accordion defaultValue="what" className="w-160 max-w-full">
      <AccordionItem value="what" title="What is Agencidev?">A distributed product design and development studio: product design, branding, strategy and full-stack development, as ongoing monthly partnerships.</AccordionItem>
      <AccordionItem value="price" title="How much does it cost?">$10 for your first month, then $20/month.</AccordionItem>
      <AccordionItem value="boards" title="Can I share a board with my team?">Yes. Save creatives to a board and send the link to Acme's whole team.</AccordionItem>
    </Accordion>
  )
}
