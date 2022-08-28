import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'

const Rating = () => {
    return (
        <div className='my-8 mx-9'>
            {/* Start Button */}
            <div className='md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-transBlue rounded-full flex justify-center items-center'>
                <TiStarFullOutline className='text-btnOrage' size={35} />
            </div>
            <h1 className='md:text-4xl text-3xl font-medium mt-10 mb-5'>How did we do?</h1>
            <p className=' text-textGrey'>
                Please let us know how we did with your support
                request. All feedback is appreciated to help us
                improve our offering!
            </p>
            <div className='flex justify-between items-center my-7'>
                {/* Rating Button1 */}
                <button className='md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-transBlue rounded-full flex justify-center items-center hover:bg-btnHoverGrey hover:text-textGreyLight'>
                    <p className='md:text-3xl text-xl text-textGrey'>1</p>
                </button>
                {/* Rating Button2 */}
                <button className='md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-transBlue rounded-full flex justify-center items-center hover:bg-btnHoverGrey hover:text-textGreyLight'>
                    <p className='md:text-3xl text-xl text-textGrey'>2</p>
                </button>
                {/* Rating Button3 */}
                <button className='md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-transBlue rounded-full flex justify-center items-center hover:bg-btnHoverGrey hover:text-textGreyLight'>
                    <p className='md:text-3xl text-xl text-textGrey'>3</p>
                </button>
                {/* Rating Button4 */}
                <button className='md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-transBlue rounded-full flex justify-center items-center hover:bg-btnHoverGrey hover:text-textGreyLight'>
                    <p className='md:text-3xl text-xl text-textGrey'>4</p>
                </button>
                {/* Rating Button5 */}
                <button className='md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-transBlue rounded-full flex justify-center items-center hover:bg-btnHoverGrey hover:text-textGreyLight'>
                    <p className='md:text-3xl text-xl text-textGrey'>5</p>
                </button>
            </div>
            <button className='w-[385px] h-[42px] bg-btnOrage text-white rounded-3xl tracking-widest text-sm'>SUBMIT</button>
        </div>
    )
}

export default Rating