import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <Layout>
      <Seo title="Page not found" />
      <div className="py-20">
        <Container>
          <div className="rounded-3xl bg-slate-50 p-10 ring-1 ring-slate-200">
            <div className="text-2xl font-semibold">Page not found</div>
            <div className="mt-2 text-slate-600">{" "}</div>
            <div className="mt-6">
              <Button href="/">Go to Home</Button>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
