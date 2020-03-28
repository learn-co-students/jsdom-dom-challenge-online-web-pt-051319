document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter")

    let count = setInterval(function() {
        counter.innerText++;
    }, 1000)

    //Identify DOM Elements
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    let love = document.getElementById("heart")
    let  pause = document.getElementById("pause")
    let likes = document.querySelector(".likes")

    let submitButton = document.querySelector("#submit")
    let commentList = document.querySelector("#list")

    minus.addEventListener("click", function (e) {
        counter.innerText--;
    });

    plus.addEventListener("click", function (e){
        counter.innerText++;
    });

    pause.addEventListener("click", function (e) {
        if (pause.innerText === "pause") {
            pause.innerText = "resume"
            clearInterval(count)

            plus.disabled = true;
            minus.disabled = true;
            love.disabled = true;
            submitButton.disabled = true;
        }
        else {
            count = setInterval(function () {
                counter.innerText++;
            }, 1000);
            pause.innerText = "pause"

            plus.disabled = false;
            minus.disabled = false;
            love.disabled = false;
            submitButton.disabled = false;
        }
    });

    love.addEventListener("click", function(e){
        let obj = document.getElementById(`${counter.innerText}`)
        obj ? obj.children[0].innerText++ : likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`

    })

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector("#comment-form").reset();
    });



    })
