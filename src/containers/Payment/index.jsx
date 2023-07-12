import { useRouter } from "next/router";
import React from "react";
import { Button, Container } from "react-bootstrap";

function Payment () {

    const router = useRouter();
    return (
        <Container className="py-4">
            <div className="mb-4">
                <Button type='button' variant='secondary' onClick={() => router.back()}> Back</Button>
            </div>
            <h1>Payment</h1>
        </Container>
    );
}

export default Payment;