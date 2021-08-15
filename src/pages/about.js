import *as React from 'react';
import {Link} from 'gatsby';
import { Seo } from '../components/seo';

export default function AboutPage() {
    return(
        <>
            <Seo
                title="About this site"
                description="More information about this site"
            />
            <main>
                <h1>About this fellas</h1>
                <Link to="/">About page </Link>
            </main>
        </>
    );
}