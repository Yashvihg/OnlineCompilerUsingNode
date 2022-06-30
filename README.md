# Compiler using Node

### Execute Code and fetch output

#### `POST` /api 

This endpoint allows you to execute your script and fetch output results.

### Proposed Architecture ->

| Parameter  | Description                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| "code"     | Should contain the script that needs to be executed                                                                           |
| "language" | Language that the script is written in for example: java, cpp, etc. (Check language as a payload down below in next question) |
| "input"    | In case the script requires any kind of input for execution, leave empty if no input required                                 |

### What are the languages that are supported for execution?

Whichever language you might mention in the language field, it would be automatically executed with the latest version of it's compiler.
| Languages | Language as a payload |
|-----------|-----------------------|
| Java | java |
| Python | py |
| C++ | cpp |
| C | c |
| GoLang | go |
| C# | cs |
| NodeJS | js |