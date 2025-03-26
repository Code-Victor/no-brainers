import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Boxes, HeartHandshake, Rocket, TriangleAlert } from "lucide-react";
import Unemployment from "@/assets/images/unemployment.png";
import Mission from "@/assets/images/missions.png";

const tabs = [
  {
    id: 1,
    title: "Problem",
    icon: TriangleAlert,
    color: "#ba80e6",
    content: (
      <div className="w-full h-full grid md:grid-cols-2 gap-4 md:items-center">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-2xl md:text-4xl">Problem Statement</h3>
          <p className="text-sm md:text-base">
            The Rwandan National Institute of Statistics reports that as of
            2023, the young unemployment rate is 21.97%. Young individuals
            between the ages of 16 and 30 experience chronic unemployment as a
            result of skill mismatches and a lack of sector-specific training,
            notwithstanding Rwanda's booming tourism industry. Both urban and
            rural areas are impacted by this mismatch between the needs of the
            tourism industry and the capacities of young people, with recent
            graduates being most affected. How can youth-oriented tourism
            projects help Rwanda's economic transformation goal and guarantee
            young people's sustainable livelihoods by bringing unemployment down
            to less than 15% by 2030?
          </p>
        </div>
        <img
          src={Unemployment}
          alt="Unemployment"
          height={1110}
          width={720}
          className="hidden md:block w-full h-full object-cover rounded-xl"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Mission",
    icon: Rocket,
    color: "#ff777f",
    content: (
      <div className="w-full h-full grid md:grid-cols-2 gap-4 md:items-center">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-2xl md:text-4xl">Our Mission</h3>
          <p className="text-sm md:text-base">
            Our mission is to empower African youth by creating sustainable
            employment opportunities and driving economic transformation through
            youth-led tourism innovation.
          </p>
        </div>
        <div className="w-full h-full object-cover rounded-xl overflow-hidden">
          <img
            src={Mission}
            alt="Mission"
            height={670}
            width={600}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Values",
    icon: HeartHandshake,
    color: "#92b5fc",
    content: (
      <div className="w-full h-full space-y-4">
        <div className="text-center space-y-2">
          <h3 className="font-bold text-2xl md:text-4xl text-center">
            Our Values
          </h3>
          <p className="max-w-2xl mx-auto text-sm md:text-base">
            The principles that drive our mission to transform employment
            opportunities and create lasting impact in our community.
          </p>
        </div>
        <ValuesCarousel />
      </div>
    ),
  },
  {
    id: 4,
    title: "Team",
    icon: Boxes,
    color: "#ffb577",
    content: (
      <div className="w-full h-full space-y-4">
        <div className="text-center space-y-2">
          <h3 className="font-bold text-2xl md:text-4xl text-center">
            Our Team
          </h3>
          <p className="max-w-2xl mx-auto text-sm md:text-base">
            Passionate professionals dedicated to creating positive change and
            driving employment opportunities in our community.
          </p>
        </div>
        <TeamCarousel />
      </div>
    ),
  },
];

export function Evolution() {
  const [activeTab, setActiveTab] = React.useState(1);
  const handleTabChange = (id: number) => {
    setActiveTab(id);
  };
  return (
    <section className="font-geist py-8 md:py-16 px-4 max-w-full bg-gray-50 dark:bg-[#1f1f1f]">
      <div className="container mx-auto">
        <div className="text-left space-y-4">
          <h2 className="text-lg uppercase font-medium text-[#0e44bc]">
            Our Evolution
          </h2>
          <p className="text-2xl md:text-6xl">
            From vision to impact, We harness Africa's tourism potential to
            tackle youth unemployment head-on.
          </p>
          {/* Tab Navigation */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-center py-6">
              <div className="bg-gray-200 dark:bg-gray-800 dark:shadow-lg rounded-full p-1.5 flex">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={cn(
                        "relative px-2 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                        isActive
                          ? "text-gray-800 dark:text-gray-100"
                          : "text-gray-600 dark:400 dark:hover:text-gray-300 hover:text-gray-700"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-tab-indicator"
                          className="absolute inset-0 bg-gray-50 dark:bg-gray-700 rounded-full shadow-sm"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <tab.icon className={cn("size-4 z-10")} />
                      <span className="relative z-10">{tab.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="relative min-h-[500px] w-full">
              <AnimatePresence initial={false}>
                {tabs
                  .filter((t) => t.id <= activeTab)
                  .map((tab, _, array) => {
                    const length = array.length;
                    // Calculate the visual properties based on position in stack
                    const yOffset = Math.min((length - tab.id) * -10, 30); // 20px offset for each card in the stack
                    const scale = 1 - (length - tab.id) * 0.05; // Scale down by 5% for each position
                    const zIndex = 10 + tab.id; // Ensure proper stacking order

                    const isActive = activeTab === tab.id;
                    return (
                      <motion.div
                        key={tab.id}
                        layout
                        initial={{
                          y: 60,
                          opacity: 0,
                        }}
                        exit={{
                          y: 60,
                          opacity: 0,
                        }}
                        animate={{
                          y: yOffset,
                          scale: scale,
                          zIndex: zIndex,
                          opacity: 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          mass: 1,
                        }}
                        className={cn(
                          "absolute inset-0 rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col max-w-6xl mx-auto",
                          isActive ? "shadow-lg" : "shadow-md"
                        )}
                        style={{
                          pointerEvents: isActive ? "auto" : "none",
                          originY: 0, // Ensure scaling happens from the top
                          backgroundColor: tab.color,
                        }}
                      >
                        {tab.content}
                      </motion.div>
                    );
                  })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TeamCarousel, ValuesCarousel } from "../carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
