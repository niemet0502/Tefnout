

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

export function parseTrainingState(data){
  const allChapters = parseCurriculumArray(data.curriculum);
  const chaptersValidate = data.chapterValide;

  for (let i = 0; i < allChapters.length; i++) {
    const element = allChapters[i];
    
    for (let j = 0; j < element.chapters.length; j++) {
      const elt = element.chapters[j];
      let findd = false
      chaptersValidate.forEach(elm => {
        if(elt.id == elm.chapter_id){
          findd = true
        }
      });

      element.chapters[j] = {...element.chapters[j], is_valide: findd}
    }

  }

  return allChapters;
}

export function findCurrentChapter(arr){
  let currentChapter = 0; 
  let find = false

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
     find = false
    
    for (let j = 0; j < element.chapters.length; j++) {
      const elmt = element.chapters[j];
      

      if(elmt.is_valide == false){
        currentChapter = elmt.id;
        find = true;
        break;
      }
    }

    if(find == true){
      break;
    }
  }

  if (find == false){
   currentChapter = arr[arr.length - 1].chapters[arr[arr.length - 1].chapters.length - 1].id
  }

  return currentChapter;
}