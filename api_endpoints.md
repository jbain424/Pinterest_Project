# Api_Endpoints

## **Users**

**Post**
/api/users/
 - creates new user

**Get**
/api/users/:user_id
 - gets single user

**Patch**
/api/users/:user_id
 - updates user information

**Delete**
/api/users/:user_id
 - deletes user

## **Pins**
**Post**
/api/pins/
* creates new pin

**Get**
/api/pins/
* gets single pin

**Get**
/api/:id/pins
* gets all pins from single user

**Delete**
/api/pins/:id
* deletes single pin

**Patch**
/api/pins/:id
* edits pin

## **Boards**
**Post**
/api/boards/
* creates new board

**Get**
/api/boards/:board_id
* gets board from single user

**Get**
/api/:id/boards
* gets all boards from single user

**Patch**
/api/boards/:board_id
* updates board from single user

**Delete**
/api/boards/:board_id
* deletes board from single user
