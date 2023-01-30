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
    //Change page

    const pageNumber = [];
    // const paginate = (pageNumber: number/* pageNumber: SetStateAction<number> */) => setCurPage(pageNumber);

    for (let i=1; i<= Math.ceil(totalRepos / reposPerPage); i++) {
        pageNumber.push(i);
    }

    const NextPageButton: React.FC = () => {
        if (curPage == 1){
            return (<button key="previous" disabled>Previous</button>);
        }else{
            return (<button key="previous" onClick={() => setCurPage(curPage-1)}>Previous</button>);
        }      
    };

    const PreviousPageButton: React.FC = () => {
        if (curPage == Math.ceil(totalRepos / reposPerPage)){
            return(<button key="next" disabled>Next</button>);
        }else{
            return(<button key="next" onClick={() => setCurPage(curPage+1)}>Next</button>);
        }
    };
    
    return (
        <nav>           
            <NextPageButton />
            {pageNumber.map(number => (
                <button key={number} onClick={() => setCurPage(number)}>{number}</button>
            ))}
            <PreviousPageButton />
        </nav>
    )
}


export default Pagination;