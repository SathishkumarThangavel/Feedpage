import styles from './Layout.module.scss';

export default function (props) {
    return (
        <div className={styles.layoutContainer}>
            <div className={styles.topBar}>
                <div className={styles.organization}>
                    <img src="/Logo.png" width="30px" />
                </div>
                <div className={styles.profile}>
                    <span>Jenifer</span>
                    <img src='/profilepic.jpg' width="30px" />
                </div>
            </div>
            <div className={styles.contentContainer}>
                {props.children}
            </div>
        </div>
    )
}