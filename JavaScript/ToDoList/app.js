let toDoList = []

while (true) {
    action = prompt("What would you like to do?")

    if (action === "quit") {
        break
    } else if (action === "new") {
        let askQuestion = prompt("Enter a new todo:")
        toDoList.push(askQuestion)
        console.log(`${askQuestion} added to list`)
    } else if (action === "list") {
        console.log("********");
        for (let todo of toDoList) {
            console.log(`${toDoList.indexOf(todo)}: ${todo}`);
        }
        console.log("********")
    } else if (action === "delete") {
        askQuestion = parseInt(prompt("Enter index of todo to delete!"))
        toDoList.splice(askQuestion, 1)
        console.log("Todo Removed")
    } else {
        action = prompt("Please type a valid action(new/list/delete/quit)")
    }
}