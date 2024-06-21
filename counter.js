(() => {

        const $button = document.getElementsByClassName("js-button");
        const $counter = document.getElementById("js-counter");
        const $plusBtn = document.getElementById("js-plus-button");
        const $minusBtn = document.getElementById("js-minus-button");
        const $plus10Btn = document.getElementById("js-plus10-button");
        const $minus10Btn = document.getElementById("js-minus10-button");
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
            let intervalId = setInterval(startContinueClick,170);
            $plusBtn.addEventListener("mouseup",() => {
                clearInterval(intervalId);
            });
            $plusBtn.addEventListener("mouseleave",() => {
                clearInterval(intervalId);
            });
        });
        //ーボタン上でマウスを押し続けたら数字が減り続けるイベント
        $minusBtn.addEventListener("mousedown",() => {
            (e) => clickHandler(e);
            let intervalId = setInterval(startContinueClick,170);
            $minusBtn.addEventListener("mouseup",() => {
                clearInterval(intervalId);
            });
            $minusBtn.addEventListener("mouseleave",() => {
                clearInterval(intervalId);
            });
        });

        //＋10ボタン上でマウスを押し続けたら数字が増えるイベント
        $plus10Btn.addEventListener("mousedown",() => {
            (e) => clickHandler(e);
            let intervalId = setInterval(startContinueClick,170);
            $plus10Btn.addEventListener("mouseup",() => {
                clearInterval(intervalId);
            });
            $plus10Btn.addEventListener("mouseleave",() => {
                clearInterval(intervalId);
            });
        });
         //ー10ボタン上でマウスを押し続けたら数字が減り続けるイベント
         $minus10Btn.addEventListener("mousedown",() => {
            (e) => clickHandler(e);
            let intervalId = setInterval(startContinueClick,170);
            $minus10Btn.addEventListener("mouseup",() => {
                clearInterval(intervalId);
            });
            $minus10Btn.addEventListener("mouseleave",() => {
                clearInterval(intervalId);
            });
        });

        const startContinueClick = (e) => {
            if(document.activeElement === $plusBtn){
                $counter.textContent = parseInt($counter.textContent) + 1;
            }else if(document.activeElement === $minusBtn){
                $counter.textContent = parseInt($counter.textContent) - 1;
            }else if(document.activeElement === $plus10Btn){
                $counter.textContent = parseInt($counter.textContent) + 10;
            }else if(document.activeElement === $minus10Btn){
                $counter.textContent = parseInt($counter.textContent) - 10;
            }
        };


})();
