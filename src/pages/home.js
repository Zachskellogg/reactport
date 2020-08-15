import React from 'react';


const Home = () => {
    return (
        <div>
            <header className="header">
                <div className="container clearfix">
                    <img className="profile-image img-fluid float-left" src="assets/images/profile.jpg" alt="Zach Kellogg" />
                    <div className="profile-content float-left">
                        <h1 className="name">Zach Kellogg</h1>
                        <h2 className="desc">Novice Developer</h2>
                        <ul className="social list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt" /></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow" /></a></li>
                            <li className="list-inline-item last-item"><a href="#"><i className="fab fa-codepen" /></a></li>
                        </ul>
                    </div>{/*//profile*/}
                    <a className="btn btn-cta-primary float-right" href="https://themes.3rdwavemedia.com/" target="_blank"><i className="fas fa-paper-plane" /> Contact Me</a>
                </div>{/*//container*/}
            </header>{/*//header*/}
            <div className="container sections-wrapper">
                <div className="row">
                    <div className="primary col-lg-8 col-12">
                        <section className="about section">
                            <div className="section-inner">
                                <h2 className="heading">About Me</h2>
                                <div className="content">
                                    <p>Born in Illinois, i moved out to Utah. I went to Juan Diego High School. Attended the U of U for 2 years. I was the GM of the Pie Pizzeria for 11 years. Now I am the Project Manager of a eCommerce Web development Agency</p>
                                </div>{/*//content*/}
                            </div>{/*//section-inner*/}
                        </section>{/*//section*/}
                        <section className="latest section">
                            <div className="section-inner">
                                <h2 className="heading">Latest Projects</h2>
                                <div className="content">
                                    <div className="desc text-left">
                                    </div>{/*//item*/}
                                    <hr className="divider" />
                                    <div className="item row">
                                        <a className="col-md-4 col-12" href="https://zachskellogg.github.io/ProjectBored/" target="_blank">
                                            <img className="img-fluid project-image" src="assets/images/projects/project-1.png" alt="project name" />
                                        </a>
                                        <div className="desc col-md-8 col-12">
                                            <h3 className="title"><a href="https://zachskellogg.github.io/ProjectBored/" target="_blank">First Project of the bootcamp</a></h3>
                                            <p className="mb-2">A quick app we developed to grab random movies, games, and books to ease people's bordem during quarentine.</p>
                                            <p><a className="more-link" href="https://zachskellogg.github.io/ProjectBored/" target="_blank"><i className="fas fa-external-link-alt" />Find out more</a></p>
                                        </div>{/*//desc*/}
                                    </div>{/*//item*/}
                                    <div className="item row">
                                        <a className="col-md-4 col-12" href="https://zachskellogg.github.io/Day-Planner/." target="_blank">
                                            <img className="img-fluid project-image" src="assets/images/projects/Daily.png" alt="Daily Planne" />
                                        </a>
                                        <div className="desc col-md-8 col-12">
                                            <h3 className="title"><a href="https://zachskellogg.github.io/Day-Planner/." target="_blank">Daily Planner</a></h3>
                                            <p className="mb-2">An app to help you organize your day.</p>
                                            <p><a className="more-link" href="https://zachskellogg.github.io/Day-Planner/." target="_blank"><i className="fas fa-external-link-alt" />Find out more</a></p>
                                        </div>{/*//desc*/}
                                    </div>{/*//item*/}
                                    <div className="item row">
                                        <a className="col-md-4 col-12" href="https://zachskellogg.github.io/passwordgenerator/" target="_blank">
                                            <img className="img-fluid project-image" src="assets/images/projects/password.png" alt="project name" />
                                        </a>
                                        <div className="desc col-md-8 col-12">
                                            <h3 className="title"><a href="https://zachskellogg.github.io/passwordgenerator/" target="_blank">Password Generator</a></h3>
                                            <p className="mb-2">A simple site that will generate a pasword according to the parameters set by the user.</p>
                                            <p><a className="more-link" href="https://zachskellogg.github.io/passwordgenerator/" target="_blank"><i className="fas fa-external-link-alt" />Find out more</a></p>
                                        </div>{/*//desc*/}
                                    </div>{/*//item*/}
                                    <div className="item row">
                                        <a className="col-md-4 col-12" href="https://zachsfitrack.herokuapp.com/stats" target="_blank">
                                            <img className="img-fluid project-image" src="assets/images/projects/fitness.png" alt="project name" />
                                        </a>
                                        <div className="desc col-md-8 col-12">
                                            <h3 className="title"><a href="https://zachsfitrack.herokuapp.com/stats" target="_blank">Fitness Tracker</a></h3>
                                            <p className="mb-2">You can track all your woekouts with this</p>
                                            <p><a className="more-link" href="https://zachsfitrack.herokuapp.com/stats" target="_blank"><i className="fas fa-external-link-alt" />Find out more</a></p>
                                        </div>{/*//desc*/}
                                    </div>{/*//item*/}
                                    <div className="item row">
                                        <a className="col-md-4 col-12" href="https://recreationoutlet.com/" target="_blank">
                                            <img className="img-fluid project-image" src="assets/images/projects/RecOut.png" alt="project name" />
                                        </a>
                                        <div className="desc col-md-8 col-12">
                                            <h3 className="title"><a href="https://recreationoutlet.com/" target="_blank">Recreation Outlet</a></h3>
                                            <p className="mb-2">Created a eCommerce website for a local seller of recreation gear</p>
                                            <p><a className="more-link" href="https://recreationoutlet.com/" target="_blank"><i className="fas fa-external-link-alt" />Find out more</a></p>
                                        </div>{/*//desc*/}
                                    </div>//item
                                </div>{/*//content*/}
                            </div>{/*//section-inner*/}
                        </section>{/*//section*/}
                        <section className="experience section">
                            <div className="section-inner">
                                <h2 className="heading">Work Experience</h2>
                                <div className="content">
                                    <div className="item">
                                        <h3 className="title">Project Manager <span className="place"><a href="#">NuEthic</a></span> <span className="year">(2020 - Present)</span></h3>
                                        <p>AS Project Manager i oversee all clients, and manage all developers.</p>
                                    </div>{/*//item*/}
                                </div>{/*//content*/}
                            </div>{/*//section-inner*/}
                        </section>{/*//section*/}
                        <section className="github section">
                            <div className="section-inner">
                                <h2 className="heading">My GitHub</h2>
                                <p>
                                    {/* You can embed your GitHub contribution graph calendar using IonicaBizau's <a href="https://github.com/Zachskellogg/github-calendar" target="_blank">GitHub Calendar</a> widget. */}
            </p><div id="github-graph" className="github-graph">
                                </div>{/*//github-graph*/}
                                <p>
                                    {/* You can also embed your GitHub activities using Casey Scarborough's <a href="https://caseyscarborough.com/projects/github-activity/" target="_blank">GitHub Activity Stream</a> widget.
              //Usage: https://caseyscarborough.com/projects/github-activity/ */}
                                </p><div>
                                </div>{/*//ghfeed*/}
                            </div>{/*//secton-inner*/}
                        </section>{/*//section*/}
                    </div>{/*//primary*/}
                    <div className="secondary col-lg-4 col-12">
                        <aside className="info aside section">
                            <div className="section-inner">
                                <h2 className="heading sr-only">Basic Information</h2>
                                <div className="content">
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-map-marker-alt" /><span className="sr-only">Location:</span>Salt Lake City, US</li>
                                        <li><i className="fas fa-envelope" /><span className="sr-only">Email:</span><a href="#">Zach@nuethic.com</a></li>
                                        <li><i className="fas fa-link" /><span className="sr-only">Website:</span><a href="#">https://www.zachtest.com</a></li>
                                    </ul>
                                </div>{/*//content*/}
                            </div>{/*//section-inner*/}
                        </aside>{/*//aside*/}
                        <aside className="skills aside section">
                            <div className="section-inner">
                                <h2 className="heading">Skills</h2>
                                <div className="content">
                                    <p className="intro">
                                        Still learning through the boot camp. But very familiar wit hthe following languages</p>
                                    <div className="skillset">
                                        <div className="item">
                                            <h3 className="level-title">Javascript &amp; jQuery<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle" />Expert</span></h3>
                                            <div className="level-bar">
                                                <div className="level-bar-inner" data-level="30%">
                                                </div>
                                            </div>{/*//level-bar*/}
                                        </div>{/*//item*/}
                                        <div className="item">
                                            <h3 className="level-title">HTML5 &amp; CSS<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle" />Expert</span></h3>
                                            <div className="level-bar">
                                                <div className="level-bar-inner" data-level="60%">
                                                </div>
                                            </div>{/*//level-bar*/}
                                        </div>{/*//item*/}
                                    </div>
                                </div>{/*//content*/}
                            </div>{/*//section-inner*/}
                        </aside>{/*//section*/}
                        <aside className="testimonials aside section">
                            <div className="section-inner">
                                <h2 className="heading">Testimonials</h2>
                                <div className="content">
                                    <div className="item">
                                        <blockquote className="quote">
                                            <p><i className="fas fa-quote-left" />
                    As a client of NuEthic, it’s been my pleasure to work closely with Zach on our new website project. Zach served as Project Manager: setting up Weekly Scrum meetings; following scope of work; and assigning pages, tasks, and fixes to web developers. Zach showed dedication to the project as well as to his team, and he ensured we had quality support and solutions throughout the project.
                    Zach has strong technical knowledge of what is required to build a new site, but he also displays empathy and concern for completing the work to our specifications. He is a motivated and creative team leader and makes sure each developer has a clear understanding of the work required. He has great problem-solving skills, which helped our firm to find a great technical solution to a problem that would have been a dealbreaker.
                    Lastly, he is flexible, adaptable and has a great collaborative spirit, which is always a plus.
                    I highly recommend working with Zach and his firm on any web development project.</p>
                                        </blockquote>
                                        <p className="source"><span className="name">Salvador Rodriguez</span><br /><span className="title">Aiya Matcha</span></p>
                                    </div>{/*//item*/}
                                    <p><a className="more-link" href="https://www.linkedin.com/in/zachary-kellogg-887177139/"><i className="fas fa-external-link-alt" />More on Linkedin</a></p>
                                </div>{/*//content*/}
                            </div>{/*//section-inner*/}
                        </aside>{/*//section*/}
                        <aside className="education aside section">
                            <div className="section-inner">
                                <h2 className="heading">Education</h2>
                                <div className="content">
                                    <div className="item">
                                        <h3 className="title"><i className="fas fa-graduation-cap" /> Full Stack coding bootcamp</h3>
                                        <h4 className="university">University of Utah<span className="year">(2020-2020)</span></h4>
                                    </div>{/*//item*/}
                                    <div className="item">
                                        <h3 className="title"><i className="fas fa-graduation-cap" /> Project management education</h3>
                                        <h4 className="university">RedRock Research<span className="year">(2020-2020)</span></h4>
                                    </div>{/*//item*/}
                                </div>{/*//content*/}
                            </div>{/*//section-inner*/}
                        </aside>{/*//section*/}
                        <aside className="languages aside section">
                            <div className="section-inner">
                                <h2 className="heading">Languages</h2>
                                <div className="content">
                                    <ul className="list-unstyled">
                                        <li className="item">
                                            <span className="title"><strong>English:</strong></span>
                                            <span className="level">Native Speaker <br className="visible-xs" /><i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> </span>
                                        </li>{/*//item*/}
                                        <li className="item">
                                            <span className="title"><strong>Spanish:</strong></span>
                                            <span className="level">Professional Proficiency <br className="visible-sm visible-xs" /><i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star-half" /></span>
                                        </li>{/*//item*/}
                                    </ul>
                                </div>{/*//content*/}
                            </div>{/*//section-inner*/}
                        </aside>{/*//section*/}
                    </div>{/*//secondary*/}
                </div>{/*//row*/}
            </div>{/*//masonry*/}
            {/* ******FOOTER****** */}
            <footer className="footer">
                <div className="container text-center">
                    <small className="copyright">Designed with <i className="fas fa-heart" /> by Zach Kellogg </small>
                </div>{/*//container*/}
            </footer>{/*//footer*/}
        </div>

    )
}

export default Home;