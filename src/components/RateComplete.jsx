import React from 'react'
import transactIcon from '../assets/transac_icon.svg'

const style = {
    container: `mt-3 mx-9 flex flex-col justify-center items-center`,
    ratingResult: `md:w-[365px] md:h-[57px] w-[300px] h-[47px] bg-transBlue text-btnOrage text-xl font-semibold flex justify-center items-center rounded-3xl`,
    heading: `md:text-4xl text-3xl font-medium mt-7 mb-5`,
    text: `text-textGrey text-center mx-3`
}
const RateComplete = (props) => {
    return (
        <div className={style.container}>
            <img className='h-[180px]' src={transactIcon} alt="/" />
            <div className={style.ratingResult}>{`You selected ${props.rateSelected} out of 5`}</div>
            <h1 className={style.heading}>Thank you!</h1>
            <p className={style.text}>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don’t hesitate to
                get in touch!
            </p>
        </div>
    )
}

export default RateComplete