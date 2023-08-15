import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './Button.css';

const imageButton = ({ imageUrl, linkUrl }) => {
  const handlePress = () => {
    window.location.href = linkUrl;
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image source={imageUrl} style={styles.image} />
    </TouchableOpacity>
  );
};

const textButton=({text, linkUrl})=>{
  const handlePress=()=>{
    window.location.href=link
  }
}

export default {imageButton,textButton};

/* 버튼 사용 예시*/