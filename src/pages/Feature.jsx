// import { useParams } from 'react-router-dom';
// import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';
// import style from './Feature.module.css';
// import style2 from '.././App.module.css';
// import logo from '../img/logo.png';
// import { Link } from 'react-router-dom';

// function Content({ data }) {
//   const imagePath = data.imageName === 'logo' ? logo : require(`../img/${data.imageName}`).default;

//   return (
//     <div className={`${style.featurePages} ${style2.app}`}>
//       <p><img className={style.homeLogoImg} src={imagePath} alt="logo" /></p>
//       <h1>{data.title}</h1>
//       <p>{data.desc}</p>
//       <div className={style.roundDots}>
//         <MdOutlineRadioButtonUnchecked size='2rem' />
//         <MdOutlineRadioButtonUnchecked size='2rem' />
//         <MdOutlineRadioButtonUnchecked size='2rem' />
//       </div>
//       <Link className={style2.button} to={`/${data.id}`}>{data.button}</Link>
//     </div>
//   );
// }

// function ErrorContent() {
//   return (
//     <div className={style.continue}>
//       <h1>PAGE NOT FOUND</h1>
//     </div>
//   );
// }

// export function Feature() {
//   const { featureId } = useParams();

//   const features = [
//     {
//       id: 'feature1',
//       imageName: 'logo',
//       title: 'Why me?',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//       button: 'Continue',
//     },
//     {
//       id: 'feature2',
//       imageName: 'logo',
//       title: 'Else...?',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//       button: 'Continue',
//     },
//     {
//       id: 'feature3',
//       imageName: 'logo',
//       title: 'Yes!',
//       desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//       button: 'Register',
//     },
//   ];

//   let feature = null;
//   for (const cont of features) {
//     if (cont.id === featureId) {
//       feature = cont;
//     }
//   }

//   return (
//     <div>
//       {feature ? <Content data={feature} /> : <ErrorContent />}
//     </div>
//   );
// }
