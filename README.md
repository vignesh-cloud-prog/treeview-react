# TreeView App

## Overview

The TreeView App is a React-based application that renders a tree structure with nested nodes. The application uses Zustand for state management and Tailwind CSS for styling. This README will guide you through setting up the project, running it, and testing the application.

## Features

- **TreeView Component:** Displays hierarchical tree data.
- **Expandable Nodes:** Nodes can be expanded or collapsed to show or hide child nodes.

## Technologies Used

- **React:** For building the user interface.
- **Zustand:** For state management.
- **Tailwind CSS:** For styling.

## Prerequisites

Ensure you have the following installed:

- **Node.js:** Version 14 or later
- **Yarn:** For managing dependencies (or npm if preferred)

## Getting Started

### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/vignesh-cloud-prog/treeview-react.git
cd treeview-app
```

### 2. Install Dependencies

Install the project dependencies using Yarn:

```bash
yarn install
```

If you prefer npm, you can use:

```bash
npm install
```

### 3. Start the Development Server

To start the development server and view the application, run:

```bash
yarn start
```

This will start the application on `http://localhost:3000`. You can view it in your browser.

### 4. Running Tests

To run the tests, use the following command:

```bash
yarn test
```

This will execute all the test cases defined in the `src/__tests__` directory and display the results in your terminal.

## Project Structure

Here's an overview of the project structure:

- **`src/`**: Contains the source code of the application.
  - **`components/`**: Contains React components.
    - `TreeNodeComponent.js`: Renders individual nodes of the tree.
    - `TreeView.js`: The main component that renders the tree using `TreeNodeComponent`.
  - **`store/`**: Contains Zustand store logic.
    - `useTreeStore.js`: Defines the Zustand store for managing tree data.
  - **`__tests__/`**: Contains test files.
    - `TreeNodeComponent.test.js`: Tests for `TreeNodeComponent`.
    - `TreeView.test.js`: Tests for `TreeView`.

## Component Usage

### TreeNodeComponent

The `TreeNodeComponent` renders an individual node in the tree.

**Props:**

- `node`: An object representing a tree node. It should have the following structure:
  ```json
  {
    "id": number,
    "name": string,
    "children": array (optional)
  }
  ```

**Example Usage:**

```jsx
<TreeNodeComponent node={node} />
```

### TreeView

The `TreeView` component renders the entire tree structure using the `TreeNodeComponent`.

**Usage:**

```jsx
<TreeView />
```

## Documentation

- **`useTreeStore.js`**: Contains Zustand store configuration. It manages tree data and provides functions to interact with the tree.
- **`TreeNodeComponent.js`**: Displays individual nodes and supports expansion and collapse.
- **`TreeView.js`**: Renders the tree structure by mapping over the data and using `TreeNodeComponent`.


## Contact

For any questions or issues, please contact [vighnesha.nittur@gmail.com](mailto:vighnesha.nittur@gmail.com).
