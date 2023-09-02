const getTask = async (id) => {
  //f (id === undefined) return;
  //console.log("El param recibido es: ", params);
  const res = await fetch(`/api/tasks/${id}`);
  const data = await res.json();
  //console.log(data);
  return data;
};
