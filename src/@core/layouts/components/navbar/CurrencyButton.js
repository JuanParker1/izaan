import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonGroup } from 'reactstrap'
import { setSelectedCurrency } from './../../../../redux/dashboard'

const NavbarButton = () => {
  const dispatch = useDispatch()
  const currency = useSelector((state) => state.dashboard.selectedCurrency)

    return (
      <div>
        <ButtonGroup className='mb-1'
        >
          <Button color={currency === 'BTC' ? 'secondary' : 'primary'}
            style={{
              fontFamily: 'OpenSans'
            }}
            onClick={() => dispatch(setSelectedCurrency('BTC'))}
          >
            BTC
          </Button>
          <Button color={currency === 'KRW' ? 'secondary' : 'primary'}
            style={{
              fontFamily: 'OpenSans'
            }}
            onClick={() => dispatch(setSelectedCurrency('KRW'))}
          >
            KRW
          </Button>
          <Button color={currency === 'USDT' ? 'secondary' : 'primary'}
            style={{
              fontFamily: 'OpenSans'
            }}
            onClick={() => dispatch(setSelectedCurrency('USDT'))}
          >
            USDT
          </Button>
        </ButtonGroup>
      </div>
    )
}

export default NavbarButton
