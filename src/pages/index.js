import *as React from 'react';
import {Link} from 'gatsby';

export default function IndexPage() {
    return(
        <main>
            <h1>Hello Fellas!</h1>
            <Link to="/about">Back to Home </Link>
        </main>
    );
}