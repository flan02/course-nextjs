import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
export default async function HomePage() {
  return (
    <section className="container mx-auto mt-8">
      <div>HomePage</div>
      <Button variant="destructive">click 1</Button>
      <Button variant="ghost">click 2</Button>
      <Button variant="outline">click 3</Button>
      <Button variant="secondary">click 4</Button>
      <Button variant="link">click 4</Button>
      <Link href="/" className={buttonVariants()}>
        go to home
      </Link>
      <br />
      <br />
      <Calendar />
    </section>
  );
}
