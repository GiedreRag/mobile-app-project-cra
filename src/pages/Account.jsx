import { useLocation } from 'react-router-dom';
import style from './Account.module.css';
import { AccountContent } from '../components/AccountContent';

export function Account() {
    const location = useLocation();
    const user = location.state?.user || {};

    const dataContent = [
        {
            id: 1,
            title: 'New bag!',
            img: 'bag.png',
            link: 'https://www.asos.com/kurt-geiger-london/kurt-geiger-london-kensington-cross-body-bag-with-chain-strap-in-green/prd/23443374?colourWayId=60483532&cid=8730'
        },

        {
            id: 2,
            title: 'Nr.1 dress!',
            img: 'dress.png',
            link: 'https://www.asos.com/asos-luxe/asos-luxe-corsetted-frill-bandeau-corsage-sleeve-mini-dress-in-black/prd/204572485?colourWayId=204572487&cid=10860'
        },

        {
            id: 3,
            title: 'My favourite jeans!',
            img: 'jeans.png',
            link: 'https://www.asos.com/asos-petite/asos-design-petite-ultimate-skinny-jean-in-blue/prd/204905089?colourWayId=204905093&SearchQuery=jeans'
        },
    ]

    return (
        <>
            <div className={style.account}>
                <h2>Welcome to your account, {user.name || 'User'}!</h2>
            </div>
            <div>
            { dataContent.map(accountContentObj => <AccountContent key={accountContentObj.id} dataContent={accountContentObj}/>) }
            </div>              
        </>
    );
}