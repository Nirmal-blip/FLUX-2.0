import React from "react";
import { EVENT_PROTOCOLS } from "../protocols";
import RegistrationClient from "./RegistrationClient";

// Required for Static Export
export async function generateStaticParams() {
    return Object.keys(EVENT_PROTOCOLS).map((slug) => ({
        slug: slug,
    }));
}

export default function RegistrationPage() {
    return <RegistrationClient />;
}
