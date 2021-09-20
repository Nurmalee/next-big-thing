import styles from '../styles/Banner.module.css'
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Banner = () => {
    return (
        <div className={styles.container}>
            <h1> This is Nurudeen </h1>
            <h1> Front-end Developer </h1>
            <p> Imagination makes sense, how about actually building it? You are welcome to the hub of enthralling and functional user facing views </p>

            <div className={styles.buttons}>
                <button> download my CV </button>
                <button> view projects </button>
                {/* <button> view projects <ArrowRightAltIcon /> </button> */}
            </div>
        </div>
    )
}

export default Banner
