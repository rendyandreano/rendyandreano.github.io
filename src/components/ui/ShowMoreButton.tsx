import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ShowMoreButtonProps {
  expanded: boolean;
  onClick: () => void;
}

const ShowMoreButton = ({
  expanded,
  onClick,
}: ShowMoreButtonProps) => {
  return (
    <div className="flex justify-center mt-10">
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={onClick}
        className="
          group
          inline-flex
          items-center
          gap-2
          text-base
          font-medium
          text-primary
          transition-all
          duration-300
          hover:opacity-80
          hover:-translate-y-1
        "
      >
        <span className="relative">
          {expanded ? "Show Less" : "Show More"}

          <span
            className="
              absolute
              left-0
              -bottom-1
              h-0.5
              w-0
              bg-primary
              transition-all
              duration-300
              group-hover:w-full
            "
          />
        </span>

        <motion.div
          animate={{
            rotate: expanded ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <ChevronDown
            className="w-[18px] h-[18px]"
          />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ShowMoreButton;