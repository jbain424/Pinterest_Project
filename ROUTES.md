# **Routes**

**Path**	           | **Component**
---------------------|--------------
'/'                  | Homepage
'/:user_id'          | User
'/:user_id/pin'      | User Pins
'/pin/               | Pin
'/:user_id/board'    | Board
'/:user_id/board_id' | User Board


# **Component Hierarchy**

### Homepage
* **Navbar**
* **Home**
* **Users**
  - user.js
  - userDisplay.js
* **Boards**
  - board.js
  - boardDisplay.js
* **Pins**
  - pin.js
  - pinDisplay.js
