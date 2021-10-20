

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

export function parseCurriculum(arr){
  let newArray = []
  arr.forEach(element => {
    let verifie = false
    let chapters = []
    arr.forEach(elm => {

      newArray.forEach(element => {
        if(elm.id == element.id){
          verifie = true
        }
      });

      if(verifie == false){
        chapters.push({
          chapter_title: elm.chapter_title
        })
      }
    });

    if (verifie == false){

      newArray.push({
        id: element.id,
        section_title: element.section_title,
        chapters: chapters
      })
    }
  });

  return newArray;
}

export function parseCurriculumArray(arr){
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    const elm = arr[i];
    let verifie = false;
    let chapters = []
    if( i > 0){
      for (let j = 0; j < i; j++) {
        const element = arr[j];

        if(elm.id == element.id){
          verifie = true
        }
      }
    }

    if( verifie == false){
     
      for (let j = i; j < arr.length; j++) {
        const element = arr[j];
        
        
        if(elm.id == element.id){
          chapters.push({
            "id": element.chapter_id,
            "chapter_title": element.chapter_title
          })
        }
      }

      newArray.push({
        "id": elm.id,
        "section_title": elm.section_title,
        "chapters": chapters
      })
    }
    
  }

  return newArray
}