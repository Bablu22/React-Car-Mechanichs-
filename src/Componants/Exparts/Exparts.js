
import mechanic1 from '../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../images/mechanic/mechanic-4.jpg';
import Expart from '../Expart/Expart';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
]



const Exparts = () => {


    return (
        <div className="container" id="exparts">
            <h2 className="text-center fw-bold fst-italic my-5">Our Exparts</h2>
            <div class="row row-cols-1 row-cols-md-3 g-3 ">
                {
                    experts.map(expert => <Expart
                        key={expert.name}
                        expert={expert}
                    >

                    </Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;