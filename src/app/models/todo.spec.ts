import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the contrusctor', () => {
    const todo = new Todo({
      title: 'hello',
      compeleted: true
    });

    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});
