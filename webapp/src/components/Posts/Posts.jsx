import { useState } from 'react';
import styles from './Posts.module.scss';

export default function() {
    const [likeCount, setLikeCount] = useState(0);
    const [disLikeCount, setDislikeCount] = useState(0);

    function handleLikeClick() {
        setLikeCount((count) => count + 1);
    }
    function handleDislikeClick() {
        setDislikeCount((count) => count + 1);
    }
    return ( 
        <div className={styles.container}>
            <div>
                #Dev #Meme #ITMemes
            </div>
            
            <img src="/meme1.jpg" alt="image" />

            <div className={styles.flexContainer}>
                <div onClick={() => handleLikeClick()}>
                    Like 
                    {likeCount > 0 ? ` ${likeCount}`: ''}
                </div>
                <div onClick={() => handleDislikeClick()}>
                    DisLike 
                    {disLikeCount > 0 ? ` ${disLikeCount}`: ''}
                </div>
                <div>Save</div>
                <div>Share</div>
            </div>
        </div>
    )
}