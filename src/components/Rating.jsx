import React from 'react'
import RatingBtn from './RatingBtn'
import { TiStarFullOutline } from 'react-icons/ti'

const Rating = (props) => {
    const style = {
        container: `my-8 mx-9`,
        ratingCont: `flex justify-between items-center my-7`,
        starLogo: `md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-transBlue rounded-full flex justify-center items-center`,
        heading: `md:text-4xl text-3xl font-medium mt-10 mb-5`,
        submitBtn: `w-[385px] h-[42px] bg-btnOrage text-white rounded-3xl tracking-widest text-sm hover:bg-white hover:text-btnOrage`
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
                <RatingBtn rating={1} />
                <RatingBtn rating={2} />
                <RatingBtn rating={3} />
                <RatingBtn rating={4} />
                <RatingBtn rating={5} />
            </div>
            <button onClick={props.handleSubmit} className={style.submitBtn}>SUBMIT</button>
        </div>
    )
}

export default Rating