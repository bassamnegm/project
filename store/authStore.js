import axios from "axios";
import { create } from "zustand";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const useAuth = create((set) => ({
    token: "",
    login: async (data) => {
        console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password).then(res => {
            console.log(res)
        }).catch(err => console.log(err))


    },
    signUp: async (data) => {
        try {
            let res = await createUserWithEmailAndPassword(auth, data.email, data.password)

            console.log(res);

        }
        catch (e) {
            console.log(e);
        }




    }
}))