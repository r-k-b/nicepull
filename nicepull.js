const url = window.location.href;
const regex = /(.*):\/\/github.com\/(.*)\/pull\/([0-9]+)/

const result = regex.exec(url);
const prNum = result[3];

function fixMessage() {
    const mergeTitle = document.getElementById('merge_title_field');
    const mergeBody = document.getElementById('merge_message_field');

    if (!mergeTitle || !mergeBody) {
        setTimeout(fixMessage, 1000);
        return;
    }

    if (!mergeBody.value) {
        return;
    }

    const newTitle = `${mergeBody.value} (#${prNum})`;
    mergeTitle.value = newTitle;
    mergeBody.value = '';
}

fixMessage();