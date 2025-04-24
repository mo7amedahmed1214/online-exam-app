"use server"

import { JSON_HEADER } from "@/lib/constants/api.constant"
import { registerFields } from "@/lib/schemes/auth.schema"


export async function signUp(values: registerFields) {
    const respons = await fetch(`${process.env.API}/auth/signup`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            ...JSON_HEADER
        },
    })
    const paylode: ApiResponse<LoginResponse> = await respons.json();

   
    console.log(paylode);
    return paylode;

}