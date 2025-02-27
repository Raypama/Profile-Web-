// import React from 'react'

import Footer from "../organisms/Footer";
import Header from "../organisms/Header"
import { Helmet } from 'react-helmet'

interface LayoutProps {
    pageTitle: string;
    children: React.ReactNode

}
function MainLayout({ children, pageTitle }: LayoutProps) {
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <div >
                <div className="min-h-screen ">
                    <Header />
                    {/* children itu contentnya */}
                    <div className='pt-16 sm:pt-24'>
                        {children}
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default MainLayout