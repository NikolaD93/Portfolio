import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom },
    }),
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-social">
        <div>
          <a
            href="https://www.linkedin.com/in/nikoladojcinovic93/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a href="https://github.com/NikolaD93" target="_blank">
            <BsGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCcHSX6C51HNqchQMjaHs3_A"
            target="_blank"
          >
            <BsYoutube />
          </a>
        </div>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div>
              <a href={`#${item}`}>{item}</a>
            </div>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -1000, opacity: 1, transition: { duration: 0.8 } }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "work", "skills", "contact"].map(
                  (item, index) => (
                    <motion.li
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      custom={(index + 1) * 0.25}
                      key={item}
                    >
                      <a onClick={() => setToggle(false)} href={`#${item}`}>
                        {item}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
