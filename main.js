const form = document.getElementsByClassName('form')[0];
        form.addEventListener('submit', getFormValue);

        function getFormValue(event) {
            event.preventDefault();
            const zag = form.querySelector('[name="zag"]'); //получаем поле name
            const op = form.querySelector('[name="op"]'); //получаем поле age
            if (document.getElementsByClassName('cards')[0].innerHTML == "Список пуст")
            {
                document.getElementsByClassName('cards')[0].innerHTML = "";
            }
            document.getElementsByClassName('cards')[0].innerHTML += `<div class="card"><h3>${zag.value}</h3></br><p>${op.value}</p></div>`;
            zag.value = "";
            op.value = "";
            modal.style.display = "none";
        }    

        var modal = document.getElementById('myModal');
        var btn = document.getElementsByClassName("myBtn")[0];
        var span = document.getElementsByClassName("close")[0];
        btn.onclick = function () {
            modal.style.display = "block";
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }