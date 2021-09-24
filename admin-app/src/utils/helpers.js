

export const parseRaitings = response => {
  console.log(response);
  let count = 0;
  let sum = 0;
  response.map((raiting) => {
    sum += parseInt(raiting.total_note);
    count += raiting.notes_count;
  })

  return {count,sum};
}