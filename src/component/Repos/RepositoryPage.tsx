import { Repository } from "@/type/Repository";
import React from "react";
import styles from "./repos.module.css";
import Image from "next/image";
import { Router, useRouter } from "next/router";

interface props{ 
  repos: Repository[]
  loading: boolean
}

const Repos: React.FC<props> = ({ repos, loading}) => {
    if (loading) {
        return <h1> loading... </h1>;
      }
    
    const router = useRouter();
    
    return (
        <div className={styles["repo-grid"]}>       
            {repos.map(data => {
                return (
                    <div className={`${styles["card-content"]}`} onClick={() => router.push(data.html_url)}>
                        <div className={`${styles.card}`}>
                            <div className={styles["card-header"]}>
                                <div className={`${styles["avatar-container"]}`}>
                                    <img 
                                        className={styles["card-avatar"]}
                                        alt={data.owner.login}
                                        src={data.owner.avatar_url}
                                        />
                                </div>
                                <h3>{data.owner.login}</h3>
                            </div>
                            <div className={styles["card-info"]}>
                                <h3 className={styles.text}>{data.name}</h3>
                                <p className={styles.text2}>{data.description}</p>
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