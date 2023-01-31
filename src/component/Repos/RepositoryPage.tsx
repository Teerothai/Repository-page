import { Repository } from "@/type/Repository";
import React from "react";
import styles from "./repos.module.css";

interface props{ 
  repos: Repository[]
  loading: boolean
}

const Repos: React.FC<props> = ({ repos, loading}) => {
    if (loading) {
        return <h1> loading... </h1>;
      }
    
    
    return (
        <div className={styles["repo-grid"]}>       
            {repos.map(data => {
                return (
                    <div className={`${styles["card-content"]}`}>
                        <div className={`${styles.card}`}>
                           <div className={`${styles["card-info"]}`}>
                            <h3 className={styles.text}>{data.full_name}</h3>
                            <p><span>Name: </span>{data.name} </p>
                            <p><span>Id: </span>{data.id}</p>
                            <div className={styles.description}>
                            <p><span>Description: </span>{data.description}</p>
                            </div>
                            <div>
                            <p><span>Url: </span>{data.url}</p>
                            </div>
                            </div> 
                        </div>
                    </div>
                );
            })}
        
        </div>
    )


}

export default Repos;

// className={`${styles.card} ${styles.red}`} 




{/* <p key={data.id}>
                    {data.id}
                    {data.name}
                    {data.full_name}
                    {data.description}
                    {data.url}
                </p> */}