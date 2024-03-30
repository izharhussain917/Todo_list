import inquirer from "inquirer";

let todos: string[]= [];
let loop = true;

while(loop){
    const answers : {
        TODO: string,
        addmore: boolean
    }= await inquirer.prompt([
        {
            name: "TODO",
            message: "what do you want ?",
            type: "input",
        },
        {
            name: "addmore",
            message: "Do you want to add more todo",
            type: "confirm",
            default: "False",
        }
    ])
    const {TODO, addmore} = answers;
    loop = addmore
    if (TODO){
        todos.push(TODO)
    } else{
        console.log("kindly add valid input")
    }
}
if (todos.length > 0) {
    todos.forEach(todo => {
        console.log(todo)
    });
    } else {
    console.log("No todos found")
}