
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')


todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const todoText = todoInput.value.trim()

        if (todoText) {
            const newTodo = document.createElement('li')

            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.checked = false;
            checkbox.addEventListener("change", () => {
                textSpan.classList.toggle("complete")
            });

            newTodo.appendChild(checkbox);

            const textSpan = document.createElement("span")
            textSpan.id = "textspan"
            console.log(textSpan)
            const textNode = document.createTextNode(todoText)
            textSpan.appendChild(textNode);

            newTodo.appendChild(textSpan)

            const deleteIcon = document.createElement("i");
            deleteIcon.classList.add("deleteIcon", "fas", "fa-times")
            deleteIcon.addEventListener("click", () => {
                const userConfrimed = confirm("Are you sure you want to delete this item?");

                if (userConfrimed) {
                    todoList.removeChild(newTodo);
                }
            });

            newTodo.appendChild(deleteIcon)

            todoList.appendChild(newTodo);

            todoInput.value = "";


        }
    }
})
