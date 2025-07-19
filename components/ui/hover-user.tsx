import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "./button"
import Link from "next/link"

type Props = {
  tag: string
  description: string
  footer: string
  links: {
    url: string,
    icon: string,
  }[]
}

export function HoverUser({ children, links, ...props }: { children: React.ReactNode } & Props) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className="max-w-min">
        <div className="flex justify-between">
          {/* <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar> */}
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <h4 className="text-sm font-semibold">{props.tag}</h4>
            <div className="flex justify-center">
              {
                links.map((link, key) => (
                  <Link key={key} href={link.url}>
                    <Button variant='ghost' size='icon'>
                      <i className={link.icon} />
                    </Button>
                  </Link>
                ))
              }
            </div>
            {/* <p className="text-sm">
              {props.description}
            </p>
            <div className="text-muted-foreground text-xs">
              {props.footer}
            </div> */}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
