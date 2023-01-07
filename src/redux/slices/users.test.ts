import usersSlice, { initialState } from "./users";

test("for usersSlice with type unknown", () => {
  const initUsersSlice = usersSlice(initialState, { type: "unknown" });
  expect(initUsersSlice).toBe(initialState);
});

test("for usersSlice with type users/setCount", () => {
    const initUsersSlice = usersSlice(initialState, { type: "users/setCount", payload: 10 });
    expect(initUsersSlice.count).toBe(10);
});

test("for usersSlice with type users/setCount 2", () => {
    const initUsersSlice = usersSlice(initialState, { type: "users/setCount", payload: 999 });
    expect(initUsersSlice.count).toBe(999);
});

test("for usersSlice with type users/setCount 3", () => {
    const initUsersSlice = usersSlice(initialState, { type: "users/setCount", payload: 999 });
    expect(initUsersSlice.count).not.toBe(1);
});
