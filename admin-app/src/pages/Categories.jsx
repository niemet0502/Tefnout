import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from "../store/categories/categories.actions"
import PropTypes from "prop-types"
import useModal from '../hooks/useModal';
import Modal from "../components/common/Modal"

// components 
import PageHeader from '../components/common/PageHeader';
import Button from "../components/common/Button"
import FormInput from "../components/form/FormInput"

//icons 
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

function Categories({categories}) {
  const [label, setLabel] = useState('')
  const [image, setImage] = useState(null)
  const [deleteCategory, setDeleteCategory] = useState({id: null, name: ""})
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const { isShowing: isConfirmationModalShowed, toggle: toggleConfirmationModal } = useModal();
  const dispatch = useDispatch()
  const onDelete =  useCallback((id) => {
      dispatch(actions.removeCategory(id))
    },[])

  const createCategory = useCallback((category) => {
    dispatch(actions.newCategory(category))
  })

  const handleSubmit =  e => {
    e.preventDefault();
    createCategory({label, image})
    toggleLoginForm()
  }

  const deleteAction = category => {
    setDeleteCategory(category)
    toggleConfirmationModal()
  }
  
  const handleDelete = (id) =>{
    onDelete(id)
    toggleConfirmationModal()
  }

  useEffect(() => {
    dispatch(actions.fetchCategories())
  }, [dispatch])
  
  return (
    <div className="wrap-content">
      <h6 className="page-title"> <CategoryOutlinedIcon /> <span>Categories</span></h6>

      <PageHeader 
        Icon={CategoryOutlinedIcon} 
        text="Category"
      > 
        <Button 
          classNames="modal-toggle" 
          handleClick={toggleLoginForm} 
          text="Create Category"
        /> 
      </PageHeader>

      <table className="table ucp-table mt-5">
        <thead className="thead-s">
          <tr>
            <th className="text-center" scope="col">Id</th>
            <th>Image</th>
            <th className="text-center" scope="col">Name</th>
            <th className="text-center" scope="col">Created at</th>
            <th className="text-center" scope="col">Course count</th>
            <th className="text-center" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="text-center">{category.id}</td>
              <td>
                <img src={`/uploads/${category.image}`} alt="" />
              </td>
              <td className="text-center">{category.name}</td>
              <td className="text-center">{category.created_at}</td>
              <td className="text-center">{category.CoursesCount}</td>
              <td className="text-center">
                <EditOutlinedIcon className="uil" />
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
          title="New Category"
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

            <input type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} />

            <div className="d-flex align-items-center justify-content-end">
              <Button
                text="Register"
              />
            </div>
          </div>
          </form>
        </Modal>

        <Modal
          isShowing={isConfirmationModalShowed}
          hide={toggleConfirmationModal}
          title="Delete confirmation" 
        >
          <p className="mt-2 text-bold"> <strong>You are deleting &quot; {deleteCategory.name} &quot; Category</strong> <br />
          do you want to confirm? </p>

          <div className="d-flex align-items-center justify-content-end">
            <Button 
              classNames="modal-toggle" 
              handleClick={toggleConfirmationModal} 
              text="Cancel"
              variant="secondary"
            /> 
          <Button 
            classNames="modal-toggle ml-3" 
            handleClick={() => handleDelete(deleteCategory.id)} 
            text="Delete"
          /> 
          </div>
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
