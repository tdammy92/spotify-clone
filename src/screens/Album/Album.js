import  React,{useState,useEffect} from "react";
import { View, StyleSheet,Text } from "react-native";
import Animated,{useValue} from "react-native-reanimated";
import { useDispatch,useSelector } from 'react-redux';

//Local imports
import album from "../../services/Data/albumDetails";
import Content from "./album component/Content";
import Cover from "./album component/Cover";
import { getAlbumDetails,albumSelector } from "../../store/albumReducer";
import { Loader } from "../../components";


export default ({route}) => {

  const {albumId} = route.params
  const dispatch = useDispatch()


  const {albumDetails,isLoading}  = useSelector(albumSelector)

  // console.log(albumId);
  
  
  const { Value } = Animated;
  const y = new Value(0);


  useEffect(() => {
 dispatch(getAlbumDetails(albumId))
  }, [])
  
if (isLoading) {
  return <Loader/>
}


  // console.log("from album page",albumDetails);

  return (

    <>
   {albumDetails?.tracks&& <View style={styles.container}>
     {albumDetails && <Cover {...{ y, albumDetails }} />}
    { albumDetails && <Content {...{ y,albumDetails }} />}
    </View>}

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
