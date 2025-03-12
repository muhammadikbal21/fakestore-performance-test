import { check } from "k6";
import { BASE_URL } from "../configs/baseUrl.js";
import { postRequest } from "./httpHelper.js";

export function login(body) {
    const loginResponse = postRequest(`${BASE_URL}/auth/login`, body, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }, [200]);
    check(loginResponse, {
        'login response is 200': (response) => response.status === 200
    });

    return loginResponse;
}