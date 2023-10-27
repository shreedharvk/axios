// GET REQUEST
function getTodos() {
  axios.get('https://api.example.com/todos')
    .then((response) => {
      showOutput(response);
    })
    .catch((error) => {
      errorHandling(error);
    });
}


// POST REQUEST
function addTodo() {
  const todoData = {
    title: 'New Todo',
    completed: false
  };

  axios.post('https://api.example.com/todos', todoData)
    .then((response) => {
      showOutput(response);
    })
    .catch((error) => {
      errorHandling(error);
    });
}
// PUT/PATCH REQUEST
function updateTodo() {
  const todoData = {
    title: 'Updated Todo',
    completed: true
  };

  axios.put('https://api.example.com/todos/1', todoData)
    .then((response) => {
      showOutput(response);
    })
    .catch((error) => {
      errorHandling(error);
    });
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://api.example.com/todos/1')
    .then((response) => {
      showOutput(response);
    })
    .catch((error) => {
      errorHandling(error);
    });
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
