import React, {useEffect} from "react";
import Games from "../Games"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Listgames from "../Quiz/Listgames";

export default function Home (){

    return (
        <div>
            <h1>Cast your spell and conquer the trivia in QuizCraft</h1>
            <Games />
            <Listgames />
        </div>
    )
}