import { response } from "express";

export async function login({email, password}) {
    return await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {"Content-Type": "application/json"},
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}

export async function searchAnime({keyword}) {
    return await fetch(`/api/homepage/getAnime/${keyword}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then((response) => {
        if(!response.ok){
            throw new Error("HTTP status " + response.status);
        }
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });
}