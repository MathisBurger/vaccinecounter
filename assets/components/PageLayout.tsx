import '../styles/PageLayout.css';

const PageLayout = ({children, cols}: React.PropsWithChildren<{cols: string}>) => {

    return (
        <div className={`page-layout ${cols}`}>
            {children}
        </div>
    );
};

export default PageLayout;