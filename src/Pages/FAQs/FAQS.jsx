import React from "react";
import "./FAQs.css";

const FAQ = () => {


    return (

        <div className="faq-container py-5">
            {/* Frequently Asked Questions */}
            <div className="container">
                <h2 className='text-success'>Frequently Asked Questions</h2>
                <p>Here are some common questions about getting in touch with us.</p>

                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                What events do you organize?          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                We organize a variety of events including community meetings, social gatherings, and educational workshops. Our goal is to bring members together and strengthen community ties.          </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                What resources do you offer?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                We provide access to workshops, informational sessions, and community service resources aimed at enhancing member engagement and participation.

                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                How do I become a member?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Becoming a member is easy! Simply visit our membership page and fill out the online form. We welcome all individuals who want to contribute to our community.          </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                How can I volunteer?


                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Volunteering with us is a rewarding experience! You can sign up for various initiatives and lend your support for community betterment.          </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                What resources are available to members?          </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Members have access to various resources including local guides, support services, and informational materials that can help you get involved in the community.          </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                                Can I suggest an event?       </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                If you have ideas for an event, we’d love to hear them! Please reach out to discuss your suggestions and how we can work together to make it happen.

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                                How do I contact the association?      </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                You can contact us through our contact form found on the website. We look forward to hearing from you and addressing your questions or concerns.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                                What is your mission?      </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Our mission is to foster community engagement and collaboration among residents. We aim to create a vibrant and inclusive neighborhood for everyone.


                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNine">
                            <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine">
                                Where can I find community news?   </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                To stay updated with the latest happenings, check out our community news section. We regularly post updates and announcements relevant to our members.

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTen">
                            <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen">
                                How often do you meet?    </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                We meet regularly, typically once a month. Check our events page for upcoming meeting dates and join us to share your ideas.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Frequently Asked Questions end */}
            {/* Your Community Hub */}
            <div className=" container mt-5 text-center mb-5">
                <h6 className="text-success fw-bold">Your Community Hub</h6>
                <h2 className="fw-bold">Get in Touch</h2>
                <p className="text-muted">
                    Connect with us anytime. We're always here to help and guide you.
                </p>
            </div>

            {/* Cards */}
            <div className="row g-4 justify-content-center">

                <div className="col-md-4">
                    <div className="contact-card text-center p-4 h-100">
                        <div className="icon-box mb-3">
                            <i className="bi bi-envelope"></i>
                        </div>
                        <h5 className="fw-bold text-success">Email Us</h5>
                        <p className="text-muted">
                            Send us your questions or feedback anytime.
                        </p>
                        <a href="#">
                            info@communityassociation.org
                        </a>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="contact-card text-center p-4 h-100">
                        <div className="icon-box mb-3">
                            <i className="bi bi-telephone"></i>
                        </div>
                        <h5 className="fw-bold text-success">Call Us</h5>
                        <p className="text-muted">
                            Talk directly with our support team.
                        </p>
                        <a href="#">555-123-4567</a>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="contact-card text-center p-4 h-100">
                        <div className="icon-box mb-3">
                            <i className="bi bi-geo-alt"></i>
                        </div>
                        <h5 className="fw-bold text-success">Visit Us</h5>
                        <p className="text-muted">
                            Come by our office for in-person assistance.
                        </p>
                        <span>123 Main St, Hometown, State</span>
                    </div>
                </div>

            </div>
            {/* Your Community Hub  end*/}

            {/* Community Today */}
            <div className='container'>


                <section className=" d-flex justify-content-center align-items-center py-5 py-md-5 py-lg-5">
                    <div className="join-box text-center px-3 px-sm-4 px-md-5 py-4 py-md-5">

                        <h4 className="fw-bold text-success fs-4 fs-md-3">
                            Join Our Community Today

                        </h4>

                        <p className="mt-2 mb-4 text-dark">
                            Become a valued member of our Resident’s Association. Engage with neighbors, participate in events, and access valuable community resources designed for you. Connect and contribute to a thriving local community.
                        </p>

                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                            <a href="#"><button className="btn btn-outline-danger px-4">Get Start</button> </a>
                            <a href="#">  <button className="btn btn-outline-success px-4">Join Now</button></a>
                        </div>

                    </div>
                </section>
            </div>
            {/* Community Today end */}

        </div>

    );
};

export default FAQ;
