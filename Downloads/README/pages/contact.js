import { APP_KEY, APP_URL } from '@/public/settings/there_is_nothing_holding_me_back/config';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

const contact = ({ setMetas, metas }) => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setMetas({ ...metas, title: `Contact` });

    }, []);

    const handleContact = (e) => {
        e.preventDefault();

        setIsLoading(true);

        let name = e.target.elements['name'].value, email = e.target.elements['email'].value, message = e.target.elements['message'].value;
        fetch(`${APP_URL}api/contact`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ name, email, message, key: APP_KEY })
        }).then(res => res.json()).then((data) => {
            if (data.success) {
                toast.success(data.message)
                ContactForm.reset()
            } else {
                toast.error(data.message)
            }
            setIsLoading(false);

        }).catch(err => {
            console.error(err);
            setIsLoading(false);
            toast.error('Something went wrong!')
        });
    }

    return (
        <>
            <div className="page_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 my-5">
                            <div className="bg-white">
                                <div className="row">
                                    <div className="col-lg-12 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="w-100 p-md-5 p-4">
                                            <h3 className="mb-4 txt-dark">Contact Us</h3>
                                            <form onSubmit={handleContact} id="ContactForm">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" for="name">Full Name</label>
                                                            <input type="text" className="form-control rounded-0" name="name" id="name" required placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" for="email">Email Address</label>
                                                            <input type="email" className="form-control rounded-0" name="email" id="email" required placeholder="Email" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 mt-3">
                                                        <div className="form-group">
                                                            <label className="label" for="#">Message</label>
                                                            <textarea name="message" className="form-control rounded-0" id="message" cols="30" rows="4" required placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <button type="submit" className="button button-primary mt-3 px-3 py-2">
                                                                {isLoading ? 'Submitting...' : 'Submit'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default contact