import React, { useState } from 'react'
import RatingBtn from './RatingBtn'
import { TiStarFullOutline } from 'react-icons/ti'

const Rating = (props) => {
    const style = {
        container: `my-8 mx-9`,
        ratingCont: `flex justify-between items-center my-7`,
        starLogo: `w-[60px] h-[60px] bg-transBlue rounded-full flex justify-center items-center`,
        heading: `text-3xl font-medium mt-10 mb-5`,
        submitBtn: `w-[385px] h-[42px] bg-btnOrage text-white rounded-3xl tracking-widest text-sm hover:bg-white hover:text-btnOrage`
    }


    const [rateSelected, setRateSelected] = useState(0)

    function getRating(rating) {
        setRateSelected(rating)
        console.log('I was clicked!')
        console.log(rating)
    }

    return (
        <div className={style.container}>
            {/* Start Button */}
            <div className={style.starLogo}>
                <TiStarFullOutline className='text-btnOrage' size={35} />
            </div>
            <h1 className={style.heading}>How did we do?</h1>
            <p className='text-textGrey'>
                Please let us know how we did with your support
                request. All feedback is appreciated to help us
                improve our offering!
            </p>

            {/* Rating Container */}
            <div className={style.ratingCont}>
                <RatingBtn rating={1} getRating={getRating} />
                <RatingBtn rating={2} getRating={getRating} />
                <RatingBtn rating={3} getRating={getRating} />
                <RatingBtn rating={4} getRating={getRating} />
                <RatingBtn rating={5} getRating={getRating} />
            </div>
            <button onClick={() => props.handleSubmit(rateSelected)} className={style.submitBtn}>SUBMIT</button>
        </div>
    )
}

export default Rating