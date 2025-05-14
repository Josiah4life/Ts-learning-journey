const idToUppercase = (obj: { id: string }) => {
  return obj.id.toUpperCase();
};

const idToint = (obj: { id: string }) => {
  return parseInt(obj.id);
};

const funcs = [idToUppercase, idToint];

const resolveAll = (obj: { id: string }) => {
  return funcs.map((func) => {
    return func(obj);
  });
};

const result = resolveAll({
  id: "123",
});
