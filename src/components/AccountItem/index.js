import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './AccountItem.module.scss';

function AccountItem() {
    return (
        <div className={style.wrapper}>
            <img
                className={style.avatar}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5de60651534d644a802f5a7d68aa5cf9~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1710666000&x-signature=qsU2wv9EnXgG0YiwDlY4dG0wLYk%3D"
                alt="imgAvatar"
            />
            <div className={style.info}>
                <h4 className={style.name}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={style.check} icon={faCheckCircle} />
                </h4>
                <span className={style.userName}>nguyenvanA</span>
            </div>
        </div>
    );
}

export default AccountItem;
