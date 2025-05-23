"use client";
 
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/_utils/animate";
 
export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);
 
  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
 
  const [hovering, setHovering] = useState(false);
  
  return (
    <>
      <div
        className={cn(
          "flex flex-row gap-5 flex-wrap items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 border-new-black border rounded-md", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 bg-new-black rounded-md",
                  activeTabClassName
                )}
              />
            )}
 
            <span className={active.value === tab.value ? "relative block text-white text-xl xl:text-lg md:text-base font-medium" : "relative block text-brown text-xl xl:text-lg md:text-base font-medium"}>
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-10", contentClassName)}
      />
    </>
  );
};
 
export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full max-h-[600px] h-full overflow-hidden sm:max-h-[700px]">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -43 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full flex flex-col gap-5 absolute top-0 left-0 text-new-black bg-bg-gray p-5 rounded-md", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};