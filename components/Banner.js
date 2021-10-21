import styles from '../styles/Banner.module.css'
import { ArrowRightAlt, CloudDownload } from '@material-ui/icons';

const Banner = () => {
    return (
        <div className={styles.container} id='home'>
            <div className={styles.content}>
                <h1> This is NURUDEEN </h1>
                <h1> Front-end Developer </h1>
                {/* <p> Imagination makes sense, how about actually building it? You are welcome to the hub of enthralling and functional user facing views </p> */}
                <p> Imagination is good, but what cuts it is the actualization of possibilities. Cooking up ideas never felt better. Let&apos;s build </p>

                <div className={styles.buttons}>
                    <a href="https://drive.google.com/file/d/1cAo19FDYrq_MGgJQOQT3PIhlPZ5YIgQb/view?usp=sharing" download target="_blank" rel="noreferrer"> download my CV <CloudDownload style={{marginLeft: "10px"}} /> </a>
                    <a href="#projects"> view projects <ArrowRightAlt style={{marginLeft: "10px"}} /> </a>
                    {/* <button> view projects <ArrowRightAltIcon /> </button> */}
                </div>
            </div>
        </div>
    )
}

export default Banner
