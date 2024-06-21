(() => {

        const $button = document.getElementsByClassName("js-button");
        const $counter = document.getElementById("js-counter");
        const $plusBtn = document.getElementById("js-plus-button");
        const $minusBtn = document.getElementById("js-minus-button");
        // let intervalId;
        /*
        clickHandler関数
        クリックした場所の情報を選択し(e.currentTarget)、そのテキスト内容に合わせて
        数字を加減していく命令
        */
        const clickHandler = (e) => {
            e.preventDefault();
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

        for(let index = 0; index < $button.length; index++ ){
            $button[index].addEventListener("click",(e) => clickHandler(e));
        }



        //＋ボタン上でマウスを押し続けたら数字が増えるイベント
        $plusBtn.addEventListener("mousedown",() => {
            (e) => clickHandler(e);
            let intervalId = setInterval(startContinueClick,100);
            $plusBtn.addEventListener("mouseup"||"mouseleave",() => {
                clearInterval(intervalId);
            });
        });
        //ーボタン上でマウスを押し続けたら数字が減り続けるイベント
        $minusBtn.addEventListener("mousedown",() => {
            (e) => clickHandler(e);
            let intervalId = setInterval(startContinueClick,100);
            $minusBtn.addEventListener("mouseup"||"mouseleave",() => {
                clearInterval(intervalId);
            });
        });

        const startContinueClick = (e) => {
            if(document.activeElement === $plusBtn){
                $counter.textContent = parseInt($counter.textContent) + 1;
            }else if(document.activeElement === $minusBtn){
                $counter.textContent = parseInt($counter.textContent) - 1;
            }
        };


})();
