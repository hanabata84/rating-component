import React, { useState } from "react"
const RatingBtn = (props) => {

    const style = {
        ratingBtn: `w-[60px] h-[60px] bg-transBlue rounded-full flex justify-center items-center hover:bg-btnHoverGrey hover:text-textGreyLight`,
        ratingText: `text-xl text-textGrey`,
        rateClicked: `w-[60px] h-[60px] bg-btnOrage rounded-full flex justify-center items-center`,
        rateTextClicked: `text-xl text-white font-bold`
    }
    const [rateState, setRateState] = useState(false)

    return (
        <button className={rateState ? style.rateClicked : style.ratingBtn} onClick={() => {
            props.getRating(props.rating);
            setRateState(!rateState)
        }}>
            <p className={rateState ? style.rateTextClicked : style.ratingText}>{props.rating}</p>
        </button >
    )
}

export default RatingBtn