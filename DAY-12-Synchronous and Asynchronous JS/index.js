const list = document.querySelector(".list_todo");
list.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("cross")) {
        e.target.parentElement.parentElement.style.display = "none";
        let stored_data = localStorage.getItem("todo");
        let stored_data_parsed = JSON.parse(stored_data);
        let new_arr = stored_data_parsed.element;
        for (let i = 0; i < stored_data_parsed.element.length; i++) {
            if (
                e.target.parentElement.parentElement.children[0].innerText ==
                stored_data_parsed.element[i]
            )
                new_arr.splice(i, 1);
        }
        let new_obj = {
            element: new_arr,
        };
        localStorage.setItem("todo", JSON.stringify(new_obj));
        if (stored_data_parsed.element.length == 0) {
            localStorage.clear()
            document.querySelector(".emptylist").style.display = 'block'
        }
    }

    if (e.target.classList.contains("list_element")) {
        e.target.classList.toggle("task_complete");
    }

});


let add = document.querySelector(".add_btn");
let add_input = document.querySelector(".add_input");

(function() {
    let stored_data = localStorage.getItem("todo");
    let stored_data_parsed = JSON.parse(stored_data);
    if (stored_data_parsed != null) {
        document.querySelector(".emptylist").style.display = 'none'
        for (let i = 0; i < stored_data_parsed.element.length; i++) {
            let elem = `
        <div class="list_element">${stored_data_parsed.element[i]}</div>
        <div class="cross">
          <i class="fas fa-times"></i>
        </div>`;
            let li = document.createElement("li");
            li.innerHTML = elem;
            list.appendChild(li);
        }
    }
})();


add.addEventListener("click", () => {
    if (add_input.children[0].value !== "") {

        let elem = `
        <div class="list_element">${add_input.children[0].value}</div>
        <div class="cross">
          <i class="fas fa-times"></i>
        </div>`;
        let li = document.createElement("li");
        li.innerHTML = elem;
        list.appendChild(li);
        document.querySelector(".emptylist").style.display = 'none'
            // Storing in LocalStorage

        let obj = {
            element: [add_input.children[0].value],
        };

        let data = localStorage.getItem("todo");
        let data_obj = JSON.parse(data);

        if (data_obj != null) {
            data_obj.element.push(obj.element[0]);
            localStorage.setItem("todo", JSON.stringify(data_obj));
        } else {
            localStorage.setItem("todo", JSON.stringify(obj));
        }
        add_input.children[0].value = " ";
    }
});