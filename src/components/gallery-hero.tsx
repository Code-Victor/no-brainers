import { Button } from "@/components/ui/button";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const GalleryHero = ({
  heading = "Visual Narratives: A Curated Gallery",
  description = "An immersive collection of visual stories, capturing moments, emotions, and artistic expressions across diverse mediums and perspectives.",
  button = {
    text: "Explore Full Collection",
    url: "#hero-image",
  },
}: Hero7Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">{heading}</h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>
        <Button asChild size="lg" className="mt-10">
          <a href={button.url}>{button.text}</a>
        </Button>
      </div>
    </section>
  );
};

export { GalleryHero };
