import loadTest from "./scenarios/loadTest.js";
import { options as loadTestOptions } from "./scenarios/loadTest.js"; 

export const options = loadTestOptions;

export default function() {
    loadTest();
}
