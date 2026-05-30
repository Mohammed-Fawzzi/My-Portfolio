export const FadeUp = (delay) => ({
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  },
});

export const FadeLeft = (delay, isRtl = false) => ({
  hidden: { opacity: 0, x: isRtl ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay },
  },
});

export const FadeRight = (delay, isRtl = false) => ({
  hidden: { opacity: 0, x: isRtl ? 100 : -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay },
  },
});
