import React, { Fragment } from 'react';
import Product from './Product';    
import Blog from './Blog';
import Contact from './Contact';

function Index(){
    return(
        <Fragment>
            <div className="carousel">
                <Menu />
                <Product />
                <Blog />
                <Contact />

                {/* list */}

                <div className="list">

                    <div className="item">
                        <a href="/card-list.html">
                            <img src="assets/image/img1.jpg" alt="Description of the Accessories" />
                        </a>
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">pajamasDog</div>
                            <div className="topic">Accessories Related</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <a href="/card-list.html">
                            <img src="assets/image/img2.jpg" alt="Description of C&C" />
                        </a>
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">pajamasDog</div>
                            <div className="topic">C&C</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <a href="/card-list.html">
                            <img src="assets/image/img3.jpg" alt="Description of the Pajamas" />
                        </a>
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">pajamasDog</div>
                            <div className="topic">Pajamas Related</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <a href="/card-list.html">
                            <img src="assets/image/img4.jpg" alt="Description of the Leash" />
                        </a>
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">pajamasDog</div>
                            <div className="topic">Leash Related</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <a href="/card-list.html">
                            <img src="assets/image/img5.jpg" alt="Description of the Photograph" />
                        </a>
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">pajamasDog</div>
                            <div className="topic">Photograph Related</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <a href="/card-list.html">
                            <img src="assets/image/img6.jpg" alt="Description of the Food" />
                        </a>
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">pajamasDog</div>
                            <div className="topic">Food Related</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <a href="/card-list.html">
                            <img src="assets/image/img7.jpg" alt="Description of the Bath" />
                        </a>
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">pajamasDog</div>
                            <div className="topic">Bath Related</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                             </div>
                        </div>
                     </div>

                    <div className="item">
                        <a href="/card-list.html">
                            <img src="assets/image/img8.jpg" alt="Description of the Snack" />
                        </a>
                        <div className="content">
                            <div className="author">LUNDEV</div>
                            <div className="title">pajamasDog</div>
                            <div className="topic">Snack Related</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div className="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* list thumnail */}
                
                <div className="thumbnail">

                    <div className="item">
                        <img src="assets/image/img1.jpg" alt="Description of the pajamasDog" />
                        <div className="content">
                            <div className="title">
                                Accessories Related
                            </div>
                            <div className="description">
                                Description
                            </div>
                        </div>
                    </div>
            
                    <div className="item">
                        <img src="assets/image/img2.jpg" alt="Description of the pajamasDog" />
                        <div className="content">
                            <div className="title">
                                C & C
                            </div>
                            <div className="description">
                                Description
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src="assets/image/img3.jpg" alt="Description of the pajamasDog" />
                        <div className="content">
                            <div className="title">
                                Pajamas Related
                            </div>
                            <div className="description">
                                Description
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src="assets/image/img4.jpg" alt="Description of the pajamasDog" />
                        <div className="content">
                            <div className="title">
                                Leash Related
                            </div>
                            <div className="description">
                                Description
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src="assets/image/img5.jpg" alt="Description of the pajamasDog" />
                        <div className="content">
                            <div className="title">
                                Photograph Related
                            </div>
                            <div className="description">
                                Description
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src="assets/image/img6.jpg" alt="Description of the pajamasDog" />
                        <div className="content">
                            <div className="title">
                                Food Related
                            </div>
                            <div className="description">
                                Description
                             </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src="assets/image/img7.jpg" alt="Description of the pajamasDog" />
                        <div className="content">
                            <div className="title">
                                Bath Related
                            </div>
                            <div className="description">
                                Description
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src="assets/image/img8.jpg" alt="Description of the pajamasDog" />
                        <div className="content">
                            <div className="title">
                                Snack Related
                            </div>
                            <div className="description">
                                Description
                            </div>
                        </div>
                    </div>
                
                </div>

                <div className="arrows">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
                    <div className="time"></div>
            
            </div>

            {/* <script src="app.js"></script> */}

        </Fragment>
    )
}

export default Index;