
import Select from 'react-select'
// ** Third Party Components
import { User, Briefcase, Mail, Calendar, DollarSign, X } from 'react-feather'
import { selectThemeColors } from '@utils'
// ** Reactstrap Imports
import { Modal, Input, Label, Button, ModalHeader, ModalBody, InputGroup, InputGroupText, ModalFooter } from 'reactstrap'
import { useState } from 'react'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const colourOptions = [
  { value: 'upbit_kr', label: 'Upbit' },
  { value: 'binance', label: 'Binance' },
  { value: 'hitbtc', label: 'Hitbtc' },
  { value: 'huobi', label: 'Huobi' },
  { value: 'okex', label: 'Okex' },
  { value: 'kucoin', label: 'Kucoin' },
  { value: 'ftx', label: 'FTX' }
]
import axios from 'axios'
import { unblinkedmainserver } from '@utility/apiserver/apiserver'
// ** Manuals
import BinancManual from './manuals/binanceManual'
import FtxManual from './manuals/ftxManual'
import HitBtcManual from './manuals/hitBtcManual'
import HuobiManual from './manuals/huobiManual'
import KucoinManual from './manuals/kucoinManual'
import OkxManual from './manuals/okxManual'
import UpbitManual from './manuals/upbitManual'

const AddNewModal = ({ open, handleModal }) => {
  // ** State
  const [manualModal, setManualModal] = useState(false)
  const [checked, setChecked] = useState(false)
  // ** Custom close btn
  const [publicdata, setPublicdata] = useState([])
  const [privatedata, setPrivatedata] = useState([])
  const [exchangedata, setExchangedata] = useState('upbit_kr')
  const [passphrasedata, setPassphrasedata] = useState(null)

  const summit = () => {
    const data = {
      exchange: exchangedata,
      public_key: publicdata,
      private_key: privatedata,
      passphrase: passphrasedata
    }

    axios({
      method: "post",
      url: `${unblinkedmainserver}/user/apiregister`,
      data
    })
      .then((res) => {
        handleModal()
        setPublicdata([])
        setPrivatedata([])
        setExchangedata('upbit_kr')
        setExchangedata(null)
        setChecked(false)
        console.log('data', res.data)
      })
      .catch((err) => {
        console.log("error: ", err)
      })
  }
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />

  //toggle manual modal
  const toggle = () => {
    if (!checked) {
      setManualModal(!manualModal)
    }
  }

  //accept the manual
  const accept = () => {
    setChecked(true)
    toggle()
  }

  //selected manual 
  const Manual = () => {

    switch (exchangedata) {
      case 'binance':
        return <BinancManual />
      case 'ftx':
        return <FtxManual />
      case 'hitbtc':
        return <HitBtcManual />
      case 'huobi':
        return <HuobiManual />
      case 'kucoin':
        return <KucoinManual />
      case 'okex':
        return <OkxManual />
      case 'upbit_kr':
        return <UpbitManual />
      default:
        return <UpbitManual />
    }

  }

  return (
    <>
      <Modal
        isOpen={open}
        toggle={handleModal}
        className='sidebar-sm'
        modalClassName='modal-slide-in'
        contentClassName='pt-0'
      >
        <ModalHeader className='mb-1' toggle={handleModal} close={CloseBtn} tag='div'>
          <h5 className='modal-title'>New API key</h5>
        </ModalHeader>
        <ModalBody className='flex-grow-1'>
          <Label className='form-label'>Exchange</Label>
          <Select
            theme={selectThemeColors}
            className='react-select'
            classNamePrefix='select'
            options={colourOptions}
            isClearable={false}
            defaultValue={{ value: 'upbit_kr', label: 'Upbit' }}
            onChange={e => {
              setExchangedata(e.value)
              setChecked(false)
            }}

          />
          <div className='mb-1'>
            <Label className='form-label' for='publicAPI'>
              public API
            </Label>
            <InputGroup>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
              <Input id='publicAPI' placeholder='type your APIkey'
                onChange={e => {
                  setPublicdata(e.target.value)
                }} />
            </InputGroup>
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='private-API'>
              private API
            </Label>
            <InputGroup>
              <InputGroupText>
                <Briefcase size={15} />
              </InputGroupText>
              <Input id='private-API' placeholder='type your APIkey'
                onChange={e => {
                  setPrivatedata(e.target.value)
                }}
              />
            </InputGroup>
          </div>
          {(exchangedata === 'okex' || exchangedata === 'kucoin') &&
            <div className='mb-1'>
              <Label className='form-label' for='private-API'>
                Pass Phrase
              </Label>
              <InputGroup>
                <InputGroupText>
                  <Briefcase size={15} />
                </InputGroupText>
                <Input id='pass-phrase' placeholder='type your Passphrase'
                  onChange={e => {
                    setPassphrasedata(e.target.value)
                  }}
                />
              </InputGroup>
            </div>
          }

          <div className='d-flex justify-content-around'>
            <Input
              type="checkbox"
              checked={checked}
              onChange={toggle}
            />
            <p style={{ marginLeft: '5px' }}>I have read the manual and checked the precautions</p>
          </div>
          <Button className='me-1' color='primary' disabled={!checked} onClick={summit}>
            Submit
          </Button>
          <Button color='secondary' onClick={handleModal} outline>
            Cancel
          </Button>
        </ModalBody>
      </Modal>
      <Modal isOpen={manualModal} toggle={toggle} scrollable={true} size="lg" style={{ width: '100% !important' }}>
        <ModalHeader toggle={toggle}>Precautions Manual</ModalHeader>
        <ModalBody>
          <Manual />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => accept()}>Accept</Button>{' '}
        </ModalFooter>
      </Modal>
    </>
  )
}
export default AddNewModal