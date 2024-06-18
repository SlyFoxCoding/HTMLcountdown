# HTMLcountdown

This is a simple web project that displays a countdown to your birthday. It includes a fullscreen button and a celebratory message when the countdown ends.

![Screenshot](/ScreenShot.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Countdown timer displaying days, hours, minutes, and seconds.
- Fullscreen mode toggle.
- Celebratory message with emojis once the countdown ends.
- Responsive design with a gradient background.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SlyFoxCoding/HTMLcountdown
   ```
2. Navigate to the project directory:
  ```bash
  cd HTMLcountdown
  ```

## Usage

### Option 1: Using a Local File System

Open index.html in Your Web Browser:
  * Double-click on the index.html file in the project directory.
  * Alternatively, you can use the command line:
    ```bash
    open index.html  # MacOS
    start index.html  # Windows
    xdg-open index.html  # Linux
    ```
    
### Option 2: Using a Local HTTP Server

Start a Local HTTP Server:
  Python 3:
  ```bash
  python3 -m http.server
  ```

  Python 2:
  ```bash
  python -m SimpleHTTPServer
  ```
Open Your Browser and Go to:

  ```bash
  http://localhost:8000
  ```

### Option 3: Using Node.js

1. Install http-server Globally:
  ```bash
  npm install -g http-server
  ```
2. Start the Server:

  ```bash
  http-server
  ```
3. Open Your Browser and Go to:

   ```bash
   http://localhost:8080
   ```

### Option 4: Using Docker

1. Create a Dockerfile in the Project Directory:
   ```dockerfile
   FROM nginx:alpine
   COPY . /usr/share/nginx/html
   ```

2. Build the Docker Image:
   ```bash
   docker build -t countdown-to-birthday .
   ```

3. Run the Docker Container:
   ```bash
   docker run -d -p 8080:80 countdown-to-birthday
   ```
   
4. Open Your Browser and Go to:
  ```bash
  http://localhost:8080
  ```


  




   
