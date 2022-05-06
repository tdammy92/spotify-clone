import { Dimensions } from "react-native";
import React,{useEffect,useState} from "react";

import { getStatusBarHeight } from 'react-native-status-bar-height';



function useDimension() {
  const [StatusBarHeight, setStatusBarHeight] = useState(0)
  const { height } = Dimensions.get("window");
  const Ev = (1 + Math.sqrt(5)) / 2;
  
   const MIN_HEADER_HEIGHT = 64 +StatusBarHeight;
   const MAX_HEADER_HEIGHT = height * (1 - 1 / Ev);
   const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;
   

   useEffect(() => {
  setStatusBarHeight(getStatusBarHeight())
   }, [])
   
  return {MIN_HEADER_HEIGHT,
    MAX_HEADER_HEIGHT,
    HEADER_DELTA,StatusBarHeight}
}


export default useDimension;