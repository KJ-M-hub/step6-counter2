(() => {


    const $button = document.getElementsByClassName("js-button");
    console.log("$button",$button);
    const $counter = document.getElementById("js-counter");

    /*
    clickHandler関数
    クリックした場所の情報を選択し(e.currentTarget)、そのテキスト内容に合わせて
    数字を加減していく命令
    */
    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        const currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+") {
            $counter.textContent = currentCount + 1;
        } else {
            $counter.textContent = currentCount - 1;
        }

        if($targetButton.textContent === "+10") {
            $counter.textContent = currentCount + 10;
        } else if($targetButton.textContent === "-10"){
            $counter.textContent = currentCount - 10;
        }

    }

    /*同じ命令を複数書くのは冗長なのでfor文を使う。
    ２つのボタンに,クリック時、クリックハンドラー関数をコールバックするイベントをもたせた(addEventLister) */
    for(let index = 0; index < $button.length; index++ ){
        $button[index].addEventListener("click",(e) => clickHandler(e));
    }



})();







