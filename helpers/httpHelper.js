import http from 'k6/http';
import { check } from 'k6';

export function getRequest(url, headers = {}) {
    const response = http.get(url, { headers });
    check(response, { 'Status 200': (res) => res.status === 200 });
    return response;
}

export function postRequest(url, body, headers = {}, validStatuses = [201]) {
    const response = http.post(url, body, { headers });
    check(response, {
        [`Status ${validStatuses.join(" or ")}`]: (res) => validStatuses.includes(res.status),
        // .join(" or ") mengubah array menjadi string dengan pemisah " or " yang hasilnya: "200 or 201"
        // validStatuses.includes(res.status) mengecek apakah res.status ada di dalam array validStatuses
    });
    return response;
}