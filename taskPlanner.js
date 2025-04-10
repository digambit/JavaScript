/* Problem Statement:

In this challenge, you must implement the logic for a task planner that allows adding, removing, and marking tasks as completed, as well as displaying a log of them. To do this, you need to build the logic of a closure function called createTaskPlanner so that it returns the following methods:

addTask(task): Receives an object that contains the task and adds it to the tasks array. The task must include the following properties: id, name, priority, tags, and completed, where the completed status is automatically set to false when a task is added.

* removeTask(value): Receives the id or name of the task and removes it from the tasks array.

* getTasks(): Returns the tasks array.

* getPendingTasks(): Returns only the pending tasks.

* getCompletedTasks(): Returns only the completed tasks.

* markTaskAsCompleted(value): Receives the id or name of the task and marks it as completed.

* getSortedTasksByPriority(): Returns a copy of the tasks sorted by priority (3: not urgent, 2: urgent, 1: very urgent), without modifying the original task list.

* filterTasksByTag(tag): Filters tasks by a specific tag.

* updateTask(taskId, updates): Finds the corresponding task with the specified id and updates its properties with the ones provided in the updates object.


Example 1:

Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});


planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner.markTaskAsCompleted("Llamar a Juan")

Output:
planner.getCompletedTasks()
[{
    id: 2,
    name: "Llamar a Juan",
    completed: true,
    priority: 3,
    tags: ["personal"]
}]

Example 2:

Input:
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

Output:
planner.filterTasksByTag("shopping")
[{
    id: 1,
    name: "Comprar leche",
    completed: false,
    priority: 3,
    tags: ["shopping", "home"]
}]
*/ 

function createTaskPlanner() {
    const tasks = [];
    return {
        addTask: function(task) {
            task.completed = false;
            tasks.push(task);
        },
        getTasks: function() {
            return tasks;
        },
        getPendingTasks: function() {
            return tasks.filter(task => task.completed === false);
        },
        getCompletedTasks: function() {
            return tasks.filter(task => task.completed === true);
        },
        markTaskAsCompleted: function(value) {
            const task = tasks.find(t => t.id === value || t.name === value);
            if (task) {
            task.completed = true;
            }
        },
        getSortedTasksByPriority: function() {
            return tasks.slice().sort((a, b) => a.priority - b.priority);
        },
        filterTasksByTag: function(tag) {
            return tasks.filter(task => task.tags.includes(tag));
        },
        updateTask: function(taskId, updates) {
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                Object.assign(task, updates);
            }
        },
        removeTask: function(value) {
            const index = tasks.findIndex(t => t.id === value || t.name === value);
                if (index !== -1) {
                    tasks.splice(index, 1);
            }
        },
        clearTasks: function() {
            tasks.length = 0;
        }
    }
}


