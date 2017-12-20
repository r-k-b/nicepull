const url = window.location.href;
const regex = /(.*):\/\/github.com\/(.*)\/pull\/([0-9]+)/

const result = regex.exec(url);
const prNum = result[3];

function fixMessageTimer() {
    const mergeTitle = document.getElementById('merge_title_field');
    const mergeBody = document.getElementById('merge_message_field');

    const buttons = Array.from(document.getElementsByClassName('BtnGroup btn-group-merge')); 

    if (!mergeTitle || !mergeBody || buttons.length === 0) {
        setTimeout(fixMessage, 1000);
        return;
    }

    buttons.forEach(b => b.addEventListener('mousedown', fixMessage));

    fixMessage();
}

function fixMessage() {
    const mergeTitle = document.getElementById('merge_title_field');
    const mergeBody = document.getElementById('merge_message_field');

    if (!mergeBody.value) {
        return;
    }

    const newTitle = `${mergeBody.value} (#${prNum})`;
    mergeTitle.value = newTitle;
    mergeBody.value = '';
}

fixMessageTimer();