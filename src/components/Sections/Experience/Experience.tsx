import experienceHistory from '../../../configurations/experience.json';
import './experience.css';

const resolved = experienceHistory.experiences.map(experience => {
    const { rol, company, start, end, place, notes } = experience;
    return (
        <div className="exp-details">
            <div className="exp-details-left">
                <h5>{`${start.month} ${start.year} - ${end.active === true ? "Present" : `${end.month} ${end.year}`}`}</h5>
                {place.remote ? <h6>Remote</h6> : <h6>{`${place.province} , ${place.country}`}</h6>}
            </div>
            <div className="exp-details-right">
                <h4>{rol}</h4>
                <a
                    href={company.href}
                    target="_blank" rel="noreferrer"
                ><h5>{company.name}</h5></a
                >
                <p>{notes}</p>
            </div>
        </div>
    )
});

const Experience = () => {
    return (
        <>
            <div className="exp-title titles">
                <h1>experience</h1>
            </div>
            <button>
                <i className="fa fa-download fa-2x" aria-hidden="true"> </i>
                <a href="./pdf/Resume_LOPEZ_Federico.pdf" download="Resume_LOPEZ_Federico.pdf" target="_blank" rel="noreferrer">
                    RESUME
                </a>
            </button>
            <div className="exp-form">
                {resolved}
            </div>
        </>
    )
}

export default Experience