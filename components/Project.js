import styles from '../styles/Project.module.css'
// import Image from 'next/image'

const Project = ({imageUrl, title, desc, link, info }) => {
    return (
        <div className={styles.Project}>
            <div className={styles.ImageBox}>
                {/* <Image 
                    src={imageUrl} 
                    alt="title" 
                    width={500}
                    height={500}
                    layout='responsive'
                    // layout="fill"
                    // objectFit="cover" 
                /> */}

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt="title" />
            </div>
           
            <div className={styles.ProjectInfo}>
                <h2>{title}</h2>
                <p>{desc}</p>
                <a target="_blank" rel="noreferrer" href={link}> visit app </a>
            </div>
        </div>
    )
}

export default Project
