import axios from "axios";
import { create } from "zustand";


export const useAuth = create((set) => ({
    token: "",
    login: async (data) => {
        console.log(data);
        let res = await axios.post("http://10.171.241.183:5000/api/auth/login", data);
        // console.log(res.data);
        set({ token: res.data.token })

    }
}))