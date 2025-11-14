//import node modules libraries
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { Fragment } from "react";

//import custom components
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const userLinks = [
  { id: uuid(), title: "Github", link: "https://github.com/iamajitsharma/" },
  { id: uuid(), title: "Support", link: "tel:+918420563702" },
  { id: uuid(), title: "API", link: "https://mockapi.io" },
  { id: uuid(), title: "Logout", link: "/" },
];

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/96855888?v=4" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        {userLinks.map((item, index) => {
          if (index !== userLinks.length - 1) {
            return (
              <DropdownMenuItem key={item.id}>
                <Link href={item.link} target="_blank">
                  {item.title}
                </Link>
              </DropdownMenuItem>
            );
          } else {
            return (
              <Fragment key={item.id}>
                <DropdownMenuSeparator />
                <DropdownMenuItem key={item.id}>
                  <Link href={item.link}>{item.title}</Link>
                </DropdownMenuItem>
              </Fragment>
            );
          }
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
