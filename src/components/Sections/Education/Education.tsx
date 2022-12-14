import educationHistory from '../../../configurations/education.json';
import './education.css';

const Education = () => {
    return (
        <>
            <div className="edu-title">
                <h1 className="titles">education</h1>
            </div>
            <div className="edu-form">
                {educationHistory.educations.map(education => {
                    const { id, title, institute, start, end, place } = education;
                    return (<div className="edu-details" id={id}>
                        <div className="edu-details-left">
                            <h5>{`${start.month} ${start.year} - ${end.month} ${end.year}`}</h5>
                            <h6>{`${place.province} , ${place.country}`}</h6>
                        </div>
                        <div className="edu-details-right">
                            <h4>{title}</h4>
                            <a
                                href={institute.href}
                                target="_blank" rel="noreferrer"
                            ><h5>{institute.name}</h5></a
                            >
                        </div>
                    </div>)
                })}
            </div>
        </>
    )
}

export default Education