
let body = document.querySelector('body');
let mode = document.querySelector('.mode');
let calResult = document.getElementById('calResult');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let add = document.getElementById('add');
let sub = document.getElementById('sub');
let mult = document.getElementById('mult');
let div = document.getElementById('div');
let equal = document.getElementById('equal');
let dot = document.getElementById('dot');
let del = document.getElementById('delete');

// darkmode

mode.addEventListener('click', () => {
    dark()
})

const dark = () => {
    if (mode.innerHTML === 'Dark') {
        mode.innerHTML = 'Light'
        body.classList.add('dark')
    } else {
        mode.innerHTML = 'Dark'
        body.classList.remove('dark')
    }

}

function appendValue(value) {
    calResult.value += value;
  };

one.addEventListener('click', () => {
    appendValue(1)
});

two.addEventListener('click', () => {
    appendValue(2)
});

three.addEventListener('click', () => {
    appendValue(3)
});

four.addEventListener('click', () => {
    appendValue(4)
});

five.addEventListener('click', () => {
    appendValue(5)
});

six.addEventListener('click', () => {
    appendValue(6)
});

seven.addEventListener('click', () => {
    appendValue(7)
});

eight.addEventListener('click', () => {
    appendValue(8)
});

nine.addEventListener('click', () => {
    appendValue(9)
});

zero.addEventListener('click', () => {
    appendValue(0)
});

add.addEventListener('click', () => {
    appendValue('+')
});

sub.addEventListener('click', () => {
    appendValue('-')
});

mult.addEventListener('click', () => {
    appendValue('*')
});

div.addEventListener('click', () => {
    appendValue('/')
});

dot.addEventListener('click', () => {
    appendValue('.')
});

equal.addEventListener('click', () => {
    calculate();
});

del.addEventListener('click', () => {
    backspace();
});

cancel.addEventListener('click', () => {
    calResult.value = '';
});


// KEYDOWN FUNCTIONALITIES

body.addEventListener('keydown', (e) => {
    if (e.key === '1') {
    appendValue(1)  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '2') {
    appendValue(2)  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '3') {
    appendValue(3)  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '4') {
    appendValue(4)  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '5') {
    appendValue(5)  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '6') {
    appendValue(6)  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '7') {
    appendValue(7)  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '8') {
    appendValue(8)  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '9') {
    appendValue(9)  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '0') {
    appendValue(0)  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '.') {
    appendValue('.')  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '+') {
    appendValue('+')  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '-') {
    appendValue('-')  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '*') {
    appendValue('*')  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === '/') {
    appendValue('/')  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
    calculate()  
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'c') {
        calResult.value = ''; 
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
    backspace()  
    }
});

function backspace() {
    calResult.value = calResult.value.slice(0, -1);
};

function calculate() {
    try {
      calResult.value = eval(calResult.value); 
    } catch (error) {
      calResult.value = 'Error'; 
    };
  };


/***    Weather    ***/

const API_KEY = 'b1b791265b034acc727db509fb1b3eec';
async function Weather(city) {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data)
        weatherOutput(data);
    }
    catch (error) {
        console.log('Unable to fetch weather data for your location')
    }
}

const searchCity = () => {
    let city = document.getElementById('city').value;
    Weather(city);12

}

function weatherOutput(outputData) {
    let weatherData = document.getElementById('weatherData');
    const {
        name,
        main,
        wind
    } = outputData;

    weatherData.innerHTML = `<h2>Name: ${name}</h2>
    <h2>Temp: ${main.temp}°C</h2>
    <h2>Feels like: ${main.feels_like}°C</h2>
    <h2>Wind speed: ${wind.speed}m/s</h2>`
    
}


/** Todo **/

// let list = document.getElementById('list');
// let addTodo = document.getElementById('addTodo');
// let todos = [{}];

// let savedTodos = JSON.parse(localStorage.getItem('todos'));
// todos = savedTodos || [];
// render();
// function render() {
//     let result = '';
//     for (let index = 0; index < todos.length; index++) {
//         let element = todos[index];
//         let name = element.name;
//         let date = element.date;
//         let todoName = `<li>${name}</li>
//         ${date} <button class='todoBtn' onclick="todos.splice(${index}, 1) removeTodo(todo.id);
//         render();">remove</button>`
     
//         result += todoName;
//         console.log(result)
//     }
//     list.innerHTML = result
// };


// addTodo.addEventListener('click', () => {
//     addTodos();
// });

// const addTodos = () => {
//     let todo = document.getElementById('todo');
//     let date = document.getElementById('date');
//     if (!todo.value) {
//         alert('Add todo in the input field')
//     } else {
//         let savedTodos = JSON.parse(localStorage.getItem('todos'));

//         let Id = savedTodos.length;
//         const newTodo = {
//             id: Id,
//             name: todo.value,
//             date: date.value
//         }
//         todos.push({newTodo
//         });
//         localStorage.setItem('todos', JSON.stringify(todos));
//         todo.value = ''
//         date.value =''
//     }
//     saveTodo();
//     render();

// };

// function saveTodo() {
//     localStorage.setItem('todos', JSON.stringify(todos));
//     console.log(todos)
//     render();
// }

// function removeTodo(id) {
//     const todos  = JSON.parse(localStorage.getItem('todos'));

//     const updateTodo = todos.filter((todo) => todo.id !== id);

//     const reindexTodo = updateTodo.map((todo, index) => {
//         return {
//             id: index,
//             name: todo.name,
//             date: todo.date
//         }
//     });

//     localStorage.setItem('todos', JSON.stringify(reindexTodo)); 
//     render();
// }

/*   gpt version*/

const list = document.getElementById('list');
const addTodo = document.getElementById('addTodo');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render the to-do list
function render() {
  let result = '';
  todos.forEach((todo, index) => {
    result += `
      <li>
        ${todo.name} (${todo.date}) 
        <button class="todoBtn" onclick="removeTodo(${index})">Remove</button>
      </li>
    `;
  });
  list.innerHTML = result;
}

// Add a new to-do
const addTodos = () => {
  const todoInput = document.getElementById('todo');
  const dateInput = document.getElementById('date');
  const name = todoInput.value.trim();
  const date = dateInput.value;

  if (!name) {
    alert('Please add a task');
    return;
  }

  const newTodo = {
    id: todos.length,
    name: name,
    date: date || 'No date specified',
  };

  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
  todoInput.value = '';
  dateInput.value = '';
  render();
};

// Remove a to-do
function removeTodo(index) {
  todos.splice(index, 1);

  // Re-index IDs after removal
  todos = todos.map((todo, i) => ({
    ...todo,
    id: i,
  }));

  localStorage.setItem('todos', JSON.stringify(todos));
  render();
}

// Event listener for the Add Task button
addTodo.addEventListener('click', addTodos);

// Initial render
render();