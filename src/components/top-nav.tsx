import Link from "next/link";
import AuthButton from "./auth-btn";
import { ModeToggle } from "./ui/mode-toggle";

function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <Link href="/" className="text-3xl">
        To-Do App
      </Link>
      <div className="flex items-center gap-8">
        <AuthButton />
        <ModeToggle />
      </div>
    </nav>
  );
}

export default TopNav;
