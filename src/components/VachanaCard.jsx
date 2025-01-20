import { motion } from "framer-motion";

const VachanaCard = ({ vachana, onNext, onFavorite }) => (
  <motion.div
    className="vachana-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <p>{vachana}</p>
    <div className="actions">
      <button onClick={onFavorite}>Favorite</button>
      <button onClick={onNext}>Next</button>
    </div>
  </motion.div>
);

export default VachanaCard;
