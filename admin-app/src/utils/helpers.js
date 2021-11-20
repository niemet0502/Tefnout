

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
            "chapter_title": element.chapter_title,
            "chapter_text_content": element.chapter_text_content,
            "chapter_video_content": element.chapter_video_content
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

export function parseNewCourseContent(sections,chapters){
  let newArray = []

  for (let i = 0; i < sections.length; i++) {
    const element = sections[i];
    let newChapters = []

    for (let j = 0; j < chapters.length; j++) {
      const elm = chapters[j];
      if(element.id === elm.id){
        newChapters.push({
          "id": elm.chapter_id,
          "chapter_title": elm.chapter_title,
          "chapter_text_content": elm.chapter_text_content,
          "chapter_video_content": elm.chapter_video_content
        })
      }
    }

    newArray.push({
      "id": element.id,
      "section_title": element.section_title,
      "chapters": newChapters
    })
  }

  return newArray;
}

export function CourseContentIsValid(content){
  
  if (content.length <= 0){
    return false
  }
  for (let i = 0; i < content.length; i++) {
    const element = content[i];
    
    if (element.chapters.length <= 0){
      return false;
    }
  }

  return true;
}