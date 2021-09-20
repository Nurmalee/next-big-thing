import styles from '../styles/Introduction.module.css'

const Introduction = () => {
    return (
        <div className={styles.container}>
            <div className={styles.video_container}>
                <video controls width="250">
                    <source src="/media/cc0-videos/flower.webm" type="video/webm" />
                    <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
                    Sorry, your browser does not support embedded videos.
                </video>
            </div>
        </div>
    )
}

export default Introduction
