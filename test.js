import loadTest from "./scenarios/loadTest.js";
import { options as loadTestOptions } from "./scenarios/loadTest.js";
import stressTest from "./scenarios/stressTest.js";
import { options as stressTestOptions } from "./scenarios/stressTest.js";

export const options = {
    thresholds: {
        ...loadTestOptions.thresholds,  // Copy isi thresholds dari loadTestOptions
        ...stressTestOptions.thresholds // Copy isi thresholds dari stressTestOptions
        // dengan ..., kita bisa menggabungkan dua objek thresholds tanpa menimpa yang sudah ada
    },
    scenarios: {
        load_test: loadTestOptions.scenarios.load_test, 
        stress_test: stressTestOptions.scenarios.stress_test 
    }
};

export default function () {
    // Jika Virtual User (VU) adalah angka genap → menjalankan loadTest().
    // Jika VU adalah angka ganjil → menjalankan stressTest().
    if (__VU % 2 === 0) {
        loadTest();
    } else {
        stressTest();
    }
};
