const url = window.location.href;
const regex = /(.*):\/\/github.com\/(.*)\/pull\/([0-9]+)/

const result = regex.exec(url);
const prNum = result[3];

console.log(url);
console.log(result);

const mergeTitle = document.getElementById('merge_title_field');
const mergeBody = document.getElementById('merge_message_field');

const newTitle = `${mergeBody.value} (#${prNum})`;
mergeTitle.value = newTitle;
mergeBody.value = '';