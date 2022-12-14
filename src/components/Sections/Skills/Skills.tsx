import './skills.css';

const Skills = () => {
    return (
        <>
            <div className="skills-all">
                <h1 className="titles">skills</h1>
                <div className="skills-details">
                    <div className="skill-separator skill-fe">
                        <h4>front-end</h4>
                        <div className="skill-item">
                            <h5 style={{ width: "85%" }} data-value="85">javascript</h5>
                            <progress max="100" value="85" className="javascript">
                                <div className="progress-bar">
                                    <span style={{ width: "85%" }}>85%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "85%" }} data-value="85">reactjs</h5>
                            <progress max="100" value="85" className="reactjs">
                                <div className="progress-bar">
                                    <span style={{ width: "85%" }}>85%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "70%" }} data-value="70">typescript</h5>
                            <progress max="100" value="70" className="typescript">
                                <div className="progress-bar">
                                    <span style={{ width: "70%" }}>70%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "70%" }} data-value="70">material ui</h5>
                            <progress max="100" value="70" className="materialUI">
                                <div className="progress-bar">
                                    <span style={{ width: "70%" }}>70%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "65%" }} data-value="65">bootstrap</h5>
                            <progress max="100" value="65" className="bootstrap">
                                <div className="progress-bar">
                                    <span style={{ width: "65%" }}>65%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "75%" }} data-value="40">react native</h5>
                            <progress max="100" value="40" className="react native">
                                <div className="progress-bar">
                                    <span style={{ width: "40%" }}>40%</span>
                                </div>
                            </progress>
                        </div>
                    </div>
                    <div className="skill-separator skill-be">
                        <h4>back-end</h4>
                        <div className="skill-item">
                            <h5 style={{ width: "60%" }} data-value="60">nodejs</h5>
                            <progress max="100" value="60" className="nodejs">
                                <div className="progress-bar">
                                    <span style={{ width: "60%" }}>60%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "60%" }} data-value="60">express</h5>
                            <progress max="100" value="60" className="express">
                                <div className="progress-bar">
                                    <span style={{ width: "60%" }}>60%</span>
                                </div>
                            </progress>
                        </div>
                    </div>
                    <div className="skill-separator skill-db">
                        <h4>DB / TOOLS</h4>
                        <div className="skill-item">
                            <h5 style={{ width: "80%" }} data-value="80">sql</h5>
                            <progress max="100" value="80" className="sql">
                                <div className="progress-bar">
                                    <span style={{ width: "80%" }}>80%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "70%" }} data-value="70">mongodb</h5>
                            <progress max="100" value="70" className="mongodb">
                                <div className="progress-bar">
                                    <span style={{ width: "70%" }}>70%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "85%" }} data-value="85">git</h5>
                            <progress max="100" value="85" className="git">
                                <div className="progress-bar">
                                    <span style={{ width: "85%" }}>85%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "65%" }} data-value="65">heroku</h5>
                            <progress max="100" value="65" className="heroku">
                                <div className="progress-bar">
                                    <span style={{ width: "65%" }}>65%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "90%" }} data-value="90">visual code</h5>
                            <progress max="100" value="90" className="visual code">
                                <div className="progress-bar">
                                    <span style={{ width: "90%" }}>90%</span>
                                </div>
                            </progress>
                        </div>
                    </div>
                    <div className="skill-separator skill-mainframe">
                        <h4>mainframe</h4>
                        <div className="skill-item">
                            <h5 style={{ width: "95%" }} data-value="95">cobol</h5>
                            <progress max="100" value="95" className="html5">
                                <div className="progress-bar">
                                    <span style={{ width: "95%" }}>95%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "90%" }} data-value="90">cics</h5>
                            <progress max="100" value="90" className="cics">
                                <div className="progress-bar">
                                    <span style={{ width: "90%" }}>90%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "90%" }} data-value="90">jcl</h5>
                            <progress max="100" value="90" className="jcl">
                                <div className="progress-bar">
                                    <span style={{ width: "90%" }}>90%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "90%" }} data-value="90">vsam</h5>
                            <progress max="100" value="90" className="vsam">
                                <div className="progress-bar">
                                    <span style={{ width: "90%" }}>90%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "90%" }} data-value="90">db2</h5>
                            <progress max="100" value="90" className="db2">
                                <div className="progress-bar">
                                    <span style={{ width: "90%" }}>90%</span>
                                </div>
                            </progress>
                        </div>
                        <div className="skill-item">
                            <h5 style={{ width: "80%" }} data-value="80">control-m</h5>
                            <progress max="100" value="80" className="control-m">
                                <div className="progress-bar">
                                    <span style={{ width: "80%" }}>80%</span>
                                </div>
                            </progress>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills