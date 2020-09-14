import { motion } from "framer-motion";
import Portfolio from "../components/Portfolio";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 1,
      }}
      exit={{ opacity: 0, y: -50 }}
      className=' flex flex-col'
    >
      <Portfolio />
    </motion.div>
  );
};

export default Index;
