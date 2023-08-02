import { useHistory } from "react-router-dom/cjs/react-router-dom"

const NotFound = () => {
    const history = useHistory();
    const handleClickGoTtoHomepage = () => {
        history.push('/')
    }
    return (
        <div className="not-found-container">
            <h4>This content isn't available right now</h4>
            <h5>When this happens, it's usually because the owner only shared it with a small group of people, changed who can see it or it's been deleted.</h5>
            <button className="btn btn-primary" onClick={handleClickGoTtoHomepage}>Go to homepage</button>
        </div>
    )
}
export default NotFound