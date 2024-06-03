import React from 'react'


export default function Footer() {
    return (
        <div className=' h-[35rem] text-[gray] bg-black'>

            <div className=' p-[4rem] max-auto flex gap-[7rem] justify-center'>
                <div className="">
                    <span className='text-3xl text-[white]'>Madhava</span><br />© 2024 Bundl<br /> Technologies Pvt. Ltd
                </div>

                <div>
                    <span className='text-2xl text-bold text-[white]'>Company</span><br /><br />
                    <div className='cursor-pointer'>
                        Carrer<br /><br />
                        Team<br /><br />
                        About<br /><br />
                        Madhava One<br /><br />
                        Madhava Instamart<br /><br />
                        Madhava Genie
                    </div>

                </div>

                <div>
                    <span className='text-2xl text-bold text-[white]'>Contact us</span><br /><br />
                    <div className='cursor-pointer'>
                        Help & Support<br /><br />
                        Partner with us<br /><br />
                        Ride with us <br /><br />
                    </div>


                    <span className='text-2xl text-bold text-[white]'>Legal</span><br /><br />
                    <div className='cursor-pointer'>
                        Teams & Condition<br /><br />
                        Cookies Policy<br /><br />
                        Privacy Policy<br /><br />
                        Investor Relations
                    </div>

                </div>

                <div>
                    <span className='text-2xl text-bold text-[white]'>We deliver to:</span><br /><br />
                    <div className='cursor-pointer'>
                        Bangalore<br /><br />
                        Gurgaon<br /><br />
                        Hyderabad<br /><br />
                        Dehli<br /><br />
                        Mumbai<br /><br />
                        Pune
                    </div>

                </div>

            </div>


        </div>
    )
}
