import {connect} from 'react-redux'
import {setDropdowns} from '../actions/currencyConversionActions'
import Dropdown from '../components/Dropdown'

const mapStateToProps = (state, ownProps) => {conversions: state.conversions, id: ownProps.id}
export default connect(mapStateToProps, {handleDropdown: setDropdowns})(Dropdown)