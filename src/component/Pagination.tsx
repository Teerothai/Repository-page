import React, { SetStateAction, useEffect, useState } from "react";

interface props{ 
    reposPerPage: number
    totalRepos: number
    curPage: number
    setCurPage: (page: number) => void
}

const Pagination: React.FC<props> = ({ reposPerPage, totalRepos, curPage, setCurPage }) => {
    
    // const [pageNumber, setPageNumber] = useState<number[]>([]);
    
    // useEffect(() => {
    //     setPageNumber(Array.from(Array(totalRepos/reposPerPage).keys()))
    // },[]);
     //Chnage page

    const pageNumber = [];
     // const paginate = (pageNumber: number/* pageNumber: SetStateAction<number> */) => setCurPage(pageNumber);

    for (let i=1; i<= Math.ceil(totalRepos / reposPerPage); i++) {
        pageNumber.push(i);
    }
    
    return (
        <nav>
                {pageNumber.map(number => (
                    <button key={number} onClick={() => setCurPage(number)}>
                        {number}
                    </button>
                ))}
        </nav>
    )
}


export default Pagination;