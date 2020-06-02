import React, { useState, useEffect } from "react";
import Repo from "../components/repo";

export default() => {

    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);

    useEffect(()=> {
        let myRepos;
        const data = sessionStorage.getItem("repositories");
        
        if(data){
            myRepos = JSON.parse(data);

            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1,22);

            return setRepos(myRepos);
        }

        async function fetchRepos() {
            const res = await fetch("https://api.github.com/users/denix7/repos");
            myRepos = await res.json();
            setReposCount(myRepos.length);

            sessionStorage.setItem("repositories", JSON.stringify(myRepos));

            setRepos(myRepos);
        }
        
        fetchRepos();
        
    }, []);

    return (
    <div className="max-w-4xl mx-auto mt-12">
        <header className="text-center">
            <h2 className="text-3xl font-bold">Hecha un vistazo a mi repositorio</h2>
            <p>Github</p>
        </header>

        <ul className="repos-list">
            {
                repos.map((repo) => {
                    // return <li>{repo.name}</li>
                    return <Repo repo={repo} key={repo.id} />
                })
            }
        </ul>

        <div className="btn text-center mt-8">
            <a href="https://github.com/denix7" className="btn" target="_blank" rel="noopener noreferrer">
                Ver mas en github ({reposCount})
            </a> 
        </div>
    </div>
)}