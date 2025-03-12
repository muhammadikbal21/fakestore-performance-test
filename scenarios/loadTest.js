import { login } from "../helpers/authHelper.js";

export const options = {
    thresholds: {
        http_req_duration: ['p(95) < 1500'], // 95% request harus selesai di bawah 1500ms
        http_req_failed: ['rate < 0.01'],   // Error rate harus kurang dari 1%
        vus: ['value >= 50'],               // Pastikan minimal 50 VUs berjalan
        checks: ['rate > 0.95'],            // 95% check harus lolos (misal status 200)
    },
    scenarios: {
        load_test: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '30s', target: 50 },  // Naik ke 50 VUs dalam 30 detik
                { duration: '30s', target: 100 },   // Bertahan di 100 VUs selama 30 detik
                { duration: '15s', target: 0 }    // Turun kembali ke 0 VUs dalam 15 detik
            ],
        },
    },
};

export default function loadTest() {
    const loginRequest = {
        username: 'johnd',
        password: 'm38rmF$'
    }
    login(loginRequest);
};