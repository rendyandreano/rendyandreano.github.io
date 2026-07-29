import { useEffect, useState } from "react";
import { useRef } from "react";

export function useShowMore<T>(
  items: T[],
  desktopVisible = 6,
  mobileVisible = 3
) {
  const [expanded, setExpanded] = useState(false);
  const [initialVisible, setInitialVisible] = useState(desktopVisible);

  useEffect(() => {
    const handleResize = () => {
      setInitialVisible(
        window.innerWidth < 768
          ? mobileVisible
          : desktopVisible
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, [desktopVisible, mobileVisible]);

  const sectionRef = useRef<HTMLElement>(null);
  const toggle = () => {
  if (expanded) {
    setExpanded(false);

    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);
  } else {
    setExpanded(true);
  }
};

  const visibleItems = expanded
    ? items
    : items.slice(0, initialVisible);

  return {
    expanded,
    visibleItems,
    initialVisible,
    toggle,
    sectionRef
  };
}