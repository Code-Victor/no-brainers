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
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "@/lib/data";
import { GalleryHero } from "@/components/gallery-hero";
import { Footer } from "@/components/sections/footer";
import { useState } from "react";

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
              return <GalleryImage {...img} key={index} />;
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}

function GalleryImage({ ...img }: (typeof gallery)[number]) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
      }}
      whileHover={{ scale: 1.1 }}
      className="mb-4 rounded-lg overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={img.image}
        {...img.size}
        alt={img.description}
        className="size-full rounded-lg object-contain"
      />
      <AnimatePresence>
        {hover && (
          <motion.div
            className="absolute inset-0 bg-black/30 flex items-end justify-start p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="rounded-full px-2 py-1 bg-black text-white text-xs font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {img.description}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default {
  InViewImagesGrid,
};
