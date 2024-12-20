import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileINView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app_header-info"
      >
        <div className="app_header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Samrat</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
