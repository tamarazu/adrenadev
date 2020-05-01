import React from 'react';
import ReactLoading from 'react-loading';

import LoadingPicture from '../assets/loading.gif'
 
export default function Loading() {
    return (
        <div className="loading">
            <img src={LoadingPicture}/>
            {/* <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_ctopYC.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> */}
        </div>
    )
}