import React from 'react';
import Navbar from './navBar';

type Props = {
    children: React.ReactNode;
    isMobile?: boolean;
    firstGridItem?: boolean;
    // store?: Store;
    // teamRequired?: boolean;
};

class Layout extends React.Component<Props> {
    render() {
        const { children, isMobile, firstGridItem} = this.props;
        return (
            <>
                <Navbar />
                <main>{children}</main>
            </>
        )
    }
}

export default Layout;