import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Resume() {
    return (
        <div className='text-white'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <p>
                            <img src="https://static-00.iconduck.com/assets.00/call-icon-2048x2048-9fglrllu.png" alt="" height={'30px'}/>
                            Call to us
                        </p>
                        <p>
                           we are available 24/7, 7 days a week <br />
                           phone: +1 234 567 89 00
                        </p>

                        <img src="data:image/png;base64,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" alt="" />

                        <p>
                            <img src="" alt="" />
                            Write to us
                        </p>

                        <p>
                            Fill out the form and we will contact you <br />
                            within 24 hours
                            <br />
                            Email: farhang.company@gmail.com
                        </p>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4">
                                <input type="text" placeholder='Your name' />
                            </div>
                            <div className="col-lg-4">
                                <input type="text" placeholder='Your email' />
                            </div>
                            <div className="col-lg-4">
                                <input type="text" placeholder='Your phone' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <textarea name="" id="" cols="103" rows="10" placeholder='Your message'></textarea>
                            </div>
                            <div className="col-lg-12">
                                <button>
                                    Send
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
