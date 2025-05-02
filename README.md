# To Do List App using MERN Stack

## API Documentation

### 1. To Do

    /service/todo/get_all

![ScreenShot](/images/todo_getAll.png)

- Empty request body
- Gets all Tasks from the database
- Returns an array of Tasks (JSON) in the response body

###

    /service/todo/add_todo

![ScreenShot](/images/todo_addTodo1.png)

- Request body consists of image (String), name (String), description (String), status ("active"/"finished")

![ScreenShot](/images/todo_addTodo2.png)

- Response body consists of message (success or failure), and the task JSON object which inherits the properties from the request in addition to id, and creation time and latest update time

###

    /service/todo/update_todo

![ScreenShot](/images/todo_updateTodo1.png)

- Requires request body consisting of each attribute for a task object and the updated values (may remain the same)
- Requires ID parameter, to be able to identify which task to update

![ScreenShot](/images/todo_updateTodo2.png)

- Response body contains message (success or failure) and updated values
- updatedAt value changes to the time of the response

###

    /service/todo/delete_todo

![ScreenShot](/images/todo_deleteTodo.png)

- Request body is empty
- Requires parameter specifying which task ID to delete
- Response body consists of only message which states success or failure
<hr>

### 2. User

    /service/user/signup

![ScreenShot](/images/user_signup1.png)

- Request body contains personal_id, name, email, password, password confirmation, address, and phone number
- password must be equivalent to confirmPassword for a successful request
- password must contain 3 - 20 letters, 1 capital, 1 lowercase, and 1 number as a constraint

![ScreenShot](/images/user_signup2.png)

- Response body contains message (success or failure)
- If success, will be prompted to check OTP link in email
- Email may be sent to the spam section
- Activation token is available on the URL of the link
- e.g., http://undefined/user/activate/{activation token here}

###

    /service/user/signin

![ScreenShot](/images/user_signin1.png)

- Request body contains email and password

![ScreenShot](/images/user_signin2.png)

- Response body contains success message and user id, name, and email

###

    /service/user/activation

![ScreenShot](/images/user_activation1.png)

- Request body contains activation token
- Activation token can be obtained following the link sent by the email

![ScreenShot](/images/user_activation2.png)

- Response body contains message (success or failure) and user information that has been newly recorded in the database (only id, name and emaill will be available to see in the response body)

###

    /service/user/user-infor

![ScreenShot](/images/user_userInfo.png)

- Requires Bearer Token in the header
- Typically handled in the auth middleware, which continues to the callback function which returns complete user information
