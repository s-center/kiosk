import React from 'react';
import LayoutOnlyHeader from '../components/Layout/Layout/LayoutOnlyHeader';
import Header from '../components/Layout/Header/Header';
import button from '../images/버튼예시.png';
const StartPage_1 = () =>{
    return(<div>
     <Header/>
     <div>
     <View style={styles.container}>
      <ImageButton
        imageUrl={button} // 로컬 이미지 파일 경로
        linkUrl=""
      />
    </View>
    </div>
    
     </div>
    )
}