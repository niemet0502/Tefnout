import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from "../../store/categories/categories.actions"
import PropTypes from "prop-types";
import useModal from '../../hooks/useModal';
import { isBase64, getBase64} from '../../utils/convertFile';

// components 
import PageHeader from '../../components/common/PageHeader';
import Modal from "../../components/common/Modal";
import Button from "../../components/common/Button";
import FormInput from "../../components/form/FormInput";

//icons 
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

//images 
import placeholderImage from "../../assets/img/placeholder-image.png";

function Categories({categories}) {
  const [label, setLabel] = useState('')
  const [image, setImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState({id: null, name: "", image: null})
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const { isShowing: isEditCategoryShowed, toggle: toggleEditCategory } = useModal();
  const { isShowing: isConfirmationModalShowed, toggle: toggleConfirmationModal } = useModal();
  const dispatch = useDispatch()
  const onDelete =  useCallback((id) => {
      dispatch(actions.removeCategory(id))
    },[])
  const createCategory = useCallback((category) => {
    dispatch(actions.newCategory(category))
  },[])
  const onUpdate = useCallback(category => {
    dispatch(actions.editCategory(category))
  })


  async function convert(file){
    let image = await getBase64(file)

    setImage(image);
    createCategory({label, image})

    setImage(null)
    setLabel('')
    toggleLoginForm()
  }

  const handleSubmit =  e => {
    e.preventDefault();

    convert(image);
  }

  const deleteAction = category => {
    setSelectedCategory(category)
    toggleConfirmationModal()
  }
  
  const handleDelete = (id) =>{
    onDelete(id)
    toggleConfirmationModal()
  }

  const updateAction = category => {
    setSelectedCategory(category)
    toggleEditCategory()
  }


   async function handleUpdate(e){
    let img = null
    e.preventDefault()

    if( (selectedCategory.image !== null) && (isBase64(selectedCategory.image) == false)){
       img = await getBase64(selectedCategory.image)
    }

    let cat = {
      id: selectedCategory.id,
      name: selectedCategory.name,
      image: img
    }
    onUpdate(cat)
    toggleEditCategory()
  }

  useEffect(() => {
    dispatch(actions.fetchCategories())
  }, [dispatch])
  
  return (
    <div className="wrap-content">
      <h6 className="page-title"> <CategoryOutlinedIcon /> <span>Categories</span></h6>

      <PageHeader 
        Icon={CategoryOutlinedIcon} 
        text="Categorie"
      > 
        <Button 
          classNames="modal-toggle" 
          handleClick={toggleLoginForm} 
          text="Nouvelle categorie"
        /> 
      </PageHeader>

      <table className="table ucp-table mt-5">
        <thead className="thead-s">
          <tr>
            <th className="text-center" scope="col">Id</th>
            <th>Image</th>
            <th className="text-center" scope="col">Nom</th>
            <th className="text-center" scope="col">Date création </th>
            <th className="text-center" scope="col">Cours</th>
            <th className="text-center" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="text-center">{category.id}</td>
              <td>
                { category.image !== null ?   
                  <img src={category.image} alt=""style={{width: "80px", height: "80px"}} /> : 
                  <img src={placeholderImage} alt="" style={{width: "80px", height: "80px"}}  />}
                
              </td>
              <td className="text-center">{category.name}</td>
              <td className="text-center">{category.created_at.substring(0,10)}</td>
              <td className="text-center">{category.CoursesCount}</td>
              <td className="text-center">
                <EditOutlinedIcon className="uil" onClick={() => updateAction(category)} />
                {category.CoursesCount > 0 ? '' : <DeleteOutlineOutlinedIcon onClick={() => deleteAction(category)} className="uil" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Category's creation  */}
      <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Nouvelle Categorie"
        >
          <form onSubmit={handleSubmit}>
          <div className="ui search focus mt-2">
            <div className="ui left icon input swdh95">
            <FormInput
              name="label"
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder=""
              className="prompt srch_explore"
              label="Label"
              required
              />
            </div>
          </div>
          <div className="ui form swdh30">

            <label className="label mt-3">Image</label>
            <input type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} className="d-none" />
            
            <label htmlFor="image" style={{width: '100%', border: '1px dashed #e5e5e5', marginBottom: '15px'}}>
              <img src={placeholderImage} style={{width: '100%', height: '250px'}} alt="" />
            </label>
            <div className="d-flex align-items-center justify-content-end">
             <Button 
                classNames="modal-toggle" 
                handleClick={toggleLoginForm} 
                text="Annuler"
                variant="secondary"
              /> 
              <Button
                text="Enregistrer"
              />
            </div>
          </div>
          </form>
        </Modal>

        <Modal
          isShowing={isConfirmationModalShowed}
          hide={toggleConfirmationModal}
          title="Confirmation de suppression" 
        >
          <p className="mt-2 text-bold"> <strong>Vous etes sur le point de supprimer le categorie &quot; {selectedCategory.name} &quot;</strong> <br />
          Voulez-vous confirmez ? </p>

          <div className="d-flex align-items-center justify-content-end">
            <Button 
              classNames="modal-toggle" 
              handleClick={toggleConfirmationModal} 
              text="Annuler"
              variant="secondary"
            /> 
          <Button 
            classNames="modal-toggle ml-3" 
            handleClick={() => handleDelete(selectedCategory.id)} 
            text="Supprimer"
          /> 
          </div>
        </Modal>

        <Modal
          isShowing={isEditCategoryShowed}
          hide={toggleEditCategory}
          title="Modifier Categorie"
        >
          <form onSubmit={handleUpdate}>
          <div className="ui search focus mt-2">
            <div className="ui left icon input swdh95">
            <FormInput
              name="label"
              type="text"
              value={selectedCategory.name}
              onChange={(e) => setSelectedCategory({...selectedCategory, name: e.target.value})}
              placeholder=""
              className="prompt srch_explore"
              label="Label"
              required
              />
            </div>
          </div>
          <div className="ui form swdh30">

            <label className="label mt-3">Image</label>
            <input type="file" name="image" id="image" onChange={(e) => setSelectedCategory({...selectedCategory, image: e.target.files[0]})} className="d-none" />
            
            <label htmlFor="image" style={{width: '100%', border: '1px dashed #e5e5e5', marginBottom: '15px'}}>
              <img src={selectedCategory.image} style={{width: '100%', height: '250px'}} alt="" />
            </label>
            <div className="d-flex align-items-center justify-content-end">
              <Button 
                classNames="modal-toggle" 
                handleClick={toggleEditCategory} 
                text="Annuler"
                variant="secondary"
              /> 

              <Button
                text="Modifier"
              />
            </div>
          </div>
          </form>
        </Modal>
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.oneOf(['array', 'Object', 'object']),
  dispatch: PropTypes.func
}

const mapStateTopProps = state => {
  return{
    categories: state.categories.categories
  }
}

export default connect(mapStateTopProps)(Categories)
