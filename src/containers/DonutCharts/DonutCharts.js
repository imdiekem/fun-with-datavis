import React from 'react';
import DefaultContainer from '../../components/DefaultContainer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import Donut1 from './Donut1';

import Card from '../../components/Card';

const DonutCharts = () => {
    return (
        <DefaultContainer>
            <Header>
                <h1>Donut Charts</h1>
            </Header>
            <Main>
                <Card>
                    <Donut1 />
                </Card>
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