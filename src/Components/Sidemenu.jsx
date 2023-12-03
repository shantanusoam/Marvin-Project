import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
export default function Sidemenu({ Links, open }) {
  return (
    <dov className="absolute md:hidden block z-[200] text-gray-700 w-full h-20">
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ height: 0 }}
            animate={{
              height: 200,
            }}
            exit={{
              width: 0,
              transition: { delay: 1.8, duration: 0.6 },
            }}
          >
            <motion.div
              className="container flex flex-row"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div>
                {Links[0].map(({ name, href, id }) => (
                  <motion.a
                    key={id}
                    className="text-gray-700 hover:text-black"
                    href={href}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    {name}
                  </motion.a>
                ))}
              </div>
              <div>
                {Links[1].map(({ name, href, id }) => (
                  <motion.a
                    key={id}
                    className="text-gray-700 hover:text-black"
                    href={href}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    {name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </dov>
  );
}
