(() => {

const $counter = document.getElementById("js-counter");

const clickHandler = () => {
    if (confirm("本当にresetしますか？")) {
        $counter.textContent = 0;
    }
    // $counter.textContent = 0;
};

document.getElementById("js-reset-button").addEventListener("click",clickHandler);


})();