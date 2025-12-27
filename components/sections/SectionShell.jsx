import Container from "@/components/Container";

export default function SectionShell({ children, className = "" }) {
  return (
    <section className={"py-14 sm:py-16 " + className}>
      <Container>{children}</Container>
    </section>
  );
}
