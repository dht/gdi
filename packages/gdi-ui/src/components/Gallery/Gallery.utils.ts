export const classify = (id: string, filter: string) => {
  fetch('http://localhost:3005/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      tag: filter,
    }),
  })
    .then(
      (res) => {
        // console.log(res);
      },
      (err) => {
        // console.log(err);
      }
    )
    .catch((err) => {
      // console.log(err);
    });
};
