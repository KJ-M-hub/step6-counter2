(() => {


    const $button = document.getElementById("js-button");
    const $counter = document.getElementById("js-counter");
   
    $button.addEventListener("click", () => {
        let currentCount = parseInt($counter.textContent); //counterの文字列を数値に変える
        $counter.textContent = currentCount + 1; //counterの数値が１つずつ大きくなっていく
    });






})();







