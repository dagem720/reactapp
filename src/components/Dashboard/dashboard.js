import React, { Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { profile } from '../../store/actions/profile'
import { connect } from 'react-redux'
const dashboard = ({profile}) => {
    useEffect(() => {
      
        profile()
      }, [])
  
    return (
        <Fragment>
            Dashboard
        </Fragment>
    )
}

dashboard.propTypes = {

}

export default connect(null,{profile})(dashboard)
