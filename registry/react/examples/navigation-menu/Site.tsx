import { NavigationMenu } from '@/react/components/ui/NavigationMenu'
import { NavigationMenuItem } from '@/react/components/ui/NavigationMenuItem'
import { NavigationMenuLink } from '@/react/components/ui/NavigationMenuLink'
// The site's top navigation: the work and the studio open panels of links, articles and contact are plain links. Point
// at Work, then move to Studio: it switches at once.
const work = [
  { title: 'Product design', description: 'Flows, interfaces and the system under them.' },
  { title: 'Branding', description: 'The mark, the type and the voice.' },
  { title: 'Strategy', description: 'What to build first, and why.' },
  { title: 'Development', description: 'Full-stack, from the first commit to launch.' },
]
const studio = [
  { title: 'About', description: 'How the studio works.' },
  { title: 'Careers', description: 'Open roles on the team.' },
  { title: 'Process', description: 'From the first call to shipped.' },
]

export default function Site() {
  return (
    <div className="min-h-80">
      <NavigationMenu label="Site">
        <NavigationMenuItem label="Work" width="440px">
          <div className="grid gap-1 sm:grid-cols-2">
            {work.map((l) => <NavigationMenuLink key={l.title} href="#" title={l.title} description={l.description} />)}
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem label="Studio" width="280px">
          <div className="grid gap-1">
            {studio.map((l) => <NavigationMenuLink key={l.title} href="#" title={l.title} description={l.description} />)}
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem label="Articles" href="#" />
        <NavigationMenuItem label="Contact" href="#" />
      </NavigationMenu>
    </div>
  )
}
