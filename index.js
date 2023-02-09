const tasks = document.getElementById('tasks')

function addToList () {
   const task = document.getElementById('text').value

   if (task === ''){
       alert('Please enter a task')

   }
   else{
       let input = document.createElement('input')
        input.setAttribute('type',  'checkbox') 
        input.setAttribute('id', 'defaultCheck1')
        input.setAttribute('onclick','removeTask')
        input.className = 'form-check-input'
        // console.log(input)

        let label = document.createElement('label')
        label.setAttribute('for', 'defaultCheck1')
        label.className = 'form-check-label'
        label.innerHTML = task
        // console.log(label)

        let list = document.createElement('li')
        list.appendChild(input)
        list.appendChild(label) 
        
        tasks.appendChild(list)
    }
}

function removeTask() {
    document.querySelectorAll('li').forEach(task => {
        if (task.checked){
            console.log(task)
            // task.remove
        }
    })
}