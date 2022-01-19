"use strict";

let toDos = [];
let doing = [];

const inputText = document.getElementById("add-text");
const inputButton = document.getElementById("btn");
const toDoList = document.getElementById("todo");
const doingList = document.getElementById("doing");

inputButton.addEventListener("click", () => {
  const inputToDo = () => {
    toDos = [...toDos, inputText.value];
    inputText.value = "";
    showToDoList();
  };
  inputText.value === "" ? alert("文字を入力してください!") : inputToDo();
});

const showToDoList = () => {
  toDoList.innerHTML = "";
  const toDoAll = toDos.map((todo, index) => {
    return  `<li>
                <span>${todo}</span>
                <button onclick="editToDoButton(${index})"}>編集</button>
                <button onclick="startButton(${index})"}>着手</button>
                <button onclick="deleteToDoButton(${index})"}>削除</button>
            </li>`;
  });
  toDoList.innerHTML = toDoAll.join('');
};

const editToDoButton = (index) => {
  const editToDo = prompt("編集内容を入力して下さい");
  editToDo === "" ? alert("文字を入力してください!") : toDos.splice(index, 1, editToDo);
  showToDoList();
};
const deleteToDoButton = (index) => {
  toDos.splice(index, 1);
  showToDoList();
};
const startButton = (index) => {
  doing = [...doing, toDos[index]];
  toDos.splice(index, 1);
  showToDoList();
  showDoingList();
};

const showDoingList = () => {
  doingList.innerHTML = "";
  const doingAll = doing.map((doing, index) => {
    return  `<li>
              <span>${doing}</span>
              <button onclick="editDoingButton(${index})"}>編集</button>
              <button onclick="backDoingButton(${index})"}>未着手</button>
              <button onclick="completeDoingButton(${index})"}>完了</button>
            </li>`;
  });
  doingList.innerHTML = doingAll.join('');
};
const editDoingButton = (index) => {
  const editDoing = prompt("編集内容を入力して下さい");
  editDoing === "" ? alert("文字を入力してください") : doing.splice(index, 1, editDoing);
  showDoingList();
};
const completeDoingButton = (index) => {
  doing.splice(index, 1);
  showDoingList();
};
const backDoingButton = (index) => {
  toDos = [...toDos, doing[index]];
  doing.splice(index, 1);
  showToDoList();
  showDoingList();
};