const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "Do you want to create a new user?",
      name: "create",
      choices: ["yes", "no"],
    },
  ])
  .then((answers) => {
    console.log(answers);
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
