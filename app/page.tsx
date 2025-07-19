"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { calculatedLeftDays, calculatedLeftMonths, ChartRadialShape } from "@/components/ui/days-chart";
import { HoverUser } from "@/components/ui/hover-user";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { pluralize } from "numeralize-ru";

const links = [
  { url: "https://t.me/Kopchan7", icon: "ri-telegram-2-fill", tooltip: "Telegram" },
  { url: "https://github.com/kopchan", icon: "ri-github-fill", tooltip: "GitHub" },
  { url: "https://kpch.su", icon: "ri-external-link-fill", tooltip: "Website" },
]

export default function Home() {
  const leftDays = calculatedLeftDays()
  const leftMonths = calculatedLeftMonths() - 1
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="flex flex-col gap-4">
        <Card>
          <CardContent>
            <ChartRadialShape />
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 leading-none font-medium">
              До возвращения Саши примерно {leftDays} {pluralize(leftDays, "день", "дня", "дней")}
            </div>
            <div className="text-muted-foreground leading-none">
              Таким образом, осталось около {Math.floor(leftMonths)} {pluralize(leftMonths, "месяц", "месяца", "месяцев")}
            </div>
          </CardFooter>
        </Card>

        <div className="flex flex-row flex-nowrap gap-4">
          <Card className="w-min">
            <CardContent className="flex flex-col items-center gap-2.5">
              <div className="leading-none font-medium min-w-max">
                Его ждут
              </div>
              <div className="flex -space-x-2">
                <HoverUser
                  tag="@sc0ffs"
                  description="Купертиновец"
                  footer="Купертиновец из Убежища хикк"
                  links={[
                    { url: "https://t.me/sc0ffs", icon: "ri-telegram-2-fill" },
                    { url: "https://github.com/scffs", icon: "ri-github-fill" },
                  ]}
                >
                  <Avatar className="ring-2 grayscale">
                    <AvatarImage src="/avatars/sc0ffs.jpg" alt="@sc0ffs" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </HoverUser>
                <HoverUser
                  tag="@zamelane"
                  description="Недохацкер"
                  footer=""
                  links={[
                    { url: "https://t.me/zamelane", icon: "ri-telegram-2-fill" },
                    { url: "https://github.com/zamelane", icon: "ri-github-fill" },
                    { url: "https://lophius.ru", icon: "ri-external-link-fill" },
                  ]}
                >
                  <Avatar className="ring-2 grayscale">
                    <AvatarImage src="/avatars/zamelane.jpg" alt="@zamelane" />
                    <AvatarFallback>ZA</AvatarFallback>
                  </Avatar>
                </HoverUser>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full pb-2">
            <CardContent className="flex flex-col gap-2.5">
              <div className="flex flex-row gap-2.5 items-center *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                <Avatar>
                  <AvatarImage src="/avatars/kopchan.jpg" alt="@kopchan" />
                  <AvatarFallback>KO</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <div className="leading-none font-medium min-w-max">
                    Александр Матохнюк
                  </div>
                  <div className="text-muted-foreground leading-none text-sm">
                    Kopchan
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                {
                  links.map((link, key) => (
                    <Tooltip key={key}>
                      <TooltipTrigger asChild>
                        <Link href={link.url}>
                          <Button variant='ghost' size='icon'>
                            <i className={link.icon} />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        {link.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  ))
                }
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
