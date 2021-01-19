const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList")

const TODOS_LS = "todos"
let toDos = []

function deleteTodos(e) {
  e.preventDefault()
  const btn = e.target
  const li = btn.parentNode
  todoList.removeChild(li)
  const cleanTodos = toDos.filter((toDos) => {
    return toDos.id !== parseInt(li.id)
  })
  console.log(cleanTodos)
  toDos = cleanTodos
  saveTodos(toDos)
}
function saveTodos(toDos) {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintTodo(text) {
  const li = document.createElement("li")
  const delBtn = document.createElement("button")
  const span = document.createElement("span")
  const newId = toDos.length + 1
  delBtn.addEventListener("click", deleteTodos)
  delBtn.innerText = "❤️"
  span.innerText = text
  li.id = newId
  li.appendChild(delBtn)
  li.appendChild(span)
  todoList.appendChild(li)
  const toDoObj = {
    text: text,
    id: newId,
  }
  toDos.push(toDoObj)
  saveTodos(toDos)
}

function handlerSubmit(e) {
  e.preventDefault()
  const currentValue = todoInput.value
  paintTodo(currentValue)
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_LS)
  if (loadedTodos !== null) {
    const parsedToDos = JSON.parse(loadedTodos)
    // forEach is for Array
    parsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text)
    })
  } else {
  }
}
function init() {
  loadTodos()
  todoForm.addEventListener("submit", handlerSubmit)
}
init()
