import {
  Competence,
  Container,
  Header,
  Infos,
  Presentation,
  Service,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <Presentation />
      </Container>
      <section className={"bg-white"}>
        <Infos />
        <Service />
        <Competence />
      </section>
    </main>
  );
}
