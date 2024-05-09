export function getHooksFromLocalStorage(): number[] {
  const hooks = JSON.parse(localStorage.getItem("hooks") ?? "[]") as number[];

  return hooks;
}

export function addHookToLocalStorage(hookId: number) {
  const hooks = getHooksFromLocalStorage();
  const newHooks = [...hooks, hookId];
  const uniqueHooks = [...new Set(newHooks)];

  localStorage.setItem("hooks", JSON.stringify(uniqueHooks));
}
