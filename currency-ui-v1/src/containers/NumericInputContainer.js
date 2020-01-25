import {connect} from 'react-redux'
import NumericInput from '../components/NumericInput'
import {setAmount} from '../actions/currencyConversionActions'

const mapStateToProps = (state, ownProps) => ({conversions: state.currencyConversion, id: ownProps.id})

export default connect(mapStateToProps, {handleAmount: setAmount})(NumericInput)
