import React from 'react';
import DefaultContainer from '../../components/DefaultContainer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const DonutCharts = () => {
    return (
        <DefaultContainer>
            <Header>
                <h1>Donut Charts</h1>
            </Header>
            <Main>
               <p>
                   Exercitation cillum amet ullamco commodo veniam. Aliquip occaecat ea nulla fugiat occaecat proident consectetur laborum id enim nisi enim ad. Aute ad mollit aliquip elit elit voluptate laborum aliquip. Sint eu aliqua do pariatur exercitation duis. Aute nostrud non nostrud esse.
               </p>
               <p>
                   Occaecat do laboris tempor sint tempor excepteur. Velit duis mollit commodo in. Duis esse laborum eu voluptate consequat ad aliqua ullamco do aliqua quis magna irure.
               </p>
            </Main>
            <Sidebar>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </Sidebar>
            <Footer />
        </DefaultContainer>
    );
};

export default DonutCharts;