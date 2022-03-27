// ** Third Party Components
import { useTranslation } from 'react-i18next'
import ReactCountryFlag from 'react-country-flag'
//import enData from '../../../../../public/assets/data/locales/en.json'
// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const IntlDropdown = () => {
  // ** Hooks
  const { i18n } = useTranslation()
  //** Vars
  const langObj = {
    en: 'English',
    de: 'German',
    pt: 'Portuguese',
    kr: '한국어'
  }

  // ** Function to switch Language
  const handleLangUpdate = (e, lang) => {
    e.preventDefault()
    i18n.changeLanguage(lang)
  }
  return (
    <div>
      <UncontrolledDropdown href='/' tag='li' className='dropdown-language nav-item'
        style={{
          fontFamily: 'OpenSans'
        }}
      >
      <DropdownToggle href='/' tag='a' className='nav-link' onClick={e => e.preventDefault()}>
        <ReactCountryFlag
          svg
          className='country-flag flag-icon'
          countryCode={i18n.language === 'en' ? 'gb' : i18n.language}
        />
        <span className='selected-language'>{langObj[i18n.language]}</span>
      </DropdownToggle>
      <DropdownMenu className='mt-0' end>
        <DropdownItem href='/' tag='a' onClick={e => handleLangUpdate(e, 'en')}>
          <ReactCountryFlag className='country-flag' countryCode='gb' svg />
          <span className='ms-1'>English</span>
        </DropdownItem>
        <DropdownItem href='/' tag='a' onClick={e => handleLangUpdate(e, 'kr')}>
          <ReactCountryFlag className='country-flag' countryCode='kr' svg />
          <span className='ms-1'>Korean</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    </div>
  )
}

export default IntlDropdown
