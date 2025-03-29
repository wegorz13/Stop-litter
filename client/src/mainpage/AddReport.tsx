import { useNavigate } from "react-router-dom";

export default function AddReport() {
    const navigate = useNavigate();

    const goToLink = () => {
        navigate("/form");
    };

    return (
        <div className="text-center">
            <button className="btn btn-secondary p-4 m-5 fs-4" onClick={goToLink}>
                    Add report
            </button>
        </div>
    );
}
