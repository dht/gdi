export const getSelectedIndex = (items: Json[]) => {
  const { pathname } = document.location;

  const selectedIndex = items.findIndex(
    (item: Json) => item.path !== '/' && pathname.startsWith(item.path)
  );

  return selectedIndex === -1 ? 0 : selectedIndex;
};
