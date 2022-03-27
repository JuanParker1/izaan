// ** React Imports
import { Fragment } from 'react'
import { Button } from 'reactstrap'

const AnnuallyStep = ({setYearly}) => {

  return (
    <Fragment>
      <div className="annuallybtn">
        <div>
            <h3
                style={{
                    marginLeft: '33%',
                    marginBottom: '10%'
                }}
            >Pick Year</h3>
            <Button
            onClick={() => setYearly(2017)}
            outline
            style={{
                marginRight: '10px',
                marginBottom: '30px',
                width: '100px',
                fontSize: '16px',
                height: '50px'
            }}
            >2017</Button>
            <Button
            onClick={() => setYearly(2018)}
            outline
            style={{
                marginRight: '10px',
                marginBottom: '30px',
                width: '100px',
                fontSize: '16px',
                height: '50px'
            }}
            >2018</Button>
            <Button
            onClick={() => setYearly(2019)}
            outline
            style={{
                marginRight: '10px',
                marginBottom: '30px',
                width: '100px',
                fontSize: '16px',
                height: '50px'
            }}
            >2019</Button>
            <Button
            onClick={() => setYearly(2020)}
            outline
            style={{
                marginRight: '10px',
                width: '100px',
                fontSize: '16px',
                height: '50px'
            }}
            >2020</Button>
            <Button
            onClick={() => setYearly(2021)}
            outline
            style={{
                marginRight: '10px',
                width: '100px',
                fontSize: '16px',
                height: '50px'
            }}
            >2021</Button>
            <Button
            onClick={() => setYearly(2022)}
            outline
            style={{
                marginRight: '10px',
                width: '100px',
                fontSize: '16px',
                height: '50px'
            }}
            >2022</Button>
        </div>
        </div>
    </Fragment>
  )
}

export default AnnuallyStep
