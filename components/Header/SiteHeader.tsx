"use client";

import Link from "next/link";
import { UserNav } from "@/components/Header/UserNav";
import { MainNav } from "@/components/Header/MainNav";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/Header/ThemeToggle";
import { Icons } from "@/components/Icons/Icons";
import { Navigation } from "@/components/Header/Navigation";

export function SiteHeader() {
  const session = true;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-y-black/20 bg-background drop-shadow-md">
      <div className="container flex h-[95px] items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        
        <Navigation />
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-[10px]">
            {session ? (
              <>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => console.log("clicked")}
                  className="p-[8px]"
                >
                  <Icons.help className="text-[rgba(0,0,0,0.85)]" />
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => console.log("clicked")}
                >
                  Agenda una demo
                </Button>
                {/* <ThemeToggle /> */}
                {/* <UserNav profileImage={session.user?.image} name={session.user?.name} email={session.user?.email} /> */}
              </>
            ) : (
              <>
                <Link
                  rel="noreferrer"
                  href={"/login"}
                  className={buttonVariants({ size: "sm", variant: "default" })}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  rel="noreferrer"
                  href={"/signup"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "secondary",
                  })}
                >
                  Registrarse
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
