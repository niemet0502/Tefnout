

export const parseRaitings = response => {
  let count = 0;
  let sum = 0;
  let moy = 0;
  response.map((raiting) => {
    sum += parseInt(raiting.total_note);
    count += raiting.notes_count;
  })
  moy = sum/count;
  return {count,sum,moy};
}

export function percentage(a,b){
  a = parseInt(a);
  return Math.round(((b*100)/a));
}

export function parseTrainingObjet(tr){
  if( tr.length == 0){
    return false
  }else{
    return tr[0]
  }
}