import style from './Popper.module.scss';

function Wrapper({ children }) {
    return <div className={style.wrapper}>{children}</div>;
}

export default Wrapper;
