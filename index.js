import core from '@actions/core';
import { customAlphabet } from 'nanoid';

function run() {
    try {
        const alphabet = core.getInput('alphabet');
        const length = Number(core.getInput('length'));
        const nanoid = customAlphabet(alphabet, length);
        const id = nanoid();
        console.log(id);
        core.setOutput("id", id);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();