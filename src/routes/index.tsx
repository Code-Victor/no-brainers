import { createFileRoute } from "@tanstack/react-router";
import { Evolution } from "@/components/sections/evolution";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Evolution />

      <Footer />
    </div>
  );
}
