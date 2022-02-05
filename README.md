# Ironhack Todos
## CSS transition and DOM manipulation

### The application
The Ironhack Todos is a todo app working only with DOM manipulation and has nice css transitions and animations.

We want to be able to create new tasks, mark them as done and delete them easily.

The page should be minimalistic with a simple input form and a list of todos where our new task will appear.

## step 0: setting up the project
```bash
src/
    |___script.js
styles/
    |___main.css
index.html
```

## 1st iteration: The html template
```html
...
<body>
    <div id="todo-content">
        <h2>Todos</h2>

        <div id="add-todo-form">
            <input type="text" placeholder="🚀 Add a new task...">
        </div>

        <div id="todo-list">
            <!-- Here will be our list of todos -->
        </div>
    </div>

    <script src="./scr/script.js"></script>
    <script src="./scr/funkyColors.js"></script>
</body>
...
```
## 2nd iteration: create item

## 3nd iteration: The form submit

## 3rd iteration: Adding a new item in the list