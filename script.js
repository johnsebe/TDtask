const taskList = document.getElementById("taskList");

const addSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3");
const checkSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-click-tone-1110.mp3");
const deleteSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-trash-click-1129.mp3");

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    addSound.play();

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = () => {
        li.classList.toggle("completed");
        checkSound.play();
    };

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
        deleteSound.play();
        li.style.animation = "fadeOut 0.3s forwards";
        setTimeout(() => li.remove(), 300);
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    input.value = "";
}
