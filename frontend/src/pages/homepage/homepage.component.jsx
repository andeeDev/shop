import React from 'react';
import './homepage.styles.scss';
import PopularItems from "../../components/popularItems/popularItems.component";

const HomePage = () => (
    <div className='home-page'>
        <PopularItems />
    </div>
);

export default HomePage;
