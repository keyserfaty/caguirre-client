export const readBarWidth = (scrollPosition, windowHeight) => {
  if (windowHeight > 0) {
    return scrollPosition * 100 / windowHeight
  } else {
    return 0
  }
}
