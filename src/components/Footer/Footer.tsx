import contactme from '../../configurations/contactme.json'
import './footer.css';

type contactItem = {
    id: string;
    href: string;
    classname: string;
};

const Footer = () => {
    return (
        <footer>
            <div id="footer">
                <h5>© 2021 Federico López. All rights reserved.</h5>
                <div className="footer-contact">
                    <ul>
                        {contactme.itemContacts.map((item: contactItem) => {
                            const { id, href, classname } = item;
                            return (<li id={id} className={id}>
                                <a href={href} target="_blank" rel="noreferrer">
                                    <i className={classname} aria-hidden="true"> </i>
                                </a>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer