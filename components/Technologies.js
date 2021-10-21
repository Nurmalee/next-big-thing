import styles from '../styles/Technologies.module.css'
import { techList } from '../data'
import Technology from './Technology'

const Technologies = () => {

    return (
        <div className={styles.Container} id="technologies">
            <div className={styles.Content} >
                <h1>skills/technologies</h1>
                <p> Here are some of the languages I speak and technologies that I use. </p>

                <div className={styles.TechnologyCardContainer}>
                    {techList.map((tech, index) => {
                        return (
                            <Technology {...tech} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Technologies