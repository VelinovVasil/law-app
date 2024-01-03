import React from 'react';
import './Home.css';
import lawImage from '../law-1991004_1920.jpg';
import buildingImage from '../2c8590a10358012ab2b0d1c4260d7b80.jpg';
import newsImage from '../orig-77159114660369232.jpg';

const Home = () => {
    return (
        <div className={'pageDiv'}>
            <header>
                <h1>law-app.bg – най-големият правен справочник в България</h1>
                <h3>Лесно и удобно – на едно място се помещава цялото българско законодателство.</h3>
            </header>
            <main className={'homeMain'}>
                <div className={'infoNewsContainer'}>
                    <section className={'infoSection'}>
                        <header><h2>Единствени по рода си</h2></header>
                        <p>Ние слагаме край на досадното ровене по сайтове в търсене на желания закон.</p>
                        <div className={'imgContainer'}>
                            <img src={lawImage} alt="Law Image"/>
                        </div>
                    </section>
                    <section className={'news'}>
                        <header><h2>Държавен вестник</h2></header>
                        <p>Прочетете последния брой на държавен вестник</p>
                        <a href={'https://dv.parliament.bg/DVWeb/showMaterialDV.jsp?idMat=202167'}>
                            <div className={'imgContainer'}>
                                <img src={newsImage} className={'newsImg'} alt="Law Image"/>
                            </div>
                        </a>
                    </section>
                </div>
                <section className={'infoSection'}>
                    <header><h2>Бързо, лесно, без да е необходима квалификация</h2></header>
                    <p>На един клик разстояие от целия правен ресурс в България без да сте юрист</p>
                    <div className={'imgContainer'}>
                        <img src={buildingImage} alt="Law Image"/>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
