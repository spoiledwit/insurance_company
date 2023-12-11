import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import immigration from "../../assets/immigration1.jpg"
import docs from "../../assets/docs.jpg"
import post from "../../assets/post.jpg"
import { AnimatePresence, motion } from 'framer-motion';


interface ServicesProps {
  setColor: (color: string) => void;
}

const outViewAnimation = {
  rotate: -20,
  y: -50,
  opacity: 0
};

const inViewAnimation = {
  rotate: 0,
  y: 0,
  opacity: 1,
  transition: {
    duration: 0.5
  }
};

const Services: React.FC<ServicesProps> = ({
  setColor
}) => {

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setColor("#1C1C1E");
    } else {
      setColor("#FFB204");
    }
  }, [inView, setColor]);

  const Services = [
    {
      title: "Immigration Assistance",
      description: "Providing expert advice for your successful international relocation journey.",
      image: immigration,
    },
    {
      title: "Document Management",
      description: "Efficiently handling all your paperwork for smooth visa applications.",
      image: docs,
    }, {
      title: "Post Landing Services",
      description: "Ensuring a smooth and hassle-free settlement in your new home.",
      image: post,
    }
  ]


  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === Services.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [Services.length]);


  return (
    <div
      ref={ref}
      className="md:px-20 px-8 w-full pb-10 flex flex-col"
    >
      <motion.h2
        className="text-white font-medium text-3xl md:text-6xl"
        animate={inView ? inViewAnimation : outViewAnimation}
        transition={{ duration: 1 }}
      >
        We Bridge Borders
      </motion.h2>
      <motion.h2
        className="font-bask italic md:mt-5 font-medium text-3xl md:text-6xl text-white"
        animate={inView ? inViewAnimation : outViewAnimation}
        transition={{ duration: 1 }}
      >
        to Create Possibilities
      </motion.h2>
      <div className="flex w-full md:flex-row flex-col justify-between md:mt-12">
        <div className="flex flex-col ">
          {Services.map((service, index) => (
            <motion.div
              key={index}
              className="flex gap-2 cursor-pointer border-b border-white/60 min-h-[100px] relative"  // Added 'relative' here
              animate={inView ? inViewAnimation : outViewAnimation}
              transition={{ duration: 1, delay: index * 0.5 }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="max-w-[450px]">
                <div className={`flex gap-4 mt-5 ${index === activeIndex ? "" : "opacity-40"}`}>
                  <h3 className="text-white font-medium md:mt-0 mt-1 md:text-xl font-bask italic">
                    0{index + 1}
                  </h3>
                  <h3 className="text-white font-medium text-xl md:text-3xl">
                    {service.title}
                  </h3>
                </div>
                {index === activeIndex && (
                  <p className="text-white md:text-lg text-sm mt-1 ml-9 font-normal md:mt-2 mb-4 ">
                    {service.description}
                  </p>
                )}
              </div>
              <AnimatePresence>
                {index === activeIndex && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    className="h-[1px] bg-white absolute bottom-0 left-0"
                    transition={{ duration: 3 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}


        </div>
        <div
          className="md:w-[56%] h-[300px] w-full md:h-[470px] md:p-5 overflow-hidden mt-10 md:mt-[-30px]"
        >
          <img src={Services[activeIndex].image.src} alt="" className="w-full h-full object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  )
}

export default Services;
