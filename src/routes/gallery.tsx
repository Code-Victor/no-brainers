import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <InViewImagesGrid />
      <Footer />
    </div>
  );
}

import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import { gallery } from "@/lib/data";
import { GalleryHero } from "@/components/gallery-hero";
import { Footer } from "@/components/sections/footer";

function InViewImagesGrid() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <GalleryHero />
      <div
        id="hero-image"
        className="flex items-end justify-center pb-12 max-w-4xl mx-auto"
      >
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.09 },
            },
          }}
        >
          <div className="columns-2 gap-4 px-8 sm:columns-3">
            {gallery.map((img, index) => {
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  }}
                  key={index}
                  className="mb-4"
                >
                  <img
                    src={img.image}
                    {...img.size}
                    alt={img.description}
                    className="size-full rounded-lg object-contain"
                  />
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}

export default {
  InViewImagesGrid,
};
