import {useEffect, useRef, useState} from "react";

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function useEventListener(
  // @ts-expect-error: any
  eventType,
  // @ts-expect-error: any
  callback,
  element = window
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return
    // @ts-expect-error: any
    const handler = e => callbackRef.current(e)
    element.addEventListener(eventType, handler)

    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}

export function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false)
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null)
  useEffect(() => {
    const list = window.matchMedia(mediaQuery)
    console.log(list)
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [mediaQuery])
  // @ts-expect-error: any
  useEventListener("change", e => setIsMatch(e.matches), mediaQueryList)
  return isMatch
}
