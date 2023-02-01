import React, { SetStateAction, useEffect, useState } from "react";
import styles from "./pagination.module.css";


interface props{ 
    reposPerPage: number
    totalRepos: number
    curPage: number
    setCurPage: (page: number) => void
}


const Pagination: React.FC<props> = ({ reposPerPage, totalRepos, curPage, setCurPage }) => {

    const pageNumber = [];

    for (let i=1; i<= Math.ceil(totalRepos / reposPerPage); i++) {
        pageNumber.push(i);
    }

    function handleClick(number: number){
        setCurPage(number);
    }
    
    const PrevPageButton: React.FC = () => {
        if (curPage == 1){
            return (<button 
                key="previous" 
                disabled 
                className={`
                ${styles["margin-side"]}
                ${styles["prev-button"]}
                ${styles.disable}
                `}>
                    Prev</button>);
        }else{
            return (<button 
                key="previous" 
                onClick={() => setCurPage(curPage-1)} 
                className={`
                ${styles["margin-side"]}
                ${styles["prev-button"]}
                ${styles.active}
                `}>
                    Prev</button>);
        }      
    };

    const NextPageButton: React.FC = () => {
        if (curPage == Math.ceil(totalRepos / reposPerPage)){
            return(<button 
                key="next" 
                disabled 
                className={`
                ${styles["margin-side"]} 
                ${styles["next-button"]}
                ${styles.disable}
                `}
                >
                    Next</button>);
        }else{
            return(<button 
                key="next" 
                onClick={() => setCurPage(curPage+1)} 
                className={`
                ${styles["margin-side"]}
                ${styles["next-button"]}
                ${styles.active}
                `}>
                    Next</button>);
        }
    };
    
    return (
        <nav className={`${styles["stay-center"]}`}>           
            <PrevPageButton />
            {pageNumber.map(number => (
                <button 
                key={number} 
                onClick={() => setCurPage(number)} 
                className={`
                ${styles["margin-side"]}
                ${styles["circle-button"]}
                ${styles["text-in-button"]}
                ${number===curPage?styles.active:styles.disable}
                `}>
                    {number}</button>
            ))}
            <NextPageButton />
        </nav>
    )
}


export default Pagination;