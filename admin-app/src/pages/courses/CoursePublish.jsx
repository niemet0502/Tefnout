import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
const CoursePublish = () => {
  return (
    <div>
      <div className="title-icon">
        <h3 className="title">Publier</h3>
      </div>
      <div className="publish-block">
        <EditIcon/>
        <p>
          Votre cours est à l&apos;état de brouillon. Les étudiants ne peuvent pas le voir, 
          ni s&apos;inscrire à ce cours. Le cours apparaitra quand meme dans les statistique de l&apos;Administrateur. <br />
          Si vous voulez le rendre disponible pour les etudiants vous pouvez cliquer sur le bouton publier</p>
      </div>
    </div>
  )
}

export default CoursePublish
