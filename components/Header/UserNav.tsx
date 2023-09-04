import Link from "next/link";
import {
  CreditCard,
  LogOut,
  PlusCircle,
  Settings,
  User,
  Moon,
} from "lucide-react";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { signOut } from "next-auth/react"

export function UserNav({
  profileImage,
  name,
  email,
}: {
  profileImage: any;
  name: any;
  email: any;
}) {
  return (
    <></>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="ghost" className="relative h-8 w-8 rounded-full">
    //       <Avatar className="h-9 w-9">
    //         <AvatarImage src={profileImage} alt="@shadcn" />
    //         <AvatarFallback>EX</AvatarFallback>
    //       </Avatar>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56" align="end" forceMount>
    //     <DropdownMenuLabel className="font-normal">
    //       <div className="flex flex-col space-y-1">
    //         <p className="text-sm font-medium leading-none">{name}</p>
    //         <p className="text-xs leading-none text-muted-foreground">
    //           {email}
    //         </p>
    //       </div>
    //     </DropdownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuGroup>
    //       <Link href={"/configuracion/perfil"}>
    //         <DropdownMenuItem>
    //           <User className="mr-2 h-4 w-4" />
    //           <span>Perfil</span>
    //           <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    //         </DropdownMenuItem>
    //       </Link>
    //       <Link href={"/configuracion/cuenta"}>
    //         <DropdownMenuItem>
    //           <CreditCard className="mr-2 h-4 w-4" />
    //           <span>Cuenta</span>
    //           <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
    //         </DropdownMenuItem>
    //       </Link>
    //     </DropdownMenuGroup>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem>
    //       <LogOut className="mr-2 h-4 w-4" />
    //       <button onClick={() => signOut()}>Cerrar Sesión</button>
    //       <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
