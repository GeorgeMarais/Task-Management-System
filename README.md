# Task Management System

**Author**: George Marais

## Project Overview

The **Task Management System** is a feature-rich web application developed with **TypeScript**. It allows users to create, update, and manage tasks with added functionality for task categorization, priority management, and deadlines. This application includes:

- Task creation, editing, and deletion.
- Categorization into "Work" or "Personal" tasks.
- Task prioritization (Low, Medium, High).
- Task deadline management.
- Local storage persistence to retain tasks even after browser refresh.
- Simple unit tests for critical task services.

This project demonstrates advanced TypeScript features, modular design, and unit testing with **Jest**.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Testing](#testing)
8. [Future Improvements](#future-improvements)
9. [Contributing](#contributing)
10. [License](#license)

## Features

- **Task Management**: Create, update, delete tasks with customizable priority and deadlines.
- **Task Categorization**: Group tasks by category (e.g., Work, Personal).
- **User Authentication (Simulated)**: Allows users to sign in with their credentials (mocked with `localStorage`).
- **Local Storage Persistence**: Saves tasks locally for persistent state across browser sessions.
- **Type Safety**: Fully typed with TypeScript interfaces and models.
- **Unit Tests**: Includes unit testing for core services using **Jest**.

## Technologies Used

- **TypeScript**: For type-safe code and modern JavaScript features.
- **React**: (Optional for UI) Used for building reusable components and managing application state.
- **Jest**: For unit testing services and components.
- **localStorage**: Used for storing tasks persistently in the browser.

## Project Structure

```
/src
  /components
    - TaskList.tsx        # Renders a list of tasks
    - TaskItem.tsx        # Renders individual tasks
    - AddTaskForm.tsx     # Form to add new tasks (not included in the sample)
    - EditTaskForm.tsx    # Form to edit tasks (not included in the sample)
  /models
    - Task.ts             # Defines Task interface and factory function
    - User.ts             # Defines User interface and authentication function
  /services
    - TaskService.ts      # Service handling task CRUD operations
    - AuthService.ts      # Simulated user authentication service (not included in the sample)
  /tests
    - TaskService.test.ts # Unit tests for task management
  App.tsx                 # Main React app component
  index.tsx               # Entry point for React app
```

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/task-management-system.git
    ```

2. **Navigate into the project directory**:

    ```bash
    cd task-management-system
    ```

3. **Install dependencies**:  
   Make sure you have Node.js installed, then run:

    ```bash
    npm install
    ```

4. **Start the application**:

    ```bash
    npm start
    ```

   This will start a development server and open the app in your default browser.

5. **Run tests**:  
   To run unit tests:

    ```bash
    npm test
    ```

## Usage

Once the application is running, you can:

1. **View Tasks**: See all tasks displayed in a list format.
2. **Add a New Task**: (Form not included in this sample, but you can expand the app by adding the `AddTaskForm.tsx` component).
3. **Delete Tasks**: Remove tasks using the delete button.
4. **Local Storage**: The app uses `localStorage` to save your tasks, so your task list will persist even after refreshing the browser.

## Testing

This project includes unit tests for the **TaskService** class. These tests check the basic functionality of creating, deleting, and updating tasks.

To run the tests:

```bash
npm test
```

### Sample Test Coverage

- Task addition and deletion.
- Task updates.

## Future Improvements

- **Task Filtering**: Add the ability to filter tasks by category or priority.
- **Advanced Authentication**: Integrate real user authentication with JWT.
- **Task Editing**: Add a feature to edit existing tasks.
- **Deadline Notifications**: Implement reminders for upcoming task deadlines.
- **Real-Time Sync**: Add WebSocket or Firebase integration for real-time task updates across devices.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push your branch (`git push origin feature-name`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License.
