import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <div className="alert alert-danger text-center w-50 mt-5 pt-4" style={{margin:"auto", height:"100px"}}>
                <strong className="mt-5">Une erreur s'est produite. Veuillez réessayer ultérieurement.</strong>
            </div>
        </>
    )
}

export default ErrorPage;