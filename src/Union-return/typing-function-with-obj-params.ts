const logId = (obj: { id: string }) => {
  console.log(obj.id);
};

const logName = (obj: { name: string }) => {
  console.log(obj.name);
};

const loggers = [logId, logName];

const logAll = (obj: { name: string; id: string }) => {
  // red squiggly line under obj
  loggers.forEach((func) => func(obj));
};
