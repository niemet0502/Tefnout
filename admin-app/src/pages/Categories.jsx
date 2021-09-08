import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from "../store/categories/categories.actions"
import PropTypes from "prop-types"
// components 
import PageHeader from '../components/common/PageHeader';
//icons 
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { getStoredAuthToken, storeAuthToken } from '../utils/currentUser';

function Categories({categories, dispatch}) {

  useEffect(() => {
    dispatch(actions.fetchCategories())
  }, [dispatch])
  
  return (
    <div className="wrap-content">
      <h6 className="page-title"> <CategoryOutlinedIcon /> <span>Categories</span></h6>

      <PageHeader Icon={CategoryOutlinedIcon} text="Category" />

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
              <td>{category.image}</td>
              <td className="text-center">{category.name}</td>
              <td className="text-center">{category.created_at}</td>
              <td className="text-center">{category.CoursesCount}</td>
              <td className="text-center">
                <EditOutlinedIcon className="uil" />
                {category.CoursesCount > 0 ? '' : <DeleteOutlineOutlinedIcon className="uil" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/**<h1>{JSON.stringify(categories)}</h1> */}
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
