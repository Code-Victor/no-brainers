import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import Group1 from "@/assets/images/group-1.png?format=webp";
import Group2 from "@/assets/images/group-2.png?format=webp";
import Group3 from "@/assets/images/group-3.png?format=webp";
import Group4 from "@/assets/images/group-4.png?format=webp";
import Group5 from "@/assets/images/group-5.png?format=webp";
import Nada1 from "@/assets/images/nada-1.png?format=webp";
import Victor1 from "@/assets/images/victor-1.png?format=webp";
import Leila1 from "@/assets/images/leila-1.png?format=webp";

import Floating, {
  FloatingElement,
} from "@/fancy/components/image/parallax-floating";

import { Button } from "../ui/button";

export const Hero = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) }
    );
  }, []);

  return (
    <section
      className="font-geist flex w-dvw h-dvh justify-center items-center overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <h1 className="text-3xl font-semibold max-w-4xl md:text-5xl z-50">
          Creating Sustainable Employment for Young Africans
        </h1>
        <p className="text-sm z-50 md:text-base max-w-2xl mx-auto">
          Transforming Africa's economic landscape by harnessing the untapped
          potential of tourism to create meaningful employment for youth across
          the continent.
        </p>
        <Button size="lg">Join Our Movement</Button>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={Nada1}
            height={540}
            width={540}
            className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={Group1}
            height={1000}
            width={1000}
            className="w-auto h-24 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={Group2}
            width={569}
            height={696}
            className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={Leila1}
            width={960}
            height={1080}
            className="w-auto h-24 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={Group4}
            width={1080}
            height={810}
            className="w-auto h-28 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={Victor1}
            height={1080}
            width={689}
            className="w-auto h-28 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={Group3}
            width={1080}
            height={810}
            className="w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={Group5}
            width={1080}
            height={810}
            className="w-auto h-24 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </section>
  );
};
