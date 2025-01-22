import {render, screen} from '@testing-library/react'
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../../App';
import TodoItem from '../TodoItem';

describe("App", () => {
  test("does not allow adding an empty todo", () => {
    render(<App />);
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-button");

    fireEvent.change(input, { target: { value: "   " } }); // Simulate entering spaces
    fireEvent.click(addButton); // Attempt to add

    // Verify the empty todo is not added
    expect(screen.queryByText("   ")).not.toBeInTheDocument();
  });

  test("adds a new todo successfully", () => {
    render(<App />);
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-button");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    // Verify the new todo appears
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("deletes a todo item", () => {
    render(<App />);
    const todo = screen.getByText("Setup development environment");
    const deleteButton = todo.nextElementSibling; // Select the delete button next to the todo

    fireEvent.click(deleteButton); // Delete the todo
    expect(screen.queryByText("Setup development environment")).not.toBeInTheDocument(); // Verify removal
  });
});

describe("TodoItem", () => {
  const mockChangeTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  const todo = {
    id: "test-id",
    title: "Test Todo",
    completed: false,
  };

  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  it("should toggle the 'completed' state when checkbox is clicked", () => {
    render(
      <TodoItem
        todo={todo}
        changeTodo={mockChangeTodo}
        deleteTodo={mockDeleteTodo}
        animations={animations}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    const todoText = screen.getByText("Test Todo");

    // Verify initial state
    expect(checkbox).not.toBeChecked();
    expect(todoText).not.toHaveClass("p-completed");

    // Simulate clicking the checkbox
    fireEvent.click(checkbox);

    // Assert that the changeTodo function is called with the correct ID
    expect(mockChangeTodo).toHaveBeenCalledTimes(1);
    expect(mockChangeTodo).toHaveBeenCalledWith("test-id");
  });

  it("should apply 'p-completed' class when completed is true", () => {
    const completedTodo = { ...todo, completed: true };

    render(
      <TodoItem
        todo={completedTodo}
        changeTodo={mockChangeTodo}
        deleteTodo={mockDeleteTodo}
        animations={animations}
      />
    );

    const todoText = screen.getByText("Test Todo");

    // Assert the todo text has the 'p-completed' class
    expect(todoText).toHaveClass("p-completed");
  });
});
