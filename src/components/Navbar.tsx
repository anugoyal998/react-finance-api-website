import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import { Github } from "lucide-react";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";

export default async function Navbar() {
  const session = await auth();
  return (
    <div className="fixed backdrop:blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          React Finance API 1.0
        </Link>
        <div className="md:hidden">
          {" "}
          <Menu isSession={session ? true : false} />
        </div>
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="https://github.com/anugoyal998/react-finance-api"
            className={buttonVariants({ variant: "ghost" })}
          >
            <Github />
          </Link>
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: "ghost" })}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
}
