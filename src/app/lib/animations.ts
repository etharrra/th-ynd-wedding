export const riseUpAnimation = {
    initial: { opacity: 0, y: 80 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" as const },
};
