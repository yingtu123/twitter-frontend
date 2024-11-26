import style from './index.module.css';
import DatePickerIcon from '../../assets/datepicker-icon.svg';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayTitleItem}>Date of birth </div>
    <div>
      <span className={style.birthdayPlaceholder}>yyyy-mm-dd</span>
      <img src={DatePickerIcon} alt="datepicker-icon" className={style.datePickerIcon} />
    </div>
  </div>
);
