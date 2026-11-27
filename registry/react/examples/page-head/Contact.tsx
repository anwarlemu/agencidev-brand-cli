import { PageHead } from '@/react/components/site/PageHead'
import { Button } from '@/react/components/ui/Button'
// The contact page's head: the lead in white, the rest in mid, a plate button and a quiet one.

export default function Contact() {
  return (
    <PageHead id="contact" lead="Tell us what you're building." rest="Acme partners with startups to design, build, and ship software. The quickest way to start is a call or an email.">
      <Button href="#">Book a free strategy call</Button>
      <Button href="#" variant="secondary">hello@acme.com</Button>
    </PageHead>
  )
}
