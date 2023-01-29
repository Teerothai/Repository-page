import { Repository } from "@/type/Repository";
import React from "react";


interface props{ 
  repos: Repository[]
  loading: boolean
}

const Repos: React.FC<props> = ({ repos, loading}) => {
    if (loading) {
        return <h1> loading... </h1>;
      }
    
    
    return (
        <ul>
            {repos.map(data => {
                return (
                <li key={data.id}>
                    {data.id}
                    {data.name}
                    {data.full_name}
                    {data.description}
                    {data.url}
                </li>
                );
            })}

        </ul>
    )


}

export default Repos;

// className={`${styles.card} ${styles.red}`} 