import { Alert } from "flowbite-react";

function AlertMessage({title, body}) {
    return (
        <Alert color="info">
            <span className="font-medium">{title}</span> {body}
        </Alert>
    );
}

export default AlertMessage
