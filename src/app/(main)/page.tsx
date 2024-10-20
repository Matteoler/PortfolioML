import Image from "next/image";
import Cover from "next-starter/src/app/cover.svg";
import { Container }from "@/components";

export default function Home() {
  return (
    <main>
      <Container>
        <h1 className="font-serif">Next Starter</h1>
      </Container>
    </main>
  );
}
