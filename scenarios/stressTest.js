import { login } from "../helpers/authHelper.js";

export const options = {
    thresholds: {
        http_req_duration: ['p(95) < 1000'], // 95% request harus selesai di bawah 1000ms
        http_req_failed: ['rate < 0.05'],   // Error rate harus kurang dari 5%
        vus: ['value >= 100'],              // Pastikan minimal 100 VUs berjalan
        checks: ['rate > 0.90'],            // 90% check harus lolos (misal status 200)
    },
    scenarios: {
        stress_test: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '20s', target: 250 },  // Naik ke 250 VUs dalam 20 detik
                { duration: '20s', target: 500 },  // Naik ke 500 VUs dalam 20 detik
                { duration: '1m', target: 500 },   // Bertahan di 500 VUs selama 1 menit
                { duration: '30s', target: 0 }     // Turun kembali ke 0 VUs dalam 30 detik
            ],
        },
    },
};

export default function stressTest() {
    const loginRequest = {
        username: 'johnd',
        password: 'm38rmF$'
    }
    login(loginRequest);
};